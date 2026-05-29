import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catálogo',
  description: 'Explora nuestro catálogo de disfraces hinchables en Valencia. Divertidos, infantiles y especiales para toda ocasión.',
  alternates: { canonical: 'https://disfracesvalencia.com/catalogo' },
}

export default function CatalogoLayout({ children }: { children: React.ReactNode }) {
  return children
}
