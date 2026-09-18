# Loncoche-Info-TDM

Noticiero oficial de la **Selección de Tenis de Mesa de Loncoche**. Sitio 100% estático (sin backend, sin base de datos, sin login) construido con **Astro** + **Tailwind CSS**, pensado para que el contenido se actualice a mano editando archivos.

## ¿Por qué Astro y no HTML puro?

- El contenido de cada noticia vive en un archivo `.md` simple (título, fecha, resumen, categoría + el texto). No hay que tocar HTML ni CSS para publicar una noticia nueva.
- Genera un sitio estático (HTML/CSS puro en el resultado final), así que sigue sin necesitar backend ni servidor.
- Tiene rutas automáticas, componentes reutilizables (menú, pie de página, tarjetas de noticia) y carga muy rápido.
- Se integra de forma nativa con Vercel: se detecta y despliega sin configuración adicional.

## Estructura del contenido

```
src/
  content/
    noticias/            ← Cada archivo .md es una noticia
  pages/
    index.astro           ← Portada
    noticias/index.astro  ← Listado de noticias
    noticias/[...slug].astro ← Página de detalle (automática)
    equipo.astro           ← Plantel y cuerpo técnico
    calendario.astro        ← Próximos torneos
    contacto.astro           ← Datos de contacto
```

## Cómo agregar o editar una noticia

1. Crea un archivo nuevo en `src/content/noticias/`, por ejemplo `mi-noticia.md`.
2. Copia este encabezado y complétalo:

```markdown
---
titulo: "Título de la noticia"
resumen: "Bajada corta que aparece en las tarjetas de noticia."
fecha: 2026-09-18
autor: "Cuerpo Técnico TDM Loncoche"
categoria: "Resultados"   # Resultados | Convocatorias | Torneos | Institucional
destacada: false            # true para que aparezca grande en la portada
---

Aquí va el cuerpo de la noticia, en Markdown normal.
```

3. Guarda el archivo. Astro genera automáticamente la página en `/noticias/mi-noticia`.

## Cómo editar equipo, calendario y contacto

Esas secciones no usan archivos Markdown porque son datos más estructurados (listas cortas). Edita directamente los arreglos al inicio de:

- `src/pages/equipo.astro` → jugadores y cuerpo técnico
- `src/pages/calendario.astro` → próximos torneos
- `src/pages/contacto.astro` → datos de contacto

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Desplegar en Vercel con el nombre "NoticiasTenisdeMesaLoncoche"

### Opción A: desde la web de Vercel (recomendada)

1. Sube este repositorio a GitHub (si aún no lo has hecho).
2. Entra a [vercel.com](https://vercel.com) → **Add New → Project** → importa el repositorio.
3. Vercel detecta Astro automáticamente (build command `astro build`, output `dist`).
4. En **Project Name**, escribe `NoticiasTenisdeMesaLoncoche` (Vercel lo normaliza a minúsculas: quedará como `noticiastenisdemesaloncoche`).
5. Deploy. La URL quedará como `https://noticiastenisdemesaloncoche.vercel.app`.

### Opción B: desde la terminal con Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --name NoticiasTenisdeMesaLoncoche
```

En el primer despliegue te preguntará el nombre del proyecto; ingresa `NoticiasTenisdeMesaLoncoche`. Para producción:

```bash
vercel --prod
```

Cada vez que quieras publicar una noticia nueva: edita/crea el `.md`, haz commit y push (si usas GitHub, Vercel redespliega solo) o vuelve a correr `vercel --prod`.
