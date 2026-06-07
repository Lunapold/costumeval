import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyPhone from '@/components/StickyPhone'
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
    images: [{ url: 'https://abrazogigante.es/videos/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler de Disfraces Hinchables en Valencia y Sagunto | AbrazoGigante',
    description: '¿Buscas disfraces en Valencia? Alquilamos disfraces hinchables gigantes para cumpleaños, bodas y eventos. ¡Precios desde 15€! Reserva ya.',
    images: ['https://abrazogigante.es/videos/og.jpg'],
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
                  image: 'https://abrazogigante.es/videos/og.jpg',
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
                      name: '¿Qué es Abrazo Gigante y cómo puedo sorprender a los invitados en mi fiesta o cumpleaños en Valencia?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'En Abrazo Gigante ofrecemos alquiler de disfraces hinchables en Valencia para cumpleaños, bodas, eventos, fiestas privadas, empresas y mucho más. Nuestros personajes gigantes crean momentos inolvidables y convierten cualquier celebración en una experiencia única.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '¿Cómo funciona el alquiler de disfraces hinchables en Valencia y Sagunto?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Es muy sencillo. Eliges el disfraz que más te guste en nuestra web, seleccionas los días que lo necesitas y realizas la reserva. Te entregamos el disfraz limpio, desinfectado y listo para usar, junto con el inflador portátil incluido.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '¿Qué zonas cubrís y cómo se realiza la entrega?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Damos servicio de alquiler de disfraces en Valencia capital, Sagunto, Puerto de Sagunto y localidades cercanas. Al realizar tu reserva puedes coordinar la recogida local o consultar las opciones de entrega a domicilio.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '¿Es necesario pagar una fianza para alquilar un disfraz original?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Sí, solicitamos una pequeña fianza reembolsable al recoger el producto. Una vez que nos devuelvas el disfraz en buen estado, te devolvemos el 100% de la fianza de forma inmediata.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '¿Quién se encarga de la limpieza de los disfraces?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: '¡Nosotros nos encargamos de todo! No tienes que lavar el disfraz antes de devolverlo. Cada traje pasa por un estricto proceso de limpieza y desinfección higiénica antes de entregarse al siguiente cliente.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: '¿Qué pasa si el disfraz hinchable se daña durante el evento?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Los daños menores por uso normal no tienen penalización. Si ocurre un accidente, avísanos al devolverlo. Los desperfectos graves causados por negligencia se descontarán de la fianza.',
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
      </body>
    </html>
  )
}