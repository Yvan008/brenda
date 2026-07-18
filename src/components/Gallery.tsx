'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { Section } from './ui/section'
import { Button } from './ui/button'
import Image from 'next/image'
import { useLang } from '@/lib/useLang'

const categories = ['All', 'Weddings', 'Introductions', 'Birthdays', 'Corporate', 'Graduations', 'Anniversaries']

const galleryItems = [
  { id: 1, category: 'Weddings', title: 'Elegant Wedding Ceremony', image: '/Screenshot 2026-07-18 131128.png' },
  { id: 2, category: 'Introductions', title: 'Traditional Introduction', image: '/Screenshot 2026-07-18 131148.png' },
  { id: 3, category: 'Birthdays', title: 'Birthday Celebration', image: '/Screenshot 2026-07-18 131157.png' },
  { id: 4, category: 'Corporate', title: 'Corporate Meeting', image: '/Screenshot 2026-07-18 131217.png' },
  { id: 5, category: 'Graduations', title: 'Graduation Ceremony', image: '/WhatsApp Image 2026-07-09 at 5.30.29 PM.jpeg' },
  { id: 6, category: 'Anniversaries', title: 'Anniversary Dinner', image: '/WhatsApp Image 2026-07-09 at 5.42.31 PM.jpeg' },
  { id: 7, category: 'Weddings', title: 'Luxury Wedding Decor', image: '/WhatsApp Image 2026-07-09 at 5.43.13 PM.jpeg' },
]

export const Gallery = () => {
  const { translate } = useLang()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <Section id="gallery" background="light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#4B2142] dark:text-white mb-4">
          {translate('gallery.title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {translate('gallery.description')}
        </p>
      </motion.div>

      {/* Filter Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? 'bg-[#C8A04D] text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#C8A04D]/10 border border-gray-200 dark:border-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <div className="aspect-[4/5] relative">
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center">
                <div className="text-center text-white p-6">
                  <p className="text-sm font-medium mb-2 opacity-80">{item.category}</p>
                  <h3 className="text-xl font-bold font-heading">{translate(`gallery.items.${item.id - 1}.title`)}</h3>
                </div>
              </div>
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-[#4B2142]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#C8A04D] transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="aspect-video relative rounded-2xl overflow-hidden">
                <Image 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center">
                  <div className="text-center text-white p-8">
                    <p className="text-lg font-medium mb-4 opacity-80">{selectedImage.category}</p>
                    <h3 className="text-3xl font-bold font-heading">{translate(`gallery.items.${selectedImage.id - 1}.title`)}</h3>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button onClick={() => setSelectedImage(null)}>{translate('gallery.close')}</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
