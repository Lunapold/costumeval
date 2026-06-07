import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disfraces Divertidos para Alquilar en Valencia',
  description: 'Alquiler de disfraces hinchables divertidos en Valencia. Perfectos para fiestas, cumpleaños, reels y sorpresas. ¡Desde 15€!',
  alternates: { canonical: 'https://abrazogigante.es/disfraces-divertidos-valencia' },
}

export default function DivertidosLayout({ children }: { children: React.ReactNode }) {
  return children
}
