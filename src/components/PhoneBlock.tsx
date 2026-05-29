interface PhoneBlockProps {
  title?: string
  subtitle?: string
}

const PHONE = '+34602042056'

export default function PhoneBlock({
  title = '¿Buscas un disfraz?',
  subtitle = 'Llámanos y te ayudamos',
}: PhoneBlockProps) {
  return (
    <div className="w-full py-12 text-center" style={{backgroundColor: '#cf632a'}}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="mb-2 text-white" style={{fontSize: '2.25rem', fontWeight: 800, fontFamily: "'Manrope', system-ui, sans-serif", textTransform: 'uppercase'}}>{title}</h2>
        <p className="text-sm md:text-base mb-6 font-semibold text-white/90">{subtitle}</p>
        <a
          href={`tel:${PHONE}`}
          className="btn-primary-white text-base md:text-lg px-4 md:px-12 py-3 md:py-5 inline-flex flex-nowrap items-center w-full md:w-auto"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          +34 602 042 056
        </a>
      </div>
    </div>
  )
}
