'use client'

import Link from 'next/link'
import PhoneBlock from '@/components/PhoneBlock'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function CatalogoPage() {
  const categories = [
    { 
      name: 'Todos los disfraces', 
      href: '/catalogo/todos',
      icon: (
        <svg className="w-10 h-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/>
          <rect x="14" y="14" width="7" height="7" rx="1"/>
        </svg>
      )
    },
    { 
      name: 'Divertidos', 
      href: '/disfraces-divertidos-valencia',
      icon: (
        <svg className="w-10 h-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      )
    },
    { 
      name: 'Infantiles', 
      href: '/disfraces-infantiles-valencia',
      icon: (
        <svg className="w-10 h-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      )
    },
    { 
      name: 'Especiales', 
      href: '/disfraces-especiales-valencia',
      icon: (
        <svg className="w-10 h-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      )
    },
  ]

  return (
    <div className="min-h-screen pt-10 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Breadcrumbs />
        <h1 className="section-title mb-8">Catálogo</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              href={cat.href}
              className="bg-white rounded-[0.3rem] p-6 border border-gray-200 hover:border-[#d0632a] hover:shadow-card-hover transition-all cursor-pointer group block text-center"
            >
              <div style={{color: '#d0632a'}} className="flex justify-center">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#d0632a'}}>
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>

        <PhoneBlock title="¿No encuentras lo que buscas?" subtitle="Llámanos y te ayudamos" />
      </div>
    </div>
  )
}
