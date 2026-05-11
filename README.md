# Portfolio Site

Sitio estático pensado para complementar un CV con más contexto, casos y forma de trabajo.

## Qué editar primero

1. Abre `content.js`.
2. Sustituye el nombre, el rol y los textos de ejemplo.
3. Rellena los bloques de `projects`, `experience` y `contact`.
4. Si quieres enlazar el CV en PDF, añade una entrada en `contact.links` con la URL pública del archivo.

## Vista previa local

Desde esta carpeta:

```bash
python3 -m http.server 4173
```

Luego abre `http://127.0.0.1:4173`.

## Publicación gratuita

Este sitio no necesita build step ni backend, así que puedes publicarlo gratis en varios servicios.

### Opción 1: GitHub Pages

- Crea un repositorio nuevo solo para el portfolio o sube el contenido de esta carpeta.
- Publica el repositorio con GitHub Pages.
- Guía oficial: <https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site>

### Opción 2: Netlify

- Arrastra esta carpeta al panel de Netlify o conecta un repositorio.
- Al ser HTML/CSS/JS estático, no hace falta comando de build.
- Guía oficial: <https://docs.netlify.com/deploy/create-deploys/>

### Opción 3: Vercel

- Importa el repositorio o esta carpeta como proyecto.
- Cada deployment genera una URL propia y puedes conectar un repositorio para publicar en cada push.
- Guía oficial: <https://vercel.com/docs/deployments/deployment-methods>

## Estructura

- `index.html`: estructura semántica y accesible.
- `styles.css`: diseño responsive y estilos.
- `content.js`: contenido editable en español e inglés.
- `app.js`: renderizado y selector de idioma.
