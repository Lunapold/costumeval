'use client'

import CostumeCard from '@/components/CostumeCard'
import PhoneBlock from '@/components/PhoneBlock'
import Breadcrumbs from '@/components/Breadcrumbs'
import { CostumeCardSkeleton } from '@/components/Skeleton'
import costumes from '../../../../data/costumes.json'
import { useState, useEffect } from 'react'

export default function TodosDisfracesPage() {
  const [loading, setLoading] = useState(true)
  const [skeletonCount, setSkeletonCount] = useState(8)

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
        <h1 className="section-title mb-8">Todos los disfraces</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {loading
            ? Array.from({ length: skeletonCount }).map((_, i) => <CostumeCardSkeleton key={i} />)
            : costumes.map((costume) => (
                <CostumeCard key={costume.id} costume={costume} />
              ))}
        </div>
        <PhoneBlock title="¿No encuentras lo que buscas?" subtitle="Llámanos y te ayudamos" />
      </div>
    </div>
  )
}
