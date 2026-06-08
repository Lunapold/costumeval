'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface Costume {
  id: number
  name: string
  slug: string
  price: number
  image: string
  category: string | string[]
  description: string
}

const CATEGORY_LABELS: Record<string, string> = {
  divertidos: 'Divertidos',
  infantiles: 'Infantiles',
  especiales: 'Especiales',
}

export default function CostumeCard({ costume }: { costume: Costume }) {
  const [loaded, setLoaded] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)

  const base = costume.image.substring(0, costume.image.lastIndexOf('/'))
  const images = [`${base}/1.webp`, `${base}/2.webp`, `${base}/3.webp`]
  const src = hovering ? images[currentIdx] : costume.image

  const prev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIdx(i => (i === 0 ? images.length - 1 : i - 1))
  }

  const next = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIdx(i => (i === images.length - 1 ? 0 : i + 1))
  }

  const goTo = (idx: number) => (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIdx(idx)
  }

  return (
    <article className="group/costume">
      <Link href={`/disfraz/${costume.slug}`} className="block">
        <div
          className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4 costume-card-item"
          onMouseEnter={() => { setHovering(true); setCurrentIdx(0) }}
          onMouseLeave={() => setHovering(false)}
        >
          <Image
            src={src}
            alt={`Alquiler de disfraz hinchable de ${costume.name} en Valencia`}
            fill
            className="object-cover group-hover/costume:scale-110 transition-transform duration-300 ease-out"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
          {!loaded && (
            <div className="absolute inset-0 bg-gray-200" />
          )}

          {hovering && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-10"
                aria-label="Foto anterior"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-10"
                aria-label="Siguiente foto"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={goTo(idx)}
                    className={
                      idx === currentIdx
                        ? 'bg-[#d0632a] w-5 h-2.5 rounded-full transition-all duration-300'
                        : 'w-2.5 h-2.5 rounded-full bg-white/70 hover:bg-white transition-colors'
                    }
                    aria-label={`Foto ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

          <div className="px-1">
            <p className="text-xs uppercase tracking-wider mb-2 text-[#4A4A4A]">
              {CATEGORY_LABELS[Array.isArray(costume.category) ? costume.category[0] : costume.category]}
            </p>
            <h3 
              className="text-[1rem] mb-2 font-medium"
              style={{ color: '#1A1A1A' }}
            >
              {costume.name}
            </h3>
            <p className="text-[1.125rem] font-semibold text-[#1A1A1A]">
              desde {costume.price} €
            </p>
            
            <div className="hidden lg:block mt-4 opacity-0 -translate-y-2 group-hover/costume:opacity-100 group-hover/costume:translate-y-0 transition-all duration-300">
              <span className="block w-full px-6 py-2 text-sm font-semibold rounded border-2 border-[#1A1A1A] text-[#1A1A1A] bg-white hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer text-center">
                Ver detalles
              </span>
            </div>
          </div>
      </Link>
    </article>
  )
}