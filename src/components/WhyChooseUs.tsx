'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, CheckCircle, Star, Award, Clock, Heart } from 'lucide-react'
import { Section } from './ui/section'
import { useLang } from '@/lib/useLang'

const stats = [
  { value: 250, label: 'Successful Events', suffix: '+' },
  { value: 150, label: 'Happy Clients', suffix: '+' },
  { value: 5, label: 'Years Experience', suffix: '+' },
  { value: 100, label: 'Client Satisfaction', suffix: '%' },
]

const reasons = [
  { icon: Users },
  { icon: CheckCircle },
  { icon: Star },
  { icon: Award },
  { icon: Heart },
  { icon: Clock },
]

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-[#C8A04D] font-heading">
        {count}{suffix}
      </p>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">{value === 100 ? 'Client Satisfaction' : stats.find(s => s.value === value)?.label}</p>
    </div>
  )
}

export const WhyChooseUs = () => {
  const { translate } = useLang()
  return (
    <Section id="why-us" background="gradient">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
          {translate('why.title')}
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          {translate('why.description')}
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
          </motion.div>
        ))}
      </div>

      {/* Reasons Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#C8A04D] to-[#D4B86A] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <reason.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-2">
              {translate(`why.reasons.${index}.title`)}
            </h3>
            <p className="text-gray-300 dark:text-gray-400">
              {translate(`why.reasons.${index}.description`)}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
