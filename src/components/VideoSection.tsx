'use client'

import Link from 'next/link'

const VIDEO = '/videos/video.mp4'
const PHOTO = '/videos/1.jpg'

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Disfraces hinchables AbrazoGigante en Valencia',
  description: 'Alquiler de disfraces hinchables en Valencia y Sagunto.',
  thumbnailUrl: 'https://disfracesvalencia.com/videos/1.jpg',
  contentUrl: 'https://disfracesvalencia.com/videos/video.mp4',
  uploadDate: '2026-01-01',
}

export default function VideoSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <link rel="preload" as="image" href={PHOTO} />
      <link rel="preload" as="video" href={VIDEO} />
      <Link href="/catalogo" target="_blank" rel="noopener noreferrer" className="w-full block lg:hidden">
        <video
          src={VIDEO}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          className="w-full h-auto block"
        />
      </Link>
      <Link href="/catalogo" target="_blank" rel="noopener noreferrer" className="w-full hidden lg:block">
        <img
          src={PHOTO}
          alt="Disfraces hinchables AbrazoGigante en Valencia"
          fetchPriority="high"
          className="w-full h-auto block"
        />
      </Link>
    </>
  )
}
