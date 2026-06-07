import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disfraces Infantiles para Alquilar en Valencia',
  description: 'Alquiler de disfraces hinchables infantiles en Valencia. Los favoritos de niños para cumpleaños y celebraciones familiares. ¡Desde 15€!',
  alternates: { canonical: 'https://abrazogigante.es/disfraces-infantiles-valencia' },
}

export default function InfantilesLayout({ children }: { children: React.ReactNode }) {
  return children
}
