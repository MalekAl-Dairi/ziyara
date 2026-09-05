'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { dictionary, type Language, type Dictionary } from '@/lib/i18n'

type LanguageContextValue = {
  lang: Language
  t: Dictionary
  toggle: () => void
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dictionary[lang].dir
  }, [lang])

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'))
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, t: dictionary[lang], toggle, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
