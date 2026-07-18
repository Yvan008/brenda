import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  glassmorphism?: boolean
}

export const Card = ({ children, className, glassmorphism = false }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl',
        glassmorphism && 'glassmorphism',
        className
      )}
    >
      {children}
    </div>
  )
}

export const CardHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('mb-4', className)}>{children}</div>
}

export const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('', className)}>{children}</div>
}
