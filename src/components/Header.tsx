'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PHONE = '+34602042056'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-[#e9e8e5] border-b border-gray-200">
       <div className="flex items-center justify-center h-16 px-6 lg:px-8">
         {/* Left: Logo */}
          <div className="flex items-center absolute left-6 lg:left-8">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/images/Logo.webp"
                alt="AbrazoGigante"
                className="h-14 w-auto"
              />
              <img
                src="/images/Logo_mini.webp"
                alt="AbrazoGigante"
                className="h-10 w-auto"
              />
            </Link>
          </div>

         {/* Center: Navigation (hidden below 1024px) */}
         <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <Link href="/catalogo" className={`hover:text-[#797372] transition-colors ${pathname?.startsWith('/catalogo') || pathname?.startsWith('/disfraces-') || pathname?.startsWith('/disfraz/') ? 'text-[#d0632a]' : 'text-gray-700'}`}>
              Catálogo
            </Link>
           <Link href="/info" className={`hover:text-[#797372] transition-colors ${pathname === '/info' ? 'text-[#d0632a]' : 'text-gray-700'}`}>
              Info
            </Link>
           <Link href="/fotos" className={`hover:text-[#797372] transition-colors ${pathname === '/fotos' ? 'text-[#d0632a]' : 'text-gray-700'}`}>
             Fotos
           </Link>
           <Link href="/contacto" className={`hover:text-[#797372] transition-colors ${pathname === '/contacto' ? 'text-[#d0632a]' : 'text-gray-700'}`}>
             Contacto
           </Link>
         </nav>

         {/* Right: Contact Info (hidden below 1024px) */}
          <div className="hidden lg:flex items-center gap-4 font-bold text-sm absolute right-6 lg:right-8">
            <div className="flex items-center gap-2 text-[#1A1A1A]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Valencia/Sagunto</span>
            </div>
            
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 text-[#1A1A1A] hover:!text-[#d0632a] transition-colors phone-icon"
            >
              <svg className="w-4 h-4 phone-shake" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +34 602 042 056
            </a>
          </div>

         {/* Mobile menu button (shown below 1024px) */}
         <button 
           className="lg:hidden p-2 absolute right-6 lg:right-8" 
           onClick={() => setIsOpen(!isOpen)}
           aria-label="Menu"
         >
           <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             {isOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
             ) : (
               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
             )}
           </svg>
         </button>
       </div>

       {/* Mobile menu (shown below 1024px) */}
       {isOpen && (
         <>
           <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
           <div className="absolute top-16 left-0 right-0 bg-white border-t border-gray-200 z-50 lg:hidden">
             <nav className="flex flex-col p-4 gap-4">
             <Link href="/catalogo" className={`font-semibold py-2 ${pathname?.startsWith('/catalogo') ? 'text-[#d0632a]' : 'text-gray-700'}`} onClick={() => setIsOpen(false)}>
               Catálogo
             </Link>
             <Link href="/info" className={`font-semibold py-2 ${pathname === '/info' ? 'text-[#d0632a]' : 'text-gray-700'}`} onClick={() => setIsOpen(false)}>
               Info
             </Link>
             <Link href="/fotos" className={`font-semibold py-2 ${pathname === '/fotos' ? 'text-[#d0632a]' : 'text-gray-700'}`} onClick={() => setIsOpen(false)}>
               Fotos
             </Link>
             <Link href="/contacto" className={`font-semibold py-2 ${pathname === '/contacto' ? 'text-[#d0632a]' : 'text-gray-700'}`} onClick={() => setIsOpen(false)}>
               Contacto
             </Link>
            </nav>
          </div>
          </>
        )}
    </header>
  )
}
