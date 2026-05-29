import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Información',
  description: 'Alquiler de disfraces hinchables en Valencia. Tallas, precios y condiciones. Altura 220-230 cm hinchado. Reserva por teléfono.',
  alternates: { canonical: 'https://abrazogigante.es/info' },
}

const PHONE = '+34602042056'

export default function InfoPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cómo funcionan los disfraces hinchables?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Los disfraces se inflan con un ventilador incluido. Proporcionamos power bank o pilas para que puedas utilizarlos cómodamente durante el evento.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué tamaño tienen los disfraces hinchables?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En estado inflado, el disfraz alcanza aproximadamente 220-230 cm de altura. Están diseñados para personas de 120-150 cm de altura.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Para qué eventos puedo alquilar un disfraz hinchable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Son perfectos para cumpleaños, bodas, pedidas de mano, eventos corporativos, despedidas de soltero/a, sesiones de fotos, reels y flashmobs.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Se necesita fianza para alquilar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, para alquileres particulares se solicita una fianza de 40€ que se devuelve al entregar el disfraz en buen estado.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Dónde recoger el disfraz en Valencia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El punto de recogida está en Valencia y Sagunto. Consulta disponibilidad llamando al +34 602 042 056.',
        },
      },
    ],
  }

  return (
    <div suppressHydrationWarning>
      <main className="min-h-screen pt-10 pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          <Breadcrumbs />
          <h1 className="section-title mb-8" style={{color: '#d0632a'}}>ALQUILER DE DISFRACES HINCHABLES EN VALENCIA</h1>
          
          <div className="space-y-8 text-gray-700">
            <p>
              ¿Buscas una forma original, divertida y abrazable de sorprender en tu fiesta?
            </p>
            <p>
              En Abrazo Gigante ofrecemos alquiler de disfraces hinchables en Valencia para cumpleaños, bodas, eventos, fiestas privadas, empresas y mucho más.
            </p>
            <p>
              Nuestros personajes gigantes y abrazables crean momentos inolvidables, hacen reír a niños y adultos y convierten cualquier celebración en una experiencia única llena de sonrisas, abrazos y diversión 💖
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4" style={{color: '#1A1A1A'}}>DISFRACES PARA TODO TIPO DE EVENTOS</h2>
            <p>Nuestros disfraces son perfectos para:</p>
            <ul className="space-y-2 ml-4">
              <li>✨ Cumpleaños infantiles y de adultos</li>
              <li>✨ Pedidas de mano y sorpresas románticas</li>
              <li>✨ Bodas y celebraciones familiares</li>
              <li>✨ Comuniones y graduaciones</li>
              <li>✨ Fiestas escolares y eventos infantiles</li>
              <li>✨ Aperturas de tiendas y promociones</li>
              <li>✨ Eventos corporativos y fiestas de empresa</li>
              <li>✨ Sesiones de fotos, reels y flashmobs</li>
            </ul>
            <p>¡Tenemos el personaje perfecto para repartir abrazos, risas y momentos inolvidables!</p>

            <h2 className="text-2xl font-bold mt-10 mb-4" style={{color: '#1A1A1A'}}>¿CÓMO FUNCIONAN?</h2>
            <p>Los disfraces se inflan con un ventilador incluido 🎈</p>
            <p>También proporcionamos power bank o pilas para que puedas utilizarlos cómodamente durante el evento.</p>
            <p>Todos los disfraces son fáciles de usar, cómodos, muy llamativos y perfectos para abrazar, bailar y sorprender 🤗</p>
            <p>Consulta disponibilidad de disfraces.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4" style={{color: '#1A1A1A'}}>IMPORTANTE SOBRE EL TAMAÑO DE LOS DISFRACES</h2>
            <p>Los disfraces hinchables tienen un tamaño bastante grande cuando están inflados, por lo que recomendamos utilizarlos en espacios abiertos o en locales amplios.</p>
            <p>En estado inflado, el disfraz alcanza aproximadamente 220-230 cm de altura, proporcionando una presencia imponente y muy divertida.</p>
            <p>Son ideales para:</p>
            <ul className="space-y-2 ml-4">
              <li>✅ Parques y terrazas</li>
              <li>✅ Jardines y zonas al aire libre</li>
              <li>✅ Salones grandes</li>
              <li>✅ Eventos y celebraciones espaciosas</li>
            </ul>
            <p>En espacios pequeños o con techos bajos, algunos modelos pueden resultar incómodos para moverse.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4" style={{color: '#1A1A1A'}}>FIANZA Y CUIDADO</h2>
            <p>Nuestros disfraces abrazables necesitan cariño y cuidado 💛</p>
            <p>Por favor, evita tirones, objetos punzantes o bebidas derramadas.</p>
            <p>Para alquileres particulares se solicita una fianza de 40€, que se devuelve al entregar el disfraz en buen estado, sin daños ni suciedad.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4" style={{color: '#1A1A1A'}}>RESERVA TU DISFRAZ HOY</h2>
            <p>Si quieres sorprender a tus invitados y hacer que todos hablen de tu fiesta, nuestros disfraces hinchables son la opción perfecta.</p>
            <p>🎉 ¡Reserva ahora y convierte tu celebración en algo todavía más mágico, divertido y abrazable! 🎉</p>

            <p className="text-center mt-6">
              <Link href="/catalogo" className="font-semibold underline underline-offset-4 hover:text-[#d0632a] transition-colors" style={{color: '#d0632a'}}>Explora nuestro catálogo de disfraces →</Link>
            </p>

            <div className="pt-8 text-center">
              <a href={`tel:${PHONE}`} className="btn-primary text-lg px-12 py-5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +34 602 042 056
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
