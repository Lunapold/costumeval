'use client'

import CostumeCard from '@/components/CostumeCard'
import PhoneBlock from '@/components/PhoneBlock'
import Breadcrumbs from '@/components/Breadcrumbs'
import { CostumeCardSkeleton } from '@/components/Skeleton'
import costumes from '../../../data/costumes.json'
import { useState, useEffect } from 'react'

export default function DisfracesEspecialesPage() {
  const [loading, setLoading] = useState(true)
  const [skeletonCount, setSkeletonCount] = useState(8)
  const especiales = costumes.filter((c) =>
    typeof c.category === 'string' ? c.category === 'especiales' : c.category.includes('especiales')
  )

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
    <div className="min-h-screen pt-10 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Breadcrumbs />
        <h1 className="section-title mb-8">Especiales</h1>
        <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto text-center mb-10">
          Disfraces hinchables especiales para alquilar en Valencia. Ideales para momentos emotivos como pedidas de mano, 
          revelación de género, bodas y celebraciones únicas.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {loading
            ? Array.from({ length: skeletonCount }).map((_, i) => <CostumeCardSkeleton key={i} />)
            : especiales.map((costume) => (
                <CostumeCard key={costume.id} costume={costume} />
              ))}
        </div>
        <PhoneBlock title="¿Buscas algo barato?" subtitle="Llámanos y te ayudamos" />
      </div>
    </div>
  )
}
