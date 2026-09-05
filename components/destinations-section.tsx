'use client'

import { useLanguage } from '@/components/language-provider'

const images = [
  '/images/makkah-haram.png',
  '/images/madinah-mosque.png',
  '/images/alula.png',
  '/images/riyadh.png',
  '/images/red-sea.png',
]

export function DestinationsSection() {
  const { t } = useLanguage()
  const items = t.destinations.items

  return (
    <section id="destinations" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-accent">
          <span className="h-px w-8 bg-accent" />
          {t.destinations.eyebrow}
        </p>
        <h2 className="text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
          {t.destinations.title}
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          {t.destinations.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
        {items.map((item, i) => (
          <article
            key={item.name}
            className={`group relative overflow-hidden rounded-xl ${
              i === 0
                ? 'md:col-span-3 md:row-span-2 min-h-64 md:min-h-0'
                : i === 1
                  ? 'md:col-span-3 min-h-64'
                  : 'md:col-span-2 min-h-64'
            }`}
          >
            <img
              src={images[i] || '/placeholder.svg'}
              alt={item.name}
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                {item.tag}
              </p>
              <h3 className="mt-1.5 font-serif text-2xl font-semibold text-background">
                {item.name}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-background/80 opacity-0 transition-all duration-500 group-hover:opacity-100 md:max-h-0 md:group-hover:max-h-32">
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
