'use client'

import { useState } from 'react'
import { Check, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

const fieldClass =
  'w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30'

export function ContactSection() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" />
            {t.contact.eyebrow}
          </p>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-background md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-background/70">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="rounded-2xl bg-background p-6 text-foreground shadow-2xl md:p-8">
          {submitted ? (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="size-8" />
              </div>
              <p className="mt-6 max-w-sm text-pretty font-serif text-xl leading-relaxed">
                {t.contact.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">{t.contact.name}</span>
                  <input required className={fieldClass} type="text" name="name" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">{t.contact.email}</span>
                  <input required className={fieldClass} type="email" name="email" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">{t.contact.phone}</span>
                  <input className={fieldClass} type="tel" name="phone" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">{t.contact.travelers}</span>
                  <input className={fieldClass} type="number" min={1} defaultValue={2} name="travelers" />
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">{t.contact.interest}</span>
                <select className={fieldClass} name="interest" defaultValue="">
                  <option value="" disabled>
                    —
                  </option>
                  {t.contact.interestOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">{t.contact.message}</span>
                <textarea rows={4} className={`${fieldClass} resize-none`} name="message" />
              </label>

              <Button
                type="submit"
                size="lg"
                className="group mt-2 h-12 bg-accent text-base text-accent-foreground hover:bg-accent/90"
              >
                {t.contact.submit}
                <Send className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
