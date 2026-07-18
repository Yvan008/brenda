'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Section } from './ui/section'

const testimonials = [
  {
    name: 'Sarah N.',
    rating: 5,
    text: 'Brenda Protocol Service made our wedding stress-free. Everything was perfectly organized.',
  },
  {
    name: 'Jean Claude',
    rating: 5,
    text: 'Professional, organized, and very reliable. They exceeded all our expectations.',
  },
  {
    name: 'Diane',
    rating: 5,
    text: 'The best protocol service in Kigali. Highly recommended for any event.',
  },
]

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <Section id="testimonials" background="light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#4B2142] mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from our satisfied clients about their experience with us
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-[#C8A04D]/30" />
              </div>
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#C8A04D] fill-[#C8A04D]" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="text-center">
                <p className="text-lg font-semibold text-[#4B2142] font-heading">
                  {testimonials[currentIndex].name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-[#C8A04D] text-white flex items-center justify-center hover:bg-[#D4B86A] transition-colors shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#C8A04D] text-white flex items-center justify-center hover:bg-[#D4B86A] transition-colors shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#C8A04D] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
