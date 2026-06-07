import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disfraces Especiales para Alquilar en Valencia',
  description: 'Alquiler de disfraces hinchables especiales en Valencia. Ideales para momentos emotivos, despedidas y celebraciones únicas. ¡Desde 15€!',
  alternates: { canonical: 'https://abrazogigante.es/disfraces-especiales-valencia' },
}

export default function EspecialesLayout({ children }: { children: React.ReactNode }) {
  return children
}
