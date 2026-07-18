import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'bg-[#C8A04D] text-white hover:bg-[#D4B86A] focus:ring-[#C8A04D] shadow-lg hover:shadow-xl',
      secondary: 'bg-[#4B2142] text-white hover:bg-[#5C2D50] focus:ring-[#4B2142] shadow-lg hover:shadow-xl',
      outline: 'border-2 border-[#C8A04D] text-[#C8A04D] hover:bg-[#C8A04D] hover:text-white focus:ring-[#C8A04D]',
      ghost: 'text-gray-700 hover:text-[#C8A04D] hover:bg-gray-100 focus:ring-gray-300'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
