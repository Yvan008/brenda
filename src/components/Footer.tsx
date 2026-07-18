'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#4B2142] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#C8A04D] to-[#D4B86A] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl font-heading">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading">Brenda Protocol</h3>
                <p className="text-xs text-[#C8A04D]">Service</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional protocol and event coordination services creating memorable experiences in Kigali, Rwanda.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C8A04D] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C8A04D] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C8A04D] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold font-heading mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#C8A04D] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#C8A04D] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#C8A04D] transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-[#C8A04D] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#C8A04D] transition-colors">Contact</a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold font-heading mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#C8A04D] transition-colors">Wedding Coordination</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#C8A04D] transition-colors">Introduction Ceremonies</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#C8A04D] transition-colors">Corporate Events</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#C8A04D] transition-colors">Birthday Celebrations</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#C8A04D] transition-colors">Graduation Ceremonies</a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold font-heading mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C8A04D] flex-shrink-0 mt-1" />
                <span className="text-gray-300">Kicukiro, Kigali, Rwanda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C8A04D] flex-shrink-0" />
                <a href="tel:0786403382" className="text-gray-300 hover:text-[#C8A04D] transition-colors">0786403382</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C8A04D] flex-shrink-0" />
                <a href="mailto:Brendakayitesi0@gmail.com" className="text-gray-300 hover:text-[#C8A04D] transition-colors">Brendakayitesi0@gmail.com</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Brenda Protocol Service. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#C8A04D] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#C8A04D] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
