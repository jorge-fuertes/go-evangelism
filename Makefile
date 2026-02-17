.PHONY: help install dev start build clean test serve stop

help: ## Muestra esta ayuda
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Instala las dependencias del proyecto
	npm install

dev: ## Inicia servidor de desarrollo con hot-reload en puerto 8080
	npm run dev

start: ## Inicia servidor de presentación en puerto 8080
	npm start

build: ## Genera sitio estático en directorio _site/
	npm run build

serve: ## Inicia servidor personalizado en puerto 3000 (background)
	@echo "🚀 Iniciando servidor en puerto 3000..."
	@npm run server &
	@sleep 2
	@echo "✅ Servidor corriendo en http://localhost:3000"

stop: ## Detiene todos los servidores reveal-md y node
	@echo "🛑 Deteniendo servidores..."
	@pkill -f reveal-md || true
	@pkill -f "node server-dev.js" || true
	@echo "✅ Servidores detenidos"

clean: ## Limpia archivos generados y node_modules
	rm -rf _site/
	rm -rf node_modules/

test: ## Valida que el servidor responde correctamente
	@echo "🧪 Probando servidor..."
	@curl -s -o /dev/null -w "Status: %{http_code}\n" http://localhost:8080/slides.md || echo "❌ Servidor no disponible. Ejecuta 'make start' primero"

.DEFAULT_GOAL := help
