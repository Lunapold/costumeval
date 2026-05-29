'use client'

interface CarouselArrowsProps {
  onPrev: () => void
  onNext: () => void
  className?: string
}

export default function CarouselArrows({ onPrev, onNext, className = '' }: CarouselArrowsProps) {
  return (
    <>
      <button
        onClick={onPrev}
        className={`absolute -left-8 lg:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-black hover:bg-white transition-colors z-20 ${className}`}
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={onNext}
        className={`absolute -right-8 lg:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-black hover:bg-white transition-colors z-20 ${className}`}
        aria-label="Next"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  )
}