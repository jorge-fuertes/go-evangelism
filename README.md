# 🐹 Go Evangelism - Presentación RevealJS

Presentación sobre el lenguaje Go para desarrolladores, cubriendo historia, características, fortalezas y casos de uso en backend y servicios en la nube.

## 📋 Contenido

1. **Introducción e Historia de Go** - Creación por Google, filosofía y hitos
2. **Características Fundamentales** - Compilación, tipado, concurrencia, gestión de memoria
3. **Fortalezas de Go** - Rendimiento, velocidad, binarios, tooling
4. **Go vs Lenguajes Interpretados** - Comparación técnica con Python/JavaScript
5. **Go vs Java** - Ventajas competitivas vs Java
6. **Go para Backend** - APIs, manejo de conexiones, frameworks
7. **Microservicios y Cloud** - Diseño cloud-native, containerización
8. **Conclusiones** - Recursos y llamadas a acción

## 🚀 Inicio Rápido

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

## 🎨 Temas y Personalización

- **Tema**: Dark Molokai con branding de Gopher
- **Logo**: Gopher con gafas integrado en la plantilla
- **Estilos**: CSS personalizado en `assets/css/`

## 📁 Estructura del Proyecto

```
.
├── slides.md           # Contenido principal
├── package.json        # Dependencias
├── slides/            # Recursos de slides
├── assets/
│   ├── css/          # Estilos personalizados
│   ├── images/       # Imágenes y logos
│   └── code/         # Ejemplos de código
└── README.md         # Este archivo
```

## 🛠️ Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm start` - Iniciar presentación estática
- `npm run build` - Compilar para producción
- `npm run server` - Servidor en puerto 3000

## 📝 Licencia

MIT
