'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import { Section } from './ui/section'
import { Button } from './ui/button'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Send email with form data
    const subject = `Event Inquiry from ${formData.name}`
    const body = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Message: ${formData.message}
    `
    window.location.href = `mailto:Brendakayitesi0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Section id="contact" background="light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#4B2142] mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get in touch with us to start planning your perfect event
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#C8A04D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#C8A04D]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#4B2142] mb-1">Address</h4>
                <p className="text-gray-600">Kicukiro, Kigali, Rwanda</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#C8A04D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#C8A04D]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#4B2142] mb-1">Phone</h4>
                <p className="text-gray-600">0786403382</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => window.open('https://wa.me/250786403382', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#C8A04D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#C8A04D]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#4B2142] mb-1">Email</h4>
                <p className="text-gray-600">Brendakayitesi0@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#C8A04D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#C8A04D]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#4B2142] mb-1">Working Hours</h4>
                <p className="text-gray-600">Monday – Saturday</p>
                <p className="text-gray-600">8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5!2d30.0!3d-1.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTQnMDAuMCJTIDMwwrAwMCcwMC4wIkU!5e0!3m2!1sen!2srw!4v1234567890"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C8A04D] focus:ring-2 focus:ring-[#C8A04D]/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C8A04D] focus:ring-2 focus:ring-[#C8A04D]/20 outline-none transition-all"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C8A04D] focus:ring-2 focus:ring-[#C8A04D]/20 outline-none transition-all"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C8A04D] focus:ring-2 focus:ring-[#C8A04D]/20 outline-none transition-all"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="introduction">Introduction Ceremony</option>
                  <option value="engagement">Engagement Party</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="graduation">Graduation Ceremony</option>
                  <option value="anniversary">Anniversary Celebration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C8A04D] focus:ring-2 focus:ring-[#C8A04D]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C8A04D] focus:ring-2 focus:ring-[#C8A04D]/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your event"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  )
}
