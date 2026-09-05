'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function HeroSection() {
  const { t } = useLanguage()

  const stats = [
    { value: '12,000+', label: t.hero.stat1 },
    { value: '15+', label: t.hero.stat2 },
    { value: '24/7', label: t.hero.stat3 },
  ]

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/makkah-haram.png"
          alt="Aerial view of the Grand Mosque in Makkah at golden hour"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/45 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" />
            {t.hero.eyebrow}
          </p>
          <h1 className="text-hero text-balance font-serif font-semibold text-background">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              size="lg"
              className="group h-12 bg-accent px-7 text-base text-accent-foreground hover:bg-accent/90"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </Button>
            <Button
              render={<a href="#destinations" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 border-background/40 bg-background/5 px-7 text-base text-background backdrop-blur-sm hover:bg-background/15 hover:text-background"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-background/20 pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-3xl font-semibold text-background md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-background/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
