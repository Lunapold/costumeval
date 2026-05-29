'use client'

import Link from 'next/link'

const VIDEO = '/videos/video.mp4'

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Disfraces hinchables AbrazoGigante en Valencia',
  description: 'Alquiler de disfraces hinchables en Valencia y Sagunto.',
  thumbnailUrl: 'https://abrazogigante.es/videos/og.jpg',
  contentUrl: 'https://abrazogigante.es/videos/video.mp4',
  uploadDate: '2026-01-01',
}

function Balloon({ color, size = 120, rotate = 0, style }: { color: string; size?: number; rotate?: number; style?: React.CSSProperties }) {
  const vw = size / 10.24
  return (
    <div
      className="absolute z-20 pointer-events-none"
      style={{ width: `min(${size}px, ${vw}vw)`, height: `min(${size * 1.3}px, ${vw * 1.3}vw)`, transform: `rotate(${rotate}deg)`, ...style }}
    >
      <svg viewBox="0 0 60 78" className="w-full h-full">
        <ellipse cx="30" cy="30" rx="28" ry="30" fill={color} />
        <polygon points="30,58 24,68 36,68" fill={color} />
        <line x1="30" y1="68" x2="30" y2="78" stroke="#999" strokeWidth="1" />
        <ellipse cx="24" cy="22" rx="4" ry="6" fill="white" opacity="0.3" />
      </svg>
    </div>
  )
}

export default function VideoSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <link rel="preload" as="video" href={VIDEO} />
      <div className="relative w-full overflow-hidden">
        <Link href="/catalogo" target="_blank" rel="noopener noreferrer" className="w-full block lg:hidden">
          <video
            src={VIDEO}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            className="w-full h-auto block scale-[1.01]"
          />
        </Link>
        <Link href="/catalogo" target="_blank" rel="noopener noreferrer" className="w-full hidden lg:block">
          <video
            src={VIDEO}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            className="w-full h-auto block scale-[1.01]"
          />
        </Link>
        <div className="absolute inset-0 z-20 pointer-events-none">
          <Balloon color="#a8e6cf" size={120} rotate={-12} style={{ top: '13%', left: '7%' }} />
          <Balloon color="#f3b9d2" size={100} rotate={15} style={{ top: '24%', left: '2%' }} />
          <Balloon color="#ffe082" size={130} rotate={-20} style={{ top: '38%', left: '9%' }} />
          <Balloon color="#b3d9f2" size={105} rotate={8} style={{ top: '52%', left: '3%' }} />
          <Balloon color="#ef9a9a" size={140} rotate={-4} style={{ top: '68%', left: '11%' }} />
          <Balloon color="#ffab91" size={125} rotate={14} style={{ top: '15%', right: '8%' }} />
          <Balloon color="#a8e6cf" size={105} rotate={-18} style={{ top: '27%', right: '3%' }} />
          <Balloon color="#ce93d8" size={120} rotate={7} style={{ top: '41%', right: '10%' }} />
          <Balloon color="#ffe082" size={110} rotate={-9} style={{ top: '55%', right: '4%' }} />
          <Balloon color="#b3d9f2" size={130} rotate={16} style={{ top: '70%', right: '9%' }} />
        </div>
      </div>
    </>
  )
}
