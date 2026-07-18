'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

export const CTA = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#4B2142] to-[#2D1526]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-[#C8A04D]/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#C8A04D]" />
            <span className="text-sm font-medium text-[#C8A04D]">Get Started</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
            Ready to Make Your Event Extraordinary?
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your consultation today and let Brenda Protocol Service handle every detail with professionalism and excellence.
          </p>

          <Button 
            size="lg" 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group"
          >
            Book Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
