'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import CostumeCard from '@/components/CostumeCard'
import PhoneBlock from '@/components/PhoneBlock'
import VideoSection from '@/components/VideoSection'
import ReviewsSlider from '@/components/ReviewsSlider'
import { CostumeCardSkeleton } from '@/components/Skeleton'
import costumes from '../../data/costumes.json'
import { useState, useEffect } from 'react'

const PHONE = '+34602042056'

export default function HomePage() {
  const [loading, setLoading] = useState(true)
  const [skeletonCount, setSkeletonCount] = useState(8)
  const featured = costumes.slice(0, 8)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const updateCount = () => {
      setSkeletonCount(window.innerWidth < 1024 ? 6 : 8)
    }
    updateCount()
    window.addEventListener('resize', updateCount)
    return () => window.removeEventListener('resize', updateCount)
  }, [])

  return (
    <div suppressHydrationWarning>
      <section className="w-full m-0 p-0">
        <VideoSection />
      </section>

      <style>{`
        .hero-alquiler { font-size: 1rem; }
        .hero-valencia { font-size: 1.25rem; font-weight: 800; margin-bottom: 2.5rem; }
        .hero-reserva { font-size: 1rem; }
        
        @media (min-width: 768px) {
          .hero-alquiler { font-size: 1.25rem; }
          .hero-valencia { font-size: 1.5rem; }
          .hero-reserva { font-size: 1.25rem; }
        }
        
        @media (min-width: 1024px) {
          .hero-alquiler { font-size: 1.5rem; }
          .hero-valencia { font-size: 2rem; }
          .hero-reserva { font-size: 1.5rem; }
        }
        
        @media (min-width: 1440px) {
          .hero-alquiler { font-size: 1.75rem; }
          .hero-valencia { font-size: 2.5rem; }
          .hero-reserva { font-size: 1.75rem; }
        }
        
        @media (min-width: 1920px) {
          .hero-alquiler { font-size: 2rem; }
          .hero-valencia { font-size: 3rem; }
          .hero-reserva { font-size: 2rem; }
        }
        
        @media (min-width: 2560px) {
          .hero-alquiler { font-size: 2.5rem; }
          .hero-valencia { font-size: 3.5rem; }
          .hero-reserva { font-size: 2.5rem; }
        }
      `}</style>

      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-4 md:mb-6 leading-tight">
            <span className="hero-valencia block tracking-widest" style={{fontFamily: "'Manrope', system-ui, sans-serif", marginBottom: 0, color: '#773c3c'}}>Alquiler de</span>
            <span className="block flex justify-center">
              <img src="/images/disfraces.webp" alt="disfraces hinchables" className="w-full max-w-[280px] sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-4xl h-auto" />
            </span>
            <span className="hero-valencia block tracking-widest" style={{fontFamily: "'Manrope', system-ui, sans-serif", color: '#773c3c'}}>en Valencia/Sagunto</span>
            <span className="hero-reserva block tracking-wide font-normal" style={{fontFamily: "'Manrope', system-ui, sans-serif", color: '#773c3c'}}>Reserva por teléfono</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="btn-primary text-lg px-12 py-5">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +34 602 042 056
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            En AbrazoGigante ofrecemos alquiler de disfraces hinchables en Valencia y Sagunto para todo tipo de eventos. 
            Nuestros personajes gigantes son perfectos para cumpleaños, bodas, despedidas de soltero/a, eventos corporativos 
            y cualquier celebración que quieras hacer inolvidable.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mt-4">Disfraces disponibles</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {loading
              ? Array.from({ length: skeletonCount }).map((_, i) => <CostumeCardSkeleton key={i} />)
              : featured.map((costume) => <CostumeCard key={costume.id} costume={costume} />)
            }
          </div>
          
          <div className="text-center mt-12">
            <Link href="/catalogo" className="btn-primary-arrow inline-flex items-center gap-2 text-lg px-12 py-5">
              Ver catálogo
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-6 lg:px-8 relative" style={{backgroundColor: '#f1a10d', overflow: 'hidden'}}>
        <div>
          <div className="text-center mb-8">
            <h2 className="section-title mt-4" style={{color: 'white'}}>Así funciona</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: 'Elige', desc: 'Navega por nuestro catálogo y encuentra el disfraz ideal.' },
              { title: 'Llama', desc: 'Contacta por teléfono. Tu disfraz queda reservado en minutos.' },
              { title: 'Recoge', desc: 'Tu disfraz te espera. Ven a por él y disfrútalo.' },
            ].map((item, index) => (
              <div key={item.title} className={`text-center ${index === 2 ? 'sm:col-span-2 md:col-auto' : ''}`}>
                <h3 className="text-lg font-bold mt-2 mb-3" style={{color: '#3d0f11'}}>{item.title}</h3>
                 <p className="text-sm md:text-base font-medium" style={{color: '#3d0f11'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div className="relative h-24 -mt-8 z-10" style={{backgroundColor: '#1c665f'}}>
        <svg className="w-full h-24 block" viewBox="0 0 1440 96" preserveAspectRatio="none">
          <path fill="#f1a10d" d="M0,0 L1440,0 L1440,48 C1080,96 360,0 0,48 Z"/>
        </svg>
      </div>
      
      <section className="py-20 px-6 lg:px-8" style={{backgroundColor: '#1c665f'}}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: 'Para cada ocasión', label: 'Disfraces para cualquier evento' },
              { number: 'Trato individual', label: 'con cada cliente' },
              { number: 'Desde 15€', label: 'Alquiler flexible' },
              { number: 'Valencia Sagunto', label: 'Punto de recogida' },
             ].map((stat) => (
              <div key={stat.label}>
                <h3 className="text-lg font-bold mt-2 mb-3 text-white">{stat.number}</h3>
                 <p className="text-sm md:text-base font-medium text-white/80">{stat.label}</p>
              </div>
           ))}
        </div>
      </section>
      
      <section className="py-12 px-6 lg:px-8" style={{backgroundColor: '#f5f5f0'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mt-4">Categorías</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/disfraces-divertidos-valencia"
              className="bg-white rounded-[0.3rem] p-6 border border-gray-200 hover:border-[#d0632a] hover:shadow-card-hover transition-all cursor-pointer group block text-center"
            >
              <h3 className="text-lg font-bold mb-2" style={{color: '#d0632a'}}>Divertidos</h3>
              <p className="text-sm md:text-base text-gray-600 font-medium">
                Perfectos para fiestas, reels, cumpleaños y sorpresas
              </p>
            </Link>
            <Link
              href="/disfraces-infantiles-valencia"
              className="bg-white rounded-[0.3rem] p-6 border border-gray-200 hover:border-[#d0632a] hover:shadow-card-hover transition-all cursor-pointer group block text-center"
            >
              <h3 className="text-lg font-bold mb-2" style={{color: '#d0632a'}}>Infantiles</h3>
              <p className="text-sm md:text-base text-gray-600 font-medium">
                Los favoritos de niños y celebraciones familiares
              </p>
            </Link>
            <Link
              href="/disfraces-especiales-valencia"
              className="bg-white rounded-[0.3rem] p-6 border border-gray-200 hover:border-[#d0632a] hover:shadow-card-hover transition-all cursor-pointer group block text-center"
            >
              <h3 className="text-lg font-bold mb-2" style={{color: '#d0632a'}}>Especiales</h3>
              <p className="text-sm md:text-base text-gray-600 font-medium">
                Ideales para momentos emotivos y celebraciones únicas
              </p>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6 lg:px-8" style={{backgroundColor: '#254671'}}>
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12" style={{color: 'white'}}>Lo que dicen nuestros clientes</h2>
          <ReviewsSlider />
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <PhoneBlock />
        </div>
      </section>
    </div>
  )
}
