'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface FotoGalleryProps {
  images: string[]
}

export default function FotoGallery({ images }: FotoGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null)

  const prevImage = () => {
    setSelected((prev) => (prev === null ? null : prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextImage = () => {
    setSelected((prev) => (prev === null ? null : prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    if (selected === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); prevImage() }
      if (e.key === 'ArrowRight') { e.preventDefault(); nextImage() }
      if (e.key === 'Escape') { setSelected(null) }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selected])

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((file, idx) => (
          <button
            key={file}
            onClick={() => setSelected(idx)}
            className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d0632a]"
          >
            <Image
              src={`/images/fotos/${file}`}
              alt={`Foto ${file}`}
              width={400}
              height={400}
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white text-3xl leading-none hover:text-gray-300 z-10"
          >
            ✕
          </button>

          <div className="relative flex items-center justify-center w-full max-w-5xl" style={{ height: '85vh' }}>
            <div className="relative w-full h-full">
              <button
                onClick={(e) => { e.stopPropagation(); prevImage() }}
                className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-10"
                aria-label="Anterior"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage() }}
                className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-10"
                aria-label="Siguiente"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>

              <Image
                src={`/images/fotos/${images[selected]}`}
                alt={`Foto ${images[selected]}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
