'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import costumes from '@/../data/costumes.json'

const BREADCRUMB_MAP: Record<string, string> = {
  '/catalogo': 'Catálogo',
  '/catalogo/todos': 'Todos los disfraces',
  '/info': 'Info',
  '/fotos': 'Fotos',
  '/contacto': 'Contacto',
  '/disfraces-especiales-valencia': 'Especiales',
  '/disfraces-infantiles-valencia': 'Infantiles',
  '/disfraces-divertidos-valencia': 'Divertidos',
}

const CATEGORY_MAP: Record<string, { label: string; href: string }> = {
  'especiales': { label: 'Especiales', href: '/disfraces-especiales-valencia' },
  'infantiles': { label: 'Infantiles', href: '/disfraces-infantiles-valencia' },
  'divertidos': { label: 'Divertidos', href: '/disfraces-divertidos-valencia' },
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  if (pathname === '/') return null
    
  const segments = pathname.split('/').filter(Boolean)
  const items: { href: string; label: string; isLast: boolean }[] = []
    
  if (segments[0] === 'disfraz') {
    const slug = segments[1]
    const costume = costumes.find((c: any) => c.slug === slug)
        
    items.push({ href: '/catalogo', label: 'Catálogo', isLast: false })
        
    if (costume) {
      const cat = Array.isArray(costume.category) ? costume.category[0] : costume.category
      const categoryInfo = CATEGORY_MAP[cat]
      if (categoryInfo) {
        items.push({ href: categoryInfo.href, label: categoryInfo.label, isLast: false })
      }
      items.push({ href: pathname, label: costume.name, isLast: true })
    }
  } else {
    const catalogoPages = ['disfraces-especiales-valencia', 'disfraces-infantiles-valencia', 'disfraces-divertidos-valencia']
    const isCatalogoPage = catalogoPages.includes(segments[0]) || pathname.startsWith('/catalogo')
        
    if (isCatalogoPage && !pathname.startsWith('/catalogo')) {
      items.push({ href: '/catalogo', label: 'Catálogo', isLast: false })
    }
        
    segments.forEach((segment: string, index: number) => {
      const href = '/' + segments.slice(0, index + 1).join('/')
      const label = BREADCRUMB_MAP[href] || segment.replace(/-/g, ' ')
      items.push({ href, label, isLast: false })
    })
        
    if (items.length > 0) {
      items[items.length - 1].isLast = true
    }
  }

  const schemaItems = [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://disfracesvalencia.com' },
    ...items.map((item, index) => ({
      '@type': 'ListItem' as const,
      position: index + 2,
      name: item.label,
      item: item.isLast ? undefined : `https://disfracesvalencia.com${item.href}`,
    })),
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems,
  }
    
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-black transition-colors flex items-center">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.href} className="flex items-center gap-2">
              <span className="text-gray-300">/</span>
              {item.isLast ? (
                <span className="text-[#1A1A1A] font-medium">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-black transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
