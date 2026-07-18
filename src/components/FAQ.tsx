'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { Section } from './ui/section'

const faqs = [
  {
    question: 'How early should I book?',
    answer: 'We recommend booking at least 3-6 months in advance for weddings and large events, and 1-2 months for smaller events to ensure availability and proper planning.',
  },
  {
    question: 'Do you work outside Kigali?',
    answer: 'Yes, we provide services throughout Rwanda and can travel to other countries for international events. Additional travel fees may apply for events outside Kigali.',
  },
  {
    question: 'Can you provide decorations?',
    answer: 'Absolutely! We offer comprehensive decoration services including floral arrangements, lighting, table settings, and thematic decor tailored to your event style and preferences.',
  },
  {
    question: 'Do you handle corporate events?',
    answer: 'Yes, we specialize in corporate event planning including conferences, meetings, product launches, and company celebrations with professional protocol and coordination.',
  },
  {
    question: 'Can I customize my package?',
    answer: 'Yes, all our packages are customizable. We work closely with you to create a personalized plan that fits your specific needs, preferences, and budget.',
  },
]

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section id="faq" background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center space-x-2 bg-[#C8A04D]/10 px-4 py-2 rounded-full mb-6">
          <HelpCircle className="w-4 h-4 text-[#C8A04D]" />
          <span className="text-sm font-medium text-[#C8A04D]">FAQs</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#4B2142] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our services
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#4B2142] pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[#C8A04D]" />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
