'use client'

import { FileCheck, Plane, BedDouble, BookOpen } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const icons = [FileCheck, Plane, BedDouble, BookOpen]

export function ServicesSection() {
  const { t } = useLanguage()
  const items = t.services.items

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-accent">
          <span className="h-px w-8 bg-accent" />
          {t.services.eyebrow}
        </p>
        <h2 className="text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
          {t.services.title}
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          {t.services.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = icons[i]
          return (
            <div key={item.title} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
