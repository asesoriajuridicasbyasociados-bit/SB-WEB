# SB y Asociados — Sitio Web

Sitio estático (HTML + CSS puro, sin build ni dependencias) del estudio jurídico SB y Asociados (Posadas, Misiones).

## Estructura

```
index.html                              Inicio
especialidades.html                     Índice de áreas de práctica
civil.html, familia.html, laboral.html,
laboral-accidentes.html, despidos.html,
penal.html, delitos-economicos.html,
previsional.html, regimen-comunicacion.html   Páginas por área
novedades.html + novedad-*.html         Blog/novedades
nosotros.html, contacto.html            Institucionales
404.html                                Página de error
styles.css, extra.css                   Estilos
robots.txt, sitemap.xml                 SEO básico
vercel.json, netlify.toml               Configuración de despliegue
```

No hay build step: son archivos HTML/CSS servidos tal cual.

## Despliegue

### Vercel
1. Importar este repositorio en https://vercel.com/new
2. Framework Preset: **Other** (sitio estático)
3. Build Command: dejar vacío
4. Output Directory: `.` (raíz)
5. Deploy

### Netlify
1. "Add new site" → "Import an existing project" en https://app.netlify.com
2. Build command: dejar vacío
3. Publish directory: `.` (ya configurado en `netlify.toml`)
4. Deploy

## Conectar dominio propio

Una vez desplegado, avisame el dominio que vas a usar (por ejemplo `sbyasociados.com.ar`) y te guío paso a paso según dónde lo tengas registrado (NIC.ar u otro registrador). En términos generales:

**Vercel:** Project → Settings → Domains → agregar el dominio. Vercel indica si hay que apuntar un registro `A` (dominio raíz) o `CNAME` (subdominio `www`) en tu proveedor de DNS.

**Netlify:** Site settings → Domain management → Add a domain. Netlify ofrece usar sus DNS (Netlify DNS) o indicarte los registros para tu proveedor actual.

Antes de eso, reemplazá `TU-DOMINIO` en `robots.txt` y `sitemap.xml` por el dominio definitivo.
