'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const isHoveringRef = useRef(false)
  const lastHoverState = useRef(false)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let dotX = 0
    let dotY = 0

    const animate = () => {
      const dx = mouseX - dotX
      const dy = mouseY - dotY

      dotX += dx * 0.06
      dotY += dy * 0.06

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`

        if (isHoveringRef.current !== lastHoverState.current) {
          lastHoverState.current = isHoveringRef.current
          if (isHoveringRef.current) {
            dotRef.current.style.width = '24px'
            dotRef.current.style.height = '24px'
            dotRef.current.style.opacity = '0.5'
          } else {
            dotRef.current.style.width = '12px'
            dotRef.current.style.height = '12px'
            dotRef.current.style.opacity = '1'
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) {
        isHoveringRef.current = true
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) {
        isHoveringRef.current = false
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className="fixed pointer-events-none z-[9998] hidden lg:block"
      style={{
        left: 0,
        top: 0,
        width: '12px',
        height: '12px',
        backgroundColor: '#d0632a',
        borderRadius: '50%',
        marginLeft: '-6px',
        marginTop: '-6px',
        transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
      }}
    />
  )
}
