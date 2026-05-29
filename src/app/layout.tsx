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
    default: 'AbrazoGigante | Alquiler de Disfraces Hinchables en Valencia',
  },
  description: 'Alquiler de disfraces hinchables en Valencia y Sagunto. Amplio catálogo para cumpleaños, bodas, eventos corporativos y despedidas. Disfraces para día nacimiento y fiestas infantiles.',
  keywords: 'alquiler disfraces Valencia, disfraces hinchables Valencia, alquiler disfraces Sagunto, disfraces inflables Valencia, alquiler disfraz hinchable, disfraces cumpleaños Valencia, disfraces corporativos Valencia, disfraces despedidas Valencia, alquiler disfraces día nacimiento',
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
      sizes: "any",
    },
  },
  openGraph: {
    title: 'AbrazoGigante | Alquiler de Disfraces Hinchables en Valencia',
    description: 'Alquiler de disfraces hinchables en Valencia y Sagunto. Disfraces para cumpleaños, día nacimiento, bodas, eventos corporativos y despedidas.',
    url: 'https://abrazogigante.es',
    siteName: 'AbrazoGigante',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://abrazogigante.es/images/Logo.png', width: 800, height: 600 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AbrazoGigante | Alquiler de Disfraces Hinchables en Valencia',
    description: 'Alquiler de disfraces hinchables en Valencia y Sagunto. Disfraces para cumpleaños, día nacimiento, bodas, eventos corporativos y despedidas.',
    images: ['https://abrazogigante.es/images/Logo.png'],
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
              '@type': 'LocalBusiness',
              name: 'AbrazoGigante',
              description: 'Alquiler de disfraces en Valencia.',
              url: 'https://abrazogigante.es',
              telephone: '+34602042056',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Calle Gran Vía, 10',
                addressLocality: 'Valencia',
                postalCode: '46001',
                addressCountry: 'ES',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 39.4699,
                longitude: -0.3763,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '10:00',
                  closes: '20:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday'],
                  opens: '10:00',
                  closes: '14:00',
                },
              ],
              priceRange: '€€',
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