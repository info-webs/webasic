# ATRA y Obesidad — Sitio (basado en astro-launch-ui)

Resumen rápido de tareas y cómo trabajar con el proyecto.

## Ejecutar localmente
- Instalar dependencias: `npm install`
- Ejecutar en dev: `npm run dev`
- Compilar: `npm run build`
- IMPORTANTE: después de instalar dependencias, ejecutar `npx astro sync` o `npm run dev` para que `@astrojs/content` genere los tipos de contenido (`astro:content`).

## Añadir posts al blog
- Crear archivo en `src/content/blog` con frontmatter: `title`, `description`, `date` (YYYY-MM-DD), `tags`, `draft: true|false`.
- Los posts están disponibles en `/blog` después de build.

## Configurar formulario (Formspree)
- Abrir `src/components/ContactForm.astro` y reemplazar `FORM_ENDPOINT` por el endpoint de Formspree (`https://formspree.io/f/{your-id}`) o usar Netlify Forms (ver netlify docs).

## SEO checklist
- Revisar `title` y `meta description` en cada página (`BaseLayout` + `SEO` component).
- Añadir OpenGraph / Twitter image (`/public/og-image.png`).
- Añadir enlaces verificables en la página `/tca` y la sección de recursos.
- Revisar `robots.txt` y `sitemap.xml` después del deploy.

## Pendientes importantes
- Añadir CMP (gestión de cookies).
- Revisar y completar textos legales (CIF, responsable, política de cookies detallada).
- Optimizar y subir `og-image.svg` y logos finales (logo.png, logo-mark.png).
- Ejecutar pruebas de accesibilidad (Lighthouse) y corregir problemas.
- Configurar el endpoint real de Formspree en `src/components/ContactForm.astro`.
- Añadir enlaces verificables en `/tca` y en el post `Recursos y apoyo en Salamanca`.
- Revisar y ajustar metadatos OpenGraph para imágenes finales.

---

## Checklist rápido de SEO y accesibilidad
- Meta title y description en cada página (implementado a través de `BaseLayout` y `SEO` component).
- Sitemap generado por `@astrojs/sitemap` (revisar tras deploy).
- Robots.txt en `/public/robots.txt`.
- JSON-LD para Organization y Article en posts (implementado).
- BreadcrumbList en páginas internas (implementado).
- Skip-to-content, focus visible, etiquetas en formularios y alt en imágenes (implementado parcialmente).
