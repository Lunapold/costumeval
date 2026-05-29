import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Todos los disfraces',
  description: 'Catálogo completo de disfraces hinchables en Valencia. Más de 10 modelos para alquilar desde 15€.',
  alternates: { canonical: 'https://disfracesvalencia.com/catalogo/todos' },
}

export default function TodosLayout({ children }: { children: React.ReactNode }) {
  return children
}
