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

## Conectar dominio propio (sb-abogados-misiones.com en Vercel)

1. En el proyecto de Vercel: **Settings → Domains → Add** e ingresar `sb-abogados-misiones.com`.
2. Vercel va a pedir agregar en el DNS del registrador del dominio:
   - Registro **A** en `@` (raíz) apuntando a `76.76.21.21`
   - Registro **CNAME** en `www` apuntando a `cname.vercel-dns.com`
   (Vercel muestra los valores exactos en pantalla al agregar el dominio; pueden variar levemente, usar siempre lo que indique la UI en el momento.)
3. Agregar también `www.sb-abogados-misiones.com` como dominio y configurar la redirección (por lo general `www` → raíz o viceversa, a elección).
4. Esperar la propagación del DNS (minutos a un par de horas). Vercel emite el certificado SSL automáticamente una vez verificado.

`robots.txt` y `sitemap.xml` ya están configurados con `https://www.sb-abogados-misiones.com`.
