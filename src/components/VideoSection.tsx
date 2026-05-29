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

function Balloon({ color, vw = 12, rotate = 0, style }: { color: string; vw?: number; rotate?: number; style?: React.CSSProperties }) {
  return (
    <div
      className="absolute z-20 pointer-events-none"
      style={{ width: `${vw}vw`, height: `${vw * 1.3}vw`, transform: `rotate(${rotate}deg)`, ...style }}
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
          <Balloon color="#a8e6cf" vw={11.7} rotate={-12} style={{ top: '13%', left: '7%' }} />
          <Balloon color="#f3b9d2" vw={9.8} rotate={15} style={{ top: '24%', left: '2%' }} />
          <Balloon color="#ffe082" vw={12.7} rotate={-20} style={{ top: '38%', left: '9%' }} />
          <Balloon color="#b3d9f2" vw={10.3} rotate={8} style={{ top: '52%', left: '3%' }} />
          <Balloon color="#ef9a9a" vw={13.7} rotate={-4} style={{ top: '68%', left: '11%' }} />
          <Balloon color="#ffab91" vw={12.2} rotate={14} style={{ top: '15%', right: '8%' }} />
          <Balloon color="#a8e6cf" vw={10.3} rotate={-18} style={{ top: '27%', right: '3%' }} />
          <Balloon color="#ce93d8" vw={11.7} rotate={7} style={{ top: '41%', right: '10%' }} />
          <Balloon color="#ffe082" vw={10.7} rotate={-9} style={{ top: '55%', right: '4%' }} />
          <Balloon color="#b3d9f2" vw={12.7} rotate={16} style={{ top: '70%', right: '9%' }} />
        </div>
      </div>
    </>
  )
}
