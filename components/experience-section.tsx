'use client'

import { ShieldCheck, MapPin, Users } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const icons = [ShieldCheck, Users, MapPin]

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="scroll-mt-20 bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div id="about" className="scroll-mt-24">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" />
            {t.experience.eyebrow}
          </p>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
            {t.experience.title}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.experience.body}
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {t.experience.points.map((point, i) => {
              const Icon = icons[i]
              return (
                <div key={point.title} className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold">{point.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      {point.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/madinah-mosque.png"
              alt="The Prophet's Mosque in Madinah at dusk"
              className="aspect-[4/5] size-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 start-6 end-6 rounded-xl border border-border bg-card/95 p-5 shadow-xl backdrop-blur-sm sm:start-8 sm:end-auto sm:max-w-xs">
            <p className="font-serif text-lg italic leading-snug text-foreground">
              &ldquo;They handled everything. We simply prayed and were present.&rdquo;
            </p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">— Ziyara traveler, Chicago</p>
          </div>
        </div>
      </div>
    </section>
  )
}
