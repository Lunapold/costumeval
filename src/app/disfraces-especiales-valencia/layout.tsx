import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disfraces Especiales',
  description: 'Disfraces hinchables especiales para alquilar en Valencia. Ideales para momentos emotivos y celebraciones únicas.',
  alternates: { canonical: 'https://abrazogigante.es/disfraces-especiales-valencia' },
}

export default function EspecialesLayout({ children }: { children: React.ReactNode }) {
  return children
}
