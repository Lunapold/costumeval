import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Página no encontrada',
  description: 'La página que buscas no existe. Vuelve al catálogo de disfraces hinchables en Valencia.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4" style={{color: '#d0632a'}}>404</h1>
        <h2 className="text-2xl font-bold mb-4" style={{color: '#1A1A1A'}}>Página no encontrada</h2>
        <p className="text-gray-500 mb-8">La página que buscas no existe o ha sido movida.</p>
        <Link href="/catalogo" className="btn-primary text-lg px-8 py-4">
          Ver catálogo
        </Link>
      </div>
    </div>
  )
}
