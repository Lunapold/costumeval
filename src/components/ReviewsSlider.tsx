'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import CarouselArrows from './CarouselArrows'

const REVIEWS = [
  { name: 'María G.', text: 'Increíble servicio. Llamé a las 11 y a las 12 ya tenía mi disfraz. Perfectamente limpio.', occasion: 'Carnaval Febrero 2025', avatar: '/images/reviews/1.webp' },
  { name: 'Carlos M.', text: 'El mejor sitio de alquiler en Valencia. Precio justo y excelencia.', occasion: 'Fiesta cumpleaños Junio 2025', avatar: '/images/reviews/6.webp' },
  { name: 'Laura S.', text: 'Muy amables por teléfono, me ayudaron a elegir sin presión.', occasion: 'Halloween Octubre 2025', avatar: '/images/reviews/2.webp' },
  { name: 'Ana P.', text: 'Los disfraces son de muy buena calidad.', occasion: 'Fiesta infantil Marzo 2026', avatar: '/images/reviews/3.webp' },
  { name: 'Roberto J.', text: 'Gran variedad de tallas y estilos.', occasion: 'Fiesta temática Agosto 2025', avatar: '/images/reviews/5.webp' },
  { name: 'Elena R.', text: 'Servicio rápido y sin complicaciones.', occasion: 'Nochevieja Diciembre 2025', avatar: '/images/reviews/4.webp' },
]

export default function ReviewsSlider() {
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const updateCounts = () => {
      const width = window.innerWidth
      let count = 3
      if (width < 768) count = 1
      else if (width < 1024) count = 2
      setVisibleCount(count)
    }
    
    updateCounts()
    
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)
    
    window.addEventListener('resize', updateCounts)
    return () => {
      window.removeEventListener('resize', updateCounts)
      clearTimeout(timer)
    }
  }, [])

  const totalPages = Math.ceil(REVIEWS.length / visibleCount)
  
  const prevSlide = () => setCurrent((prev) => (prev - 1 + totalPages) % totalPages)
  const nextSlide = () => setCurrent((prev) => (prev + 1) % totalPages)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide() }
      if (e.key === 'ArrowRight') { e.preventDefault(); nextSlide() }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [totalPages])

  return (
    <div className="reviews-wrapper">
      <div className="reviews-grid">
        {[0,1,2].map((idx) => {
          const reviewIndex = current * visibleCount + idx
          return (
              <div key={idx} className="review-card">
                {loading ? (
                  <div className="skeleton-content" />
                ) : (
                  <div className="review-content">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 mx-auto">
                      <Image
                        src={REVIEWS[reviewIndex]?.avatar || ''}
                        alt={REVIEWS[reviewIndex]?.name || ''}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 1 7.19 7.63 0 8.24l5.46 4.73L3.82 20z" />
                        </svg>
                      ))}
                    </div>
                    <p className="review-text">"{REVIEWS[reviewIndex]?.text}"</p>
                    <div className="review-author">
                      <p className="font-bold" style={{color: '#1A1A1A'}}>{REVIEWS[reviewIndex]?.name}</p>
                      <p className="text-xs text-gray-500">{REVIEWS[reviewIndex]?.occasion}</p>
                    </div>
                  </div>
                )}
              </div>
          )
        })}
      </div>

      {totalPages > 1 && !loading && (
        <>
          <CarouselArrows onPrev={prevSlide} onNext={nextSlide} />
          
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${index === current ? 'bg-white w-6' : 'bg-white/50 w-2'}`}
              />
            ))}
          </div>
        </>
      )}

      {(totalPages <= 1 || loading) && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="h-2 rounded-full bg-white/50 w-2" />
        </div>
      )}

      <style>{`
        .reviews-wrapper {
          min-height: 200px;
          padding: 0 1.5rem;
          width: 100%;
          max-width: calc(100% - 40px);
          margin: 0 auto;
          box-sizing: border-box;
          position: relative;
        }
        
        @media (min-width: 1024px) {
          .reviews-wrapper {
            max-width: calc(100% - 120px);
            padding: 0;
          }
        }
        
        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          width: 100%;
          margin: 0 auto;
        }
        
        .reviews-grid .review-card:nth-child(n+2) {
          display: none;
        }
        
        @media (min-width: 768px) {
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .reviews-grid .review-card:nth-child(n+2) {
            display: flex;
          }
          .reviews-grid .review-card:nth-child(n+3) {
            display: none;
          }
        }
        
        @media (min-width: 1024px) {
          .reviews-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .reviews-grid .review-card {
            display: flex !important;
          }
        }
        
         .review-card {
           background: white;
           border-radius: 0.3rem;
           padding: 1.5rem;
           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
           height: 20rem;
           display: flex;
           flex-direction: column;
         }
         
         .review-content {
           width: 100%;
           display: flex;
           flex-direction: column;
           height: 100%;
           overflow: visible;
         }
        
         .review-text {
            color: #4b5563;
            margin-bottom: 1rem;
            font-weight: 500;
            flex: 1;
            overflow-wrap: break-word;
            word-break: break-word;
            font-size: 0.875rem;
          }
          
          @media (min-width: 768px) {
            .review-text {
              font-size: 1rem;
            }
          }
        
        .review-author {
          margin-top: auto;
        }
        
         .skeleton-content {
           width: 100%;
           height: 14rem;
           background: #e5e7eb;
           border-radius: 8px;
           animation: pulse 1.5s ease-in-out infinite;
         }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .review-content {
          width: 100%;
        }
        
        .review-text {
          color: #4b5563;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .review-author {
          margin-top: auto;
        }
      `}</style>
    </div>
  )
}