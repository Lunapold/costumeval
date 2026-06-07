import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Todos los Disfraces Hinchables',
  description: 'Catálogo completo de disfraces hinchables para alquilar en Valencia. Más de 10 modelos desde 15€. ¡Reserva el tuyo hoy!',
  alternates: { canonical: 'https://abrazogigante.es/catalogo/todos' },
}

export default function TodosLayout({ children }: { children: React.ReactNode }) {
  return children
}
