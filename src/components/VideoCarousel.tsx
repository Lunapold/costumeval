'use client'

import { useState, useEffect } from 'react'

const VIDEOS = [
  'https://assets.mixkit.co/videos/34451/34451-720.mp4',
  'https://assets.mixkit.co/videos/34450/34450-720.mp4',
  'https://assets.mixkit.co/videos/34456/34456-720.mp4',
]

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % VIDEOS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full bg-gray-900">
      {VIDEOS.map((src, index) => (
        <video
          key={src}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {VIDEOS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === current ? 'bg-white w-6' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  )
}