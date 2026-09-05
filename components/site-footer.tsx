'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { ZiyaraLogo } from '@/components/ziyara-logo'
import { useLanguage } from '@/components/language-provider'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background pb-10 pt-16 text-foreground">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 border-b border-border pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <ZiyaraLogo className="text-foreground" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.explore}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li><a href="#destinations" className="hover:text-accent">{t.nav.destinations}</a></li>
              <li><a href="#packages" className="hover:text-accent">{t.nav.packages}</a></li>
              <li><a href="#experience" className="hover:text-accent">{t.nav.experience}</a></li>
              <li><a href="#about" className="hover:text-accent">{t.nav.about}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.company}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-accent">{t.nav.about}</a></li>
              <li><a href="#experience" className="hover:text-accent">{t.experience.eyebrow}</a></li>
              <li><a href="#contact" className="hover:text-accent">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.contact}
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-accent" />
                <a href="mailto:hello@ziyara.travel" className="hover:text-accent">hello@ziyara.travel</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-accent" />
                <a href="tel:+18005551234" className="hover:text-accent" dir="ltr">+1 (800) 555-1234</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-accent" />
                <span>New York, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Ziyara. {t.footer.rights}</p>
          <p className="font-serif italic">Ziyara — زيارة</p>
        </div>
      </div>
    </footer>
  )
}
