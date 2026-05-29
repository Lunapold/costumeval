import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PhoneBlock from '@/components/PhoneBlock'
import CostumeCard from '@/components/CostumeCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import CostumeImageCarousel from '@/components/CostumeImageCarousel'
import costumes from '../../../../data/costumes.json'

const PHONE = '+34602042056'

function getPrimaryCategory(category: string | string[]): string {
  return Array.isArray(category) ? category[0] : category
}

function getCategoryLabel(category: string | string[]): string {
  const cat = getPrimaryCategory(category)
  const map: Record<string, string> = {
    'divertidos': 'Divertidos',
    'infantiles': 'Infantiles',
    'especiales': 'Especiales',
  }
  return map[cat] || cat
}

function getCategoryHref(category: string | string[]): string {
  const cat = getPrimaryCategory(category)
  const map: Record<string, string> = {
    'divertidos': '/disfraces-divertidos-valencia',
    'infantiles': '/disfraces-infantiles-valencia',
    'especiales': '/disfraces-especiales-valencia',
  }
  return map[cat] || '/catalogo'
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return costumes.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const costume = costumes.find((c) => c.slug === slug)
  if (!costume) return {}
  return {
    title: `${costume.name} | AbrazoGigante ${costume.price}€`,
    description: `Alquila ${costume.name} en Valencia por ${costume.price}€. ${costume.description}`,
  }
}

export default async function CostumePage({ params }: Props) {
  const { slug } = await params
  const costume = costumes.find((c) => c.slug === slug)
  if (!costume) notFound()

  const base = costume.image.substring(0, costume.image.lastIndexOf('/'))
  const images = [`${base}/1.webp`, `${base}/2.webp`, `${base}/3.webp`, '/images/uso.webp']

  const related = costumes
    .filter((c) => {
      if (c.id === costume.id) return false
      const cat = costume.category
      const otherCat = c.category
      if (typeof cat === 'string' && typeof otherCat === 'string') return cat === otherCat
      if (typeof cat === 'string') return otherCat.includes(cat)
      if (typeof otherCat === 'string') return cat.includes(otherCat)
      return cat.some((k) => otherCat.includes(k))
    })
    .slice(0, 4)
  const fallbackRelated = costumes.filter((c) => c.id !== costume.id).slice(0, 4)
  const showRelated = related.length >= 2 ? related : fallbackRelated

  const schemaProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: costume.name,
    description: costume.description,
    image: `https://abrazogigante.es${costume.image}`,
    offers: {
      '@type': 'Offer',
      price: costume.price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'LocalBusiness',
        name: 'AbrazoGigante',
        telephone: PHONE,
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }}
      />

      <div className="min-h-screen pt-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Breadcrumbs />
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
            <CostumeImageCarousel images={images} name={costume.name} />

              <div className="flex flex-col">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4" style={{color: '#1A1A1A'}}>
                {costume.name}
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8 font-semibold">
                {costume.description}
              </p>

              <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-card costume-card-item">
                <p className="text-sm text-gray-500 mb-3 font-semibold">Precio de alquiler</p>
                <div className="flex gap-6 items-center">
                  <div className="text-center">
                    <p className="text-xs text-gray-400 font-medium">½ Día</p>
                    <p className="text-3xl font-bold" style={{color: '#d0632a'}}>15€</p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-xs text-gray-400 font-medium">Día completo</p>
                    <p className="text-3xl font-bold" style={{color: '#d0632a'}}>20€</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-bold mb-3" style={{color: '#1A1A1A'}}>Incluye:</p>
                <div className="flex flex-wrap gap-2">
                  {['Disfraz', 'Motor', 'Portapilas'].map((item) => (
                    <span key={item} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full font-semibold">
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              {costume.available_sizes && (
                <div className="mb-8">
                  <p className="text-sm font-bold mb-3" style={{color: '#1A1A1A'}}>Tallas:</p>
                  <div className="flex gap-2">
                    {costume.available_sizes.map((size: string) => (
                      <span key={size} className="px-4 py-2 flex items-center justify-center bg-white border-2 border-gray-200 rounded-lg text-sm font-bold" style={{color: '#1A1A1A'}}>
                        {size}
                      </span>
                    ))}
                  </div>
                  {costume.size_description && (
                    <p className="text-xs text-gray-400 mt-2">
                      {costume.size_description.split('. ').map((part: string, i: number, arr: string[]) =>
                        i < arr.length - 1 ? <span key={i}>{part}.<br /></span> : <span key={i}>{part}</span>
                      )}
                    </p>
                  )}
                </div>
              )}

              <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs font-semibold" style={{color: '#773c3c'}}>⚠️ Los niños deben ponerse el disfraz hinchable bajo la supervisión de un adulto.</p>
              </div>

              <style>{`
                details summary::-webkit-details-marker { display: none; }
                details summary { list-style: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; }
                details .arrow { transition: transform 0.2s; }
                details[open] .arrow { transform: rotate(180deg); }
              `}</style>
              <details className="mb-4 group">
                <summary>
                  <span className="text-sm font-bold underline decoration-dotted underline-offset-4 hover:no-underline transition-all" style={{color: '#d0632a'}}>Instrucciones de uso</span>
                  <span className="text-sm font-bold" style={{color: '#1A1A1A'}}>(obligatorio leer)</span>
                  <span className="arrow text-xs" style={{color: '#9ca3af'}}>▼</span>
                </summary>
                <p className="mt-3 text-xs font-semibold" style={{color: '#773c3c'}}>El disfraz se entrega sin pilas. Deben adquirirse por separado (4 pilas AA).</p>
                <ol className="mt-2 space-y-1 text-xs text-gray-500 list-decimal list-inside">
                  <li>Abra la bolsa.</li>
                  <li>Abra el portapilas e inserte 4 pilas.</li>
                  <li>Retire el soplador y desenrosque la tapa superior.</li>
                  <li>Localice el soplador y colóquelo en la abertura.</li>
                  <li>Inserte el soplador en el orificio redondo.</li>
                  <li>Use un anillo para sujetar el soplador.</li>
                  <li>Coloque el portapilas en el bolsillo integrado.</li>
                  <li>Colóquelo con cuidado para evitar accidentes.</li>
                  <li>Inserte las pilas cuando haya terminado.</li>
                </ol>
              </details>
            </div>
          </div>

          {showRelated.length > 0 && (
            <div>
              <h2 className="section-title mb-8">Disfraces similares</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {showRelated.map((c) => (
                  <CostumeCard key={c.id} costume={c} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 pb-32">
            <PhoneBlock />
          </div>
        </div>
      </div>
    </>
  )
}
