'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ZiyaraLogo } from '@/components/ziyara-logo'
import { useLanguage } from '@/components/language-provider'

export function SiteHeader() {
  const { t, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#destinations', label: t.nav.destinations },
    { href: '#packages', label: t.nav.packages },
    { href: '#experience', label: t.nav.experience },
    { href: '#about', label: t.nav.about },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/60 bg-background/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <a
          href="#top"
          className={`transition-colors ${scrolled ? 'text-foreground' : 'text-background'}`}
        >
          <ZiyaraLogo />
          <span className="sr-only">Ziyara home</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-foreground/80' : 'text-background/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              scrolled
                ? 'border-border text-foreground/80 hover:border-accent hover:text-accent'
                : 'border-background/40 text-background hover:border-accent hover:text-accent'
            }`}
            aria-label="Switch language"
          >
            <Globe className="size-4" />
            <span className="font-arabic">{t.langToggle}</span>
          </button>

          <Button
            render={<a href="#contact" />}
            nativeButton={false}
            className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex"
          >
            {t.nav.contact}
          </Button>

          <button
            className={`inline-flex size-10 items-center justify-center rounded-full lg:hidden ${
              scrolled ? 'text-foreground' : 'text-background'
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <Button
              render={<a href="#contact" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {t.nav.contact}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
