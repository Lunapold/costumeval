import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catálogo de Disfraces Hinchables en Valencia',
  description: 'Explora nuestro catálogo de alquiler de disfraces hinchables en Valencia y Sagunto. Divertidos, infantiles y especiales. ¡Precios desde 15€!',
  alternates: { canonical: 'https://abrazogigante.es/catalogo' },
}

export default function CatalogoLayout({ children }: { children: React.ReactNode }) {
  return children
}
