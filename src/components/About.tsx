'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Award, Users, Target } from 'lucide-react'
import { Section } from './ui/section'
import Image from 'next/image'
import { useLang } from '@/lib/useLang'

export const About = () => {
  const { translate } = useLang()
  return (
    <Section id="about" background="light">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-[#C8A04D]/10 px-4 py-2 rounded-full mb-6"
          >
            <Heart className="w-4 h-4 text-[#C8A04D]" />
 <span className="text-sm font-medium text-[#C8A04D]">{translate('about.badge')}</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#4B2142] dark:text-white mb-6">
            {translate('about.title')}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {translate('about.p1')}
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {translate('about.p2')}
          </p>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our experienced team handles every detail with professionalism so our clients can enjoy their events stress-free.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start space-x-3"
            >
              <div className="w-12 h-12 bg-[#C8A04D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-[#C8A04D]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#4B2142] dark:text-white mb-1">{translate('about.excellence')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{translate('about.premium')}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-start space-x-3"
            >
              <div className="w-12 h-12 bg-[#C8A04D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#C8A04D]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#4B2142] dark:text-white mb-1">{translate('about.professional')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{translate('about.expert')}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-start space-x-3"
            >
              <div className="w-12 h-12 bg-[#C8A04D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-[#C8A04D]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#4B2142] dark:text-white mb-1">{translate('about.detail')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{translate('about.execution')}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex items-start space-x-3"
            >
              <div className="w-12 h-12 bg-[#C8A04D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-[#C8A04D]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#4B2142] dark:text-white mb-1">{translate('about.passionate')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{translate('about.dedicated')}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative">
            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/Screenshot 2026-07-18 131148.png" 
                alt="Brenda Protocol Service Team" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B2142]/90 to-transparent flex items-end justify-center">
                <div className="text-center p-8">
                  <h3 className="text-3xl font-bold text-white font-heading mb-4">{translate('about.mission')}</h3>
                  <p className="text-lg text-gray-200 max-w-md mx-auto leading-relaxed">
                    {translate('about.missionBody')}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-8 -right-8 w-24 h-24 border-2 border-[#C8A04D] rounded-full"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-[#4B2142] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
