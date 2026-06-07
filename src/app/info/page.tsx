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
        name: '¿Qué es Abrazo Gigante y cómo puedo sorprender a los invitados en mi fiesta o cumpleaños en Valencia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En Abrazo Gigante ofrecemos alquiler de disfraces hinchables en Valencia para cumpleaños, bodas, eventos, fiestas privadas, empresas y mucho más. Nuestros personajes gigantes y abrazables crean momentos inolvidables, hacen reír a niños y adultos y convierten cualquier celebración en una experiencia única llena de sonrisas, abrazos y diversión.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo funciona el alquiler de disfraces hinchables en Valencia y Sagunto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es muy sencillo. Eliges el disfraz que más te guste en nuestra web, seleccionas los días que lo necesitas y realizas la reserva. Te entregamos el disfraz limpio, desinfectado y listo para usar, junto con el inflador portátil incluido. Una vez terminado el periodo de alquiler, nos devuelves el disfraz en el punto acordado.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué zonas cubrís y cómo se realiza la entrega?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Damos servicio de alquiler de disfraces en Valencia capital, Sagunto, Puerto de Sagunto y localidades cercanas de la provincia. Al realizar tu reserva, puedes coordinar con nosotros la recogida local o consultar las opciones de entrega a domicilio para que no tengas que preocuparte por nada el día de tu fiesta.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Es necesario pagar una fianza para alquilar un disfraz original?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, para garantizar el buen cuidado de nuestros disfraces hinchables gigantes, solicitamos una pequeña fianza reembolsable al recoger el producto. Una vez que nos devuelvas el disfraz y comprobemos que el ventilador y el tejido están en perfecto estado, te devolvemos el 100% de la fianza de forma inmediata.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Quién se encarga de la limpieza de los disfraces?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '¡Nosotros nos encargamos de todo! Sabemos que en las celebraciones, cumpleaños y bodas en Valencia se viene a disfrutar. No tienes que lavar el disfraz antes de devolverlo; cada uno de nuestros trajes pasa por un estricto proceso de limpieza y desinfección higiénica antes de entregarse al siguiente cliente.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué pasa si el disfraz hinchable se daña durante el evento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nuestros disfraces están hechos de materiales resistentes, pensados para aguantar el ritmo de cualquier fiesta. Sin embargo, si ocurre algún accidente (un desgarro o un fallo en el motor), por favor avísanos lo antes posible al devolverlo. Los daños menores cubiertos por el uso normal no tendrán penalización, pero los desperfectos graves causados por negligencia se descontarán de la fianza.',
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
            <h3 className="text-xl font-semibold mb-4" style={{color: '#1A1A1A'}}>¿Qué es Abrazo Gigante y cómo puedo sorprender a los invitados en mi fiesta o cumpleaños en Valencia?</h3>
            <p>
              ¿Buscas una forma original, divertida y abrazable de sorprender en tu fiesta?
            </p>
            <p>
              En Abrazo Gigante ofrecemos alquiler de disfraces hinchables en Valencia para cumpleaños, bodas, eventos, fiestas privadas, empresas y mucho más.
            </p>
            <p>
              Nuestros personajes gigantes y abrazables crean momentos inolvidables, hacen reír a niños y adultos y convierten cualquier celebración en una experiencia única llena de sonrisas, abrazos y diversión 💖
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#1A1A1A'}}>¿Cómo funciona el alquiler de disfraces hinchables en Valencia y Sagunto?</h3>
                <p>Es muy sencillo. Eliges el disfraz que más te guste en nuestra web, seleccionas los días que lo necesitas y realizas la reserva. Te entregamos el disfraz limpio, desinfectado y listo para usar, junto con el inflador portátil incluido. Una vez terminado el periodo de alquiler, nos devuelves el disfraz en el punto acordado.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#1A1A1A'}}>¿Qué zonas cubrís y cómo se realiza la entrega?</h3>
                <p>Damos servicio de alquiler de disfraces en Valencia capital, Sagunto, Puerto de Sagunto y localidades cercanas de la provincia. Al realizar tu reserva, puedes coordinar con nosotros la recogida local o consultar las opciones de entrega a domicilio para que no tengas que preocuparte por nada el día de tu fiesta.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#1A1A1A'}}>¿Es necesario pagar una fianza para alquilar un disfraz original?</h3>
                <p>Sí, para garantizar el buen cuidado de nuestros disfraces hinchables gigantes, solicitamos una pequeña fianza reembolsable al recoger el producto. Una vez que nos devuelvas el disfraz y comprobemos que el ventilador y el tejido están en perfecto estado, te devolvemos el 100% de la fianza de forma inmediata.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#1A1A1A'}}>¿Quién se encarga de la limpieza de los disfraces?</h3>
                <p>¡Nosotros nos encargamos de todo! Sabemos que en las celebraciones, cumpleaños y bodas en Valencia se viene a disfrutar. No tienes que lavar el disfraz antes de devolverlo; cada uno de nuestros trajes pasa por un estricto proceso de limpieza y desinfección higiénica antes de entregarse al siguiente cliente.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#1A1A1A'}}>¿Qué pasa si el disfraz hinchable se daña durante el evento?</h3>
                <p>Nuestros disfraces están hechos de materiales resistentes, pensados para aguantar el ritmo de cualquier fiesta. Sin embargo, si ocurre algún accidente (un desgarro o un fallo en el motor), por favor avísanos lo antes posible al devolverlo. Los daños menores cubiertos por el uso normal no tendrán penalización, pero los desperfectos graves causados por negligencia se descontarán de la fianza.</p>
              </div>
            </div>

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

            <h2 className="text-2xl font-bold mt-10 mb-4" style={{color: '#1A1A1A'}}>RESERVA TU DISFRAZ HOY</h2>
            <p>Si quieres sorprender a tus invitados y hacer que todos hablen de tu fiesta, nuestros disfraces hinchables son la opción perfecta.</p>
            <p>🎉 ¡Reserva ahora y convierte tu celebración en algo todavía más mágico, divertido y abrazable! 🎉</p>


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
