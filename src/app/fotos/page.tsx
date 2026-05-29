import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import FotoGallery from '@/components/FotoGallery'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: 'Fotos',
  description: 'Galería de fotos de disfraces hinchables en acción. Mira cómo quedan nuestros disfraces hinchables en Valencia.',
  alternates: { canonical: 'https://disfracesvalencia.com/fotos' },
}

export default function FotosPage() {
  const fotosDir = path.join(process.cwd(), 'public', 'images', 'fotos')
  const files = fs.readdirSync(fotosDir)
  const images = files
    .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()

  return (
    <div suppressHydrationWarning>
      <main className="min-h-screen pt-10 pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs />
          <h1 className="section-title mb-8">Fotos</h1>
          
          <p className="text-center text-gray-600 mb-12">Descubre nuestros disfraces en acción</p>
          
          <FotoGallery images={images} />
        </div>
      </main>
    </div>
  )
}
