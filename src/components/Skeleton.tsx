import { CSSProperties } from 'react'

export default function Skeleton({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <div 
      className={`bg-gray-100 rounded ${className}`}
      style={{ backgroundColor: '#e5e5e5', ...style }}
    />
  )
}

export function CostumeCardSkeleton() {
  return (
    <div className="costume-card-item">
      <div className="aspect-[3/4] overflow-hidden mb-4">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="px-1">
        <Skeleton className="h-3 w-16 mb-3" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-6 w-16" />
        <div className="hidden lg:block mt-4">
          <Skeleton className="h-10 w-full rounded" />
        </div>
      </div>
    </div>
  )
}

export function TextSkeleton({ lines = 1 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          className="h-4" 
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        />
      ))}
    </div>
  )
}