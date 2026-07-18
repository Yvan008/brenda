import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'light' | 'dark' | 'gradient'
}

export const Section = ({ children, className, id, background = 'white' }: SectionProps) => {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-[#4B2142] text-white',
    gradient: 'bg-gradient-to-br from-[#4B2142] to-[#2D1526] text-white'
  }
  
  return (
    <section id={id} className={cn('py-20 px-4 md:px-8', backgrounds[background], className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}
