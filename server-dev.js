import { createServer } from "http";
import { spawn } from "child_process";
import { watch } from "fs";
import { WebSocketServer } from "ws";

// Inicia reveal-md en puerto 3001 (puerto interno)
const revealProcess = spawn(
  "npx",
  [
    "reveal-md",
    "slides.md",
    "--host",
    "127.0.0.1",
    "--port",
    "3001",
    "--disable-auto-open",
  ],
  {
    cwd: process.cwd(),
    stdio: "inherit",
  },
);

// Script de hot-reload a inyectar en el HTML
const hotReloadScript = `
<script>
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const ws = new WebSocket(protocol + '//' + window.location.host + '/hot-reload');
  
  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.type === 'reload') {
      console.log('🔄 Recargando slides...');
      // Espera un poco para que reveal-md recargue el contenido
      setTimeout(() => {
        location.reload();
      }, 500);
    }
  };
  
  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
  };
  
  ws.onclose = () => {
    console.log('WebSocket desconectado, reintentando...');
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
</script>
`;

// Espera a que reveal-md inicialice
setTimeout(() => {
  // Crea un servidor proxy que redirige / a /slides.md
  const server = createServer(async (req, res) => {
    // Ruta especial para WebSocket HTTP upgrade
    if (req.url === "/hot-reload") {
      return; // WebSocket será manejado por wss
    }

    const path = req.url === "/" ? "/slides.md" : req.url;

    try {
      const response = await fetch(`http://localhost:3001${path}`);
      const contentType = response.headers.get("content-type");

      let data = await response.text();

      // Inyecta el script de hot-reload en documentos HTML
      if (contentType && contentType.includes("text/html")) {
        data = data.replace("</body>", hotReloadScript + "</body>");
      }

      res.writeHead(response.status, {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
      });

      res.end(data);
    } catch (error) {
      res.writeHead(502);
      res.end("Bad Gateway: " + error.message);
    }
  });

  // WebSocket para hot-reload
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    console.log("📱 Cliente conectado para hot-reload");
  });

  // Monitorea cambios en slides.md
  watch("slides.md", () => {
    console.log("📝 slides.md cambió - notificando clientes...");
    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        // WebSocket.OPEN
        client.send(JSON.stringify({ type: "reload" }));
      }
    });
  });

  server.listen(3000, "0.0.0.0", () => {
    console.log("🚀 Presentation server running at http://localhost:3000");
    console.log("📊 Slides available at http://localhost:3000/slides.md");
    console.log(
      "🔄 Hot-reload habilitado - cambios en slides.md se cargarán automáticamente",
    );
  });
}, 2000);

process.on("SIGINT", () => {
  revealProcess.kill();
  process.exit(0);
});
