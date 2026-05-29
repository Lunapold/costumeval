'use client'

import CostumeCard from '@/components/CostumeCard'
import PhoneBlock from '@/components/PhoneBlock'
import Breadcrumbs from '@/components/Breadcrumbs'
import { CostumeCardSkeleton } from '@/components/Skeleton'
import costumes from '../../../data/costumes.json'
import { useState, useEffect } from 'react'

export default function DisfracesInfantilesPage() {
  const [loading, setLoading] = useState(true)
  const [skeletonCount, setSkeletonCount] = useState(8)
  const infantiles = costumes.filter((c) =>
    typeof c.category === 'string' ? c.category === 'infantiles' : c.category.includes('infantiles')
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
        <h1 className="section-title mb-8">Infantiles</h1>
        <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto text-center mb-10">
          Disfraces hinchables infantiles para alquilar en Valencia. Los favoritos de niños y niñas para fiestas de cumpleaños, 
          celebraciones familiares y eventos infantiles.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {loading
            ? Array.from({ length: skeletonCount }).map((_, i) => <CostumeCardSkeleton key={i} />)
            : infantiles.map((costume) => (
                <CostumeCard key={costume.id} costume={costume} />
              ))}
        </div>
        <PhoneBlock title="¿Buscas algo especial?" subtitle="Llámanos y te ayudamos" />
      </div>
    </div>
  )
}
