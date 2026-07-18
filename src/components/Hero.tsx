'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import { useLang } from '@/lib/useLang'

export const Hero = () => {
  const { translate } = useLang()
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#F5F0E8] dark:from-gray-900 dark:via-gray-800 dark:to-[#1a1510]">
      {/* Floating Shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-[#C8A04D]/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-[#4B2142]/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#C8A04D]/5 to-[#4B2142]/5 rounded-full blur-3xl"
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20">
          <Star className="w-6 h-6 text-[#C8A04D] animate-pulse" />
        </div>
        <div className="absolute bottom-40 left-32">
          <Sparkles className="w-8 h-8 text-[#4B2142] animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <Star className="w-4 h-4 text-[#C8A04D] animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-[#C8A04D]/10 px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#C8A04D]" />
                <span className="text-sm font-medium text-[#C8A04D]">{translate('hero.badge')}</span>
              </motion.div>

             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#4B2142] dark:text-white leading-tight mb-6"
             >
               {translate('hero.title')}
             </motion.h1>

             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
             >
               {translate('hero.description')}
             </motion.p>

             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8 }}
               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
             >
               <Button size="lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                 {translate('hero.cta1')}
                 <ArrowRight className="ml-2 w-5 h-5" />
               </Button>
               <Button variant="outline" size="lg" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>
                 {translate('hero.cta2')}
               </Button>
             </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
            >
               <div className="text-center">
                 <p className="text-3xl font-bold text-[#C8A04D] font-heading">250+</p>
                 <p className="text-sm text-gray-600 dark:text-gray-400">{translate('hero.statEvents')}</p>
               </div>
               <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
               <div className="text-center">
                 <p className="text-3xl font-bold text-[#C8A04D] font-heading">150+</p>
                 <p className="text-sm text-gray-600 dark:text-gray-400">{translate('hero.statClients')}</p>
               </div>
               <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
               <div className="text-center">
                 <p className="text-3xl font-bold text-[#C8A04D] font-heading">5+</p>
                 <p className="text-sm text-gray-600 dark:text-gray-400">{translate('hero.statYears')}</p>
               </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="aspect-[4/5] relative">
                  <Image 
                    src="/Screenshot 2026-07-18 131128.png" 
                    alt="Brenda Protocol Service Event" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B2142]/80 to-transparent flex items-end justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-white font-heading mb-2">We Plan It.</h3>
                      <h3 className="text-2xl font-bold text-[#C8A04D] font-heading mb-2">We Organize It.</h3>
                      <h3 className="text-2xl font-bold text-white font-heading">You Enjoy It.</h3>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C8A04D] rounded-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#4B2142] rounded-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-[#C8A04D] rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-[#C8A04D] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
