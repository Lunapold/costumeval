import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disfraces Divertidos',
  description: 'Disfraces hinchables divertidos para alquilar en Valencia. Perfectos para fiestas, reels, cumpleaños y sorpresas.',
  alternates: { canonical: 'https://abrazogigante.es/disfraces-divertidos-valencia' },
}

export default function DivertidosLayout({ children }: { children: React.ReactNode }) {
  return children
}
