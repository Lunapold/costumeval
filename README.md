# AbrazoGigante — Alquiler de Disfraces Hinchables

Web para alquiler de disfraces hinchables en Valencia y Sagunto.  
Next.js 16 + Tailwind CSS.

## Inicio rápido

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Scripts

| Comando         | Descripción                 |
|-----------------|-----------------------------|
| `npm run dev`   | Desarrollo (port 3000)      |
| `npm run build` | Producción                  |
| `npm start`     | Servidor producción         |

## Estructura

```
src/
├── app/                     # Páginas (App Router)
│   ├── page.tsx             # Inicio (video/photo banner)
│   ├── not-found.tsx        # Página 404
│   ├── catalogo/            # Catálogo + subcategorías
│   ├── disfraz/[slug]/      # Página detalle disfraz
│   ├── disfraces-*-valencia/# Páginas categoría
│   ├── contacto/            # Contacto
│   ├── info/                # Información / FAQ
│   ├── fotos/               # Galería de fotos
│   ├── layout.tsx           # Root layout (metadatos, SEO)
│   ├── sitemap.ts           # Sitemap XML
│   └── robots.ts            # Robots.txt
├── components/              # Componentes
│   ├── Header.tsx           # Sticky header con 2 logos
│   ├── VideoSection.tsx     # Banner (video mobile / foto desktop)
│   ├── Breadcrumbs.tsx      # Breadcrumbs + JSON-LD schema
│   ├── CostumeCard.tsx      # Card disfraz en cuadrícula
│   ├── CostumeImageCarousel.tsx
│   ├── FotoGallery.tsx      # Lightbox para fotos
│   ├── ReviewsSlider.tsx    # Reseñas de clientes
│   ├── Footer.tsx           # Footer (copyright)
│   ├── PhoneBlock.tsx       # Bloque llamada
│   └── StickyPhone.tsx      # Teléfono fijo abajo
data/
├── costumes.json            # Catálogo (13 disfraces, 3 categorías)
public/
├── images/
│   ├── costumes/*/          # Fotos por disfraz (1.webp, 2.webp, 3.webp)
│   ├── fotos/               # Galería general
│   ├── reviews/             # Avatares reseñas (1.webp–6.webp)
│   ├── uso.webp             # Imagen instrucciones universal
│   ├── disfraces.webp       # Logo hero "disfraces"
│   ├── Logo.webp            # Logo principal
│   └── Logo_mini.webp       # Logo pequeño
├── videos/
│   ├── video.mp4            # Video banner (mobile/tablet)
│   └── 1.jpg                # Foto banner (desktop)
└── favicon.png
```

## Características

- **Banner adaptable**: video en móvil/tablet, foto en desktop
- **3 categorías**: divertidos, infantiles, especiales
- **Multi-categoría**: Niña y Niño aparecen en especiales + infantiles
- **Galería con lightbox**: fotos con navegación por teclado
- **Reseñas**: slider con avatares circulares
- **Instrucciones**: bloque colapsable con advertencia (obligatorio leer)
- **Página 404**: personalizada con enlace al catálogo
- **SEO completo**: JSON-LD (Product, BreadcrumbList, FAQPage, LocalBusiness, VideoObject), sitemap, robots, canonical, Open Graph, Twitter Cards
- **Imágenes WebP**: todas las imágenes convertidas (44 MB → 5.5 MB)

## Configuración

1. Añadir fotos de disfraces en `public/images/costumes/<slug>/1.webp`, `2.webp`, `3.webp`
2. Añadir fotos para galería en `public/images/fotos/`
3. Añadir video en `public/videos/video.mp4`
4. Añadir foto desktop en `public/videos/1.jpg`
5. Añadir avatares reseñas en `public/images/reviews/1.webp`–`6.webp`
6. Cambiar teléfono (buscar `+34602042056` en `src/`)
7. Editar `data/costumes.json` para añadir/quitar disfraces
8. Editar reseñas en `src/components/ReviewsSlider.tsx`

## SEO

- **Metadatos** por página (title template `%s | AbrazoGigante`)
- **Structured data**: LocalBusiness (layout), Product (disfraz/[slug]), BreadcrumbList (Breadcrumbs), FAQPage (info)
- **Sitemap** auto-generado en `/sitemap.xml`
- **Robots.txt** en `/robots.txt`
- **Canonical URLs** en cada página
- **Open Graph** para compartir en redes

## Colores

| Uso             | Color   |
|-----------------|---------|
| Marca (naranja) | #d0632a |
| Texto hero      | #773c3c |
| Fondo oscuro    | #1a1a1a |
