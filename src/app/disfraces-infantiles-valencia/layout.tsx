import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disfraces Infantiles',
  description: 'Disfraces hinchables infantiles para alquilar en Valencia. Los favoritos de niños y celebraciones familiares.',
  alternates: { canonical: 'https://disfracesvalencia.com/disfraces-infantiles-valencia' },
}

export default function InfantilesLayout({ children }: { children: React.ReactNode }) {
  return children
}
