import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyPhone from '@/components/StickyPhone'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import CustomCursor from '@/components/CustomCursor'
import ScrollToTop from '@/components/ScrollToTop'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | AbrazoGigante',
    default: 'Alquiler de Disfraces Hinchables en Valencia y Sagunto | AbrazoGigante',
  },
  description: '¿Buscas disfraces en Valencia? Alquilamos disfraces hinchables gigantes para cumpleaños, bodas y eventos en Valencia y Sagunto. ¡Precios desde 15€! Reserva ya.',
  keywords: 'alquiler disfraces Valencia, disfraces hinchables Valencia, alquiler disfraces Sagunto, disfraces inflables Valencia, alquiler disfraz hinchable, disfraces cumpleaños Valencia, disfraces corporativos Valencia, disfraces despedidas Valencia, alquiler disfraces día nacimiento',
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
      sizes: "any",
    },
  },
  openGraph: {
    title: 'Alquiler de Disfraces Hinchables en Valencia y Sagunto | AbrazoGigante',
    description: '¿Buscas disfraces en Valencia? Alquilamos disfraces hinchables gigantes para cumpleaños, bodas y eventos. ¡Precios desde 15€! Reserva ya.',
    url: 'https://abrazogigante.es',
    siteName: 'AbrazoGigante',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://abrazogigante.es/images/red.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler de Disfraces Hinchables en Valencia y Sagunto | AbrazoGigante',
    description: '¿Buscas disfraces en Valencia? Alquilamos disfraces hinchables gigantes para cumpleaños, bodas y eventos. ¡Precios desde 15€! Reserva ya.',
    images: ['https://abrazogigante.es/images/red.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://abrazogigante.es',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${manrope.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://abrazogigante.es/#organization',
                  name: 'AbrazoGigante',
                  url: 'https://abrazogigante.es',
                  image: 'https://abrazogigante.es/images/red.png',
                  priceRange: '€€',
                  telephone: '+34602042056',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Valencia',
                    addressRegion: 'Comunidad Valenciana',
                    addressCountry: 'ES',
                  },
                  areaServed: [
                    { '@type': 'AdministrativeArea', name: 'Valencia' },
                    { '@type': 'AdministrativeArea', name: 'Sagunto' },
                    { '@type': 'AdministrativeArea', name: 'Puerto de Sagunto' },
                  ],
                  description: 'Alquiler de disfraces hinchables y originales para eventos, cumpleaños y fiestas en Valencia y Sagunto.',
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://abrazogigante.es/#faq',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: '¿Qué es Abrazo Gigante y cómo puedo sorprender a mis invitados en Valencia?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Somos tu aliado secreto para crear momentos inolvidables. Ofrecemos el mejor alquiler de disfraces hinchables en Valencia y Sagunto. Nuestros personajes gigantes, divertidos y super-abrazables, hacen reír a niños y adultos.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '¿Cómo funciona el alquiler y cómo se inflan los disfraces?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Reservas tu personaje favorito en nuestra web, te entregamos el disfraz listo para usar con ventilador y batería incluidos. Se infla en un momento y al finalizar nos devuelves el equipo en el punto acordado.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '¿Qué zonas cubrís y cómo se realiza la entrega?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Damos servicio de alquiler en Valencia capital, Sagunto, Puerto de Sagunto y localidades cercanas. Al hacer tu reserva puedes coordinar la recogida local o consultar las opciones de entrega a domicilio.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '¿Qué tamaño tienen y qué espacio se necesita?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Una vez inflados, los disfraces alcanzan aproximadamente 220–230 cm de altura. Recomendamos usarlos en jardines, terrazas, parques, salones grandes o locales con techos altos.',
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
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <ScrollToTop />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyPhone />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}