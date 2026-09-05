'use client'

import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function PackagesSection() {
  const { t } = useLanguage()
  const items = t.packages.items

  return (
    <section id="packages" className="scroll-mt-20 bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" />
            {t.packages.eyebrow}
          </p>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-background md:text-5xl">
            {t.packages.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-background/70">
            {t.packages.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {items.map((item, i) => {
            const featured = i === 1
            return (
              <article
                key={item.name}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  featured
                    ? 'bg-accent text-accent-foreground shadow-2xl lg:-translate-y-4'
                    : 'bg-background/5 text-background ring-1 ring-background/15'
                }`}
              >
                {featured && (
                  <span className="absolute end-6 top-6 rounded-full bg-accent-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {t.packages.popular}
                  </span>
                )}
                <h3 className="font-serif text-2xl font-semibold">{item.name}</h3>
                <p className={`mt-1 text-sm ${featured ? 'text-accent-foreground/70' : 'text-background/60'}`}>
                  {item.duration}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  {item.price !== 'Tailored' && item.price !== 'مخصّصة' && (
                    <span className={`text-sm ${featured ? 'text-accent-foreground/70' : 'text-background/60'}`}>
                      {t.packages.from}
                    </span>
                  )}
                  <span className="font-serif text-4xl font-semibold">{item.price}</span>
                  {item.price !== 'Tailored' && item.price !== 'مخصّصة' && (
                    <span className={`text-sm ${featured ? 'text-accent-foreground/70' : 'text-background/60'}`}>
                      {t.packages.perPerson}
                    </span>
                  )}
                </div>

                <p className={`mt-4 text-sm leading-relaxed ${featured ? 'text-accent-foreground/85' : 'text-background/75'}`}>
                  {item.desc}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className={`mt-0.5 size-4 shrink-0 ${featured ? 'text-accent-foreground' : 'text-accent'}`} />
                      <span className={featured ? 'text-accent-foreground/90' : 'text-background/85'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  render={<a href="#contact" />}
                  nativeButton={false}
                  className={`group mt-8 h-11 ${
                    featured
                      ? 'bg-accent-foreground text-accent hover:bg-accent-foreground/90'
                      : 'bg-accent text-accent-foreground hover:bg-accent/90'
                  }`}
                >
                  {t.packages.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </Button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
