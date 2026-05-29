'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface CostumeImageCarouselProps {
  images: string[]
  name: string
}

export default function CostumeImageCarousel({ images, name }: CostumeImageCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); prevImage() }
      if (e.key === 'ArrowRight') { e.preventDefault(); nextImage() }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [images.length])

  return (
    <div className="w-full lg:w-[90%] lg:mx-auto relative">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-card costume-card-item">
        <Image
          src={images[currentImage]}
          alt={`${name} ${currentImage + 1}`}
          fill
          className="object-cover"
          priority={currentImage === 0}
        />
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
              aria-label="Foto anterior"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
              aria-label="Siguiente foto"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>
      
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={
                idx === currentImage 
                  ? 'bg-[#d0632a] w-6 h-3 rounded-full transition-all duration-300' 
                  : 'w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors'
              }
              aria-label={`Foto ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
