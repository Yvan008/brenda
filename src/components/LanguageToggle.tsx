'use client'

import React from 'react'
import { Globe } from 'lucide-react'
import { useLang } from '@/lib/useLang'

const labels: Record<string, { label: string; native: string }> = {
  en: { label: 'English', native: 'English' },
  rw: { label: 'Kinyarwanda', native: 'Ikinyarwanda' },
}

export const LanguageToggle = () => {
  const { lang, setLang } = useLang()

  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'rw' : 'en')}
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
