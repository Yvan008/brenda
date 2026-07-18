import { useEffect, useState } from 'react'

import { t, type Lang } from './i18n'

type TranslationPath = string

const getValueByPath = (obj: Record<string, unknown>, path: string): unknown => {
  return path.split('.').reduce((current: unknown, key: string) => {
    if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
      return (current as Record<string, unknown>)[key]
    }
    return path
  }, obj)
}

export const useLang = () => {
  const [lang, setLang] = useState<Lang>('en')
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('brenda_lang')
    const nextLang: Lang = saved === 'rw' ? 'rw' : 'en'

    // Avoid setting if it doesn't actually change.
    setLang((prev) => (prev === nextLang ? prev : nextLang))
    setIsHydrated(true)

    const handleStorage = () => {
      const saved = window.localStorage.getItem('brenda_lang')
      const next: Lang = saved === 'rw' ? 'rw' : 'en'
      setLang((prev) => (prev === next ? prev : next))
    }


    const handleCustom = (e: Event) => {
      const detail = (e as CustomEvent<Lang>).detail
      if (detail === 'rw' || detail === 'en') {
        setLang(detail)
      }
    }


    window.addEventListener('storage', handleStorage)
    window.addEventListener('brenda-lang-change', handleCustom)
    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener('brenda-lang-change', handleCustom)
    }
  }, [])

  const translate = (path: TranslationPath): string => {
    const value = getValueByPath(t as unknown as Record<string, unknown>, path)
    if (typeof value === 'object' && value !== null && lang in value) {
      return (value as Record<string, string>)[lang]
    }
    return path
  }

  const isRwanda = lang === 'rw'

  const updateLang = (next: Lang) => {
    window.localStorage.setItem('brenda_lang', next)
    window.dispatchEvent(new CustomEvent('brenda-lang-change', { detail: next }))
    setLang(next)
  }

  return { lang, translate, isRwanda, setLang: updateLang, isHydrated }
}
