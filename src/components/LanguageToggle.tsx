'use client'

import React, { useEffect, useState } from 'react'
import { Globe } from 'lucide-react'

const STORAGE_KEY = 'brenda_lang'

type Lang = 'en' | 'rw'

const labels: Record<Lang, { label: string; native: string }> = {
  en: { label: 'English', native: 'English' },
  rw: { label: 'Kinyarwanda', native: 'Ikinyarwanda' },
}

export const LanguageToggle = () => {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'rw') {
      // Avoid React state update in effect (lint)
      document.documentElement.dataset.lang = saved
    }
  }, [])


  useEffect(() => {
    document.documentElement.dataset.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])


  return (
    <button
      type="button"
      onClick={() => setLang((prev) => (prev === 'en' ? 'rw' : 'en'))}
      aria-label="Select language"
      className="fixed bottom-24 left-24 z-40 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#4B2142] hover:bg-white transition-colors shadow-lg border border-gray-200"
    >
      <Globe className="w-4 h-4" />
      <span>
        {labels[lang].native} ({lang === 'en' ? 'EN' : 'RW'})
      </span>
    </button>
  )
}

