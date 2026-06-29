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
        name: '¿Qué es Abrazo Gigante y cómo puedo sorprender a mis invitados en Valencia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Somos tu aliado secreto para crear momentos inolvidables. Ofrecemos el mejor alquiler de disfraces hinchables en Valencia y Sagunto. Nuestros personajes gigantes, divertidos y super-abrazables, hacen reír a niños y adultos. Perfectos para cumpleaños, bodas, comuniones, pedidas de mano, eventos corporativos, sesiones de fotos, Reels y flashmobs.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo funciona el alquiler y cómo se inflan los disfraces?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reservas tu personaje favorito en nuestra web, te entregamos el disfraz listo para usar con ventilador y batería incluidos. El disfraz se infla en un momento, es cómodo de llevar y permite bailar, saltar y dar abrazos gigantes. Al finalizar el alquiler, nos devuelves el equipo en el punto acordado.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué zonas cubrís y cómo se realiza la entrega?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Damos servicio de alquiler en Valencia capital, Sagunto, Puerto de Sagunto y localidades cercanas de la provincia. Al hacer tu reserva puedes coordinar la recogida local o consultar las opciones de entrega a domicilio.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué tamaño tienen y qué espacio se necesita?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Una vez inflados, los disfraces alcanzan aproximadamente 220–230 cm de altura. Recomendamos usarlos en jardines, terrazas, parques, salones grandes o locales con techos altos para mayor comodidad.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Es necesario pagar una fianza y quién limpia el disfraz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nosotros nos encargamos de la limpieza y desinfección de cada traje. Solicitamos una pequeña fianza reembolsable al recoger el producto. Al devolverlo en buen estado, te devolvemos el 100% de la fianza de forma inmediata.',
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
          <h1 className="section-title mb-8" style={{color: '#d0632a', fontWeight: 400}}>
            ALQUILER DE <strong style={{fontWeight: 800}}>DISFRACES HINCHABLES</strong> EN VALENCIA
          </h1>
          
          <div className="space-y-8 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{color: '#1A1A1A'}}>❓ ¿Qué es Abrazo Gigante y cómo puedo sorprender a mis invitados en Valencia?</h3>
              <div className="pl-6 space-y-3">
                <p>¡Somos tu aliado secreto para crear momentos inolvidables! 🥳 Ofrecemos el mejor alquiler de disfraces hinchables en Valencia y Sagunto. Nuestros personajes gigantes, divertidos y super-abrazables, hacen reír a niños y adultos.</p>
                <p>Son la opción perfecta para dar un subidón de energía en:</p>
                <ul className="space-y-2 ml-4">
                  <li>✨ Cumpleaños (infantiles y de adultos)</li>
                  <li>✨ Bodas, comuniones y celebraciones familiares</li>
                  <li>✨ Pedidas de mano y sorpresas románticas</li>
                  <li>✨ Eventos corporativos, aperturas de tiendas y fiestas de empresa</li>
                  <li>✨ Sesiones de fotos, Reels de Instagram, TikToks y flashmobs 📸</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#1A1A1A'}}>❓ ¿Cómo funciona el alquiler y cómo se inflan los disfraces?</h3>
                <div className="pl-6 space-y-3">
                  <p>¡Es un proceso facilísimo y rápido! 🎈</p>
                  <p><strong>Reserva:</strong> Eliges tu personaje favorito en nuestra web e indicas las fechas que necesitas.</p>
                  <p><strong>Preparación:</strong> Te entregamos el disfraz listo para usar, junto con un ventilador integrado. Las pilas o batería externa no están incluidas en el precio, pero puedes adquirirlas fácilmente en cualquier supermercado o tienda.</p>
                  <p><strong>¡A disfrutar!</strong> El disfraz se infla en un momento, es muy cómodo de llevar, permite bailar, saltar y, por supuesto, ¡dar abrazos gigantes! 🤗</p>
                  <p><strong>Devolución:</strong> Una vez terminado el periodo de alquiler, nos devuelves el equipo en el punto acordado.</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#1A1A1A'}}>❓ ¿Qué zonas cubrís y cómo se realiza la entrega?</h3>
                <div className="pl-6 space-y-3">
                  <p>Damos servicio de alquiler en Valencia capital, Sagunto, Puerto de Sagunto y localidades cercanas de la provincia. Al hacer tu reserva, puedes coordinar con nosotros la recogida local o consultar las opciones de entrega a domicilio para que no tengas que preocuparte por la logística el día de tu fiesta. 🚗</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#1A1A1A'}}>❓ ¿Qué tamaño tienen y qué espacio se necesita?</h3>
                <div className="pl-6 space-y-3">
                  <p>¡Tienen una presencia imponente! Una vez inflados, los disfraces alcanzan aproximadamente 220–230 cm de altura 🦖. Por eso, para que te muevas con total comodidad, recomendamos usarlos en:</p>
                  <ul className="space-y-2 ml-4">
                    <li>✅ Jardines, terrazas y zonas al aire libre</li>
                    <li>✅ Parques</li>
                    <li>✅ Salones grandes o locales con techos altos</li>
                  </ul>
                  <p className="mt-2">Nota: En espacios muy pequeños o con techos bajos, algunos modelos pueden resultar incómodos para moverse con soltura.</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#1A1A1A'}}>❓ ¿Es necesario pagar una fianza y quién limpia el disfraz?</h3>
                <div className="pl-6 space-y-3">
                  <p><strong>Limpieza:</strong> ¡Nosotros nos encargamos de todo! 🧼 Cada traje pasa por un estricto proceso de lavado y desinfección higiénica antes de entregarse. No tienes que limpiar nada antes de devolverlo.</p>
                  <p><strong>Fianza:</strong> Sí, solicitamos una pequeña fianza reembolsable al recoger el producto para garantizar el cuidado del motor y el tejido. En cuanto nos devuelvas el disfraz y comprobemos que todo está bien, te devolvemos el 100% de la fianza de forma inmediata 💰. En caso de desperfectos graves por negligencia, se descontarán de la fianza.</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 mt-10" style={{color: '#1A1A1A'}}>🎉 ¡Reserva tu disfraz hoy!</h3>
            <p>No dejes tu fiesta para el último momento. Si quieres que todos hablen de tu evento durante meses, nuestros personajes gigantes son la clave. ¡Consulta la disponibilidad ahora y asegura tu Abrazo Gigante! 💖</p>


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
