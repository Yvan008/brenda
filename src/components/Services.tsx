'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, PartyPopper, Cake, Briefcase, GraduationCap, Wine, ArrowRight } from 'lucide-react'
import { Section } from './ui/section'
import { Card, CardHeader, CardContent } from './ui/card'
import { Button } from './ui/button'
import { useLang } from '@/lib/useLang'

const services = [
  {
    icon: Sparkles,
    title: 'Wedding Coordination',
    description: 'Complete planning and coordination from beginning to end.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Heart,
    title: 'Introduction Ceremony Protocol',
    description: 'Traditional ceremony planning and protocol management.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: PartyPopper,
    title: 'Engagement Parties',
    description: 'Elegant engagement event planning.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Cake,
    title: 'Birthday Celebrations',
    description: 'Birthday decoration, planning, coordination, and management.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Briefcase,
    title: 'Corporate Meetings',
    description: 'Professional meeting organization and protocol.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: GraduationCap,
    title: 'Graduation Ceremonies',
    description: 'Graduation celebration planning.',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Wine,
    title: 'Anniversary Celebrations',
    description: 'Luxury anniversary event coordination.',
    color: 'from-yellow-500 to-amber-500'
  },
]

export const Services = () => {
  const { translate } = useLang()
  return (
    <Section id="services" background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#4B2142] dark:text-white mb-4">
          {translate('services.badge')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {translate('services.description')}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card glassmorphism className="group hover:border-[#C8A04D] transition-all duration-300">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                 <h3 className="text-xl font-bold font-heading text-[#4B2142] dark:text-white mb-2 group-hover:text-[#C8A04D] transition-colors">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                 <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                 <Button variant="outline" size="sm" className="group-hover:bg-[#C8A04D] group-hover:text-white group-hover:border-[#C8A04D] transition-all">
                   {translate('services.learnMore')}
                   <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
