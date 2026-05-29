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

  return (
    <article className="group/costume">
      <Link href={`/disfraz/${costume.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4 costume-card-item">
          <Image
            src={costume.image}
            alt={costume.name}
            fill
            className="object-cover group-hover/costume:scale-110 transition-transform duration-300 ease-out"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
          {!loaded && (
            <div className="absolute inset-0 bg-gray-200" />
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