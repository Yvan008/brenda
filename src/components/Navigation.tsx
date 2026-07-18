'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Why Choose Us', href: '#why-us' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQs', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#C8A04D] to-[#D4B86A] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl font-heading">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold font-heading text-[#4B2142]">Brenda Protocol</h1>
                <p className="text-xs text-[#C8A04D]">Service</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-[#C8A04D]',
                    activeSection === item.href.substring(1) ? 'text-[#C8A04D]' : 'text-gray-700'
                  )}
                >
                  {item.name}
                </motion.a>
              ))}
              <Button size="sm" onClick={() => scrollToSection('#contact')}>
                Book Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={(cn('lg:hidden p-2 rounded-lg transition-colors'), isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20')}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#C8A04D] to-[#D4B86A] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl font-heading">B</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold font-heading text-[#4B2142]">Brenda Protocol</h1>
                    <p className="text-xs text-[#C8A04D]">Service</p>
                  </div>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    className={cn(
                      'block text-lg font-medium py-3 px-4 rounded-lg transition-colors',
                      activeSection === item.href.substring(1)
                        ? 'bg-[#C8A04D]/10 text-[#C8A04D]'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="space-y-4 pt-6 border-t">
                <Button className="w-full" onClick={() => scrollToSection('#contact')}>
                  Book Consultation
                </Button>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <a href="tel:0786403382" className="flex items-center space-x-2 hover:text-[#C8A04D]">
                    <Phone size={16} />
                    <span>0786403382</span>
                  </a>
                  <a href="mailto:Brendakayitesi0@gmail.com" className="flex items-center space-x-2 hover:text-[#C8A04D]">
                    <Mail size={16} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
