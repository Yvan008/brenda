'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MessageSquare, DollarSign, CheckCircle, PartyPopper, ArrowDown } from 'lucide-react'
import { Section } from './ui/section'
import { useLang } from '@/lib/useLang'

const steps = [
  {
    icon: Calendar,
    title: 'Book Consultation',
    description: 'Schedule a meeting to discuss your event requirements',
  },
  {
    icon: MessageSquare,
    title: 'Understand Client Needs',
    description: 'We listen and understand your vision and preferences',
  },
  {
    icon: DollarSign,
    title: 'Planning & Budget',
    description: 'Create a detailed plan and budget for your event',
  },
  {
    icon: CheckCircle,
    title: 'Coordination',
    description: 'Execute the plan with precision and attention to detail',
  },
  {
    icon: PartyPopper,
    title: 'Successful Event',
    description: 'Enjoy your perfectly organized event',
  },
]

export const Process = () => {
  const { translate } = useLang()
  return (
    <Section id="process" background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#4B2142] dark:text-white mb-4">
          {translate('process.title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {translate('process.description')}
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C8A04D] to-[#4B2142] transform -translate-x-1/2"></div>

        <div className="space-y-12 lg:space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Step Number */}
              <div className="hidden lg:flex w-1/2 justify-end">
                {index % 2 === 0 && (
                  <div className="text-right pr-8">
                    <span className="text-6xl font-bold text-[#C8A04D]/20 font-heading">
                      0{index + 1}
                    </span>
                  </div>
                )}
              </div>

              {/* Step Card */}
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#C8A04D] to-[#D4B86A] rounded-full flex items-center justify-center shadow-xl mx-auto lg:mx-0">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 max-w-md">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold font-heading text-[#4B2142] dark:text-white mb-2">
                    {translate(`process.steps.${index}.title`)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {translate(`process.steps.${index}.description`)}
                  </p>
                </div>
              </div>

              {/* Step Number (Right Side) */}
              <div className="hidden lg:flex w-1/2 justify-start">
                {index % 2 !== 0 && (
                  <div className="text-left pl-8">
                    <span className="text-6xl font-bold text-[#C8A04D]/20 font-heading">
                      0{index + 1}
                    </span>
                  </div>
                )}
              </div>

              {/* Arrow Down (Mobile Only) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center">
                  <ArrowDown className="w-8 h-8 text-[#C8A04D]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
