# Go Evangelism - Presentación RevealJS

Presentación sobre el lenguaje Go para desarrolladores, cubriendo historia, características, fortalezas y casos de uso en backend y servicios en la nube.

## Inicio Rápido

### Requisitos

- Node.js v20+
- npm v10+

### Instalación

```bash
npm install
# o con make
make install
```

### Desarrollo

**Inicio rápido con Make:**

```bash
make start     # Inicia servidor en puerto 8080
make dev       # Con auto-reload
make build     # Genera sitio estático
make stop      # Detiene todos los servidores
make help      # Muestra todos los comandos
```

**O usando npm directamente:**

Iniciar servidor de desarrollo:

```bash
npm start
```

La presentación estará disponible en `http://localhost:8080/slides.md`

**Modo watch (recargar automático):**

```bash
npm run dev
```

**Abrir en navegador:**

```bash
open http://localhost:8080/slides.md
```

### Build Estático

```bash
npm run build
```

Los archivos estáticos se generarán en `_site/`
