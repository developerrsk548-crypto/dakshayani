'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

// Custom Brand SVGs
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    guests: '2 Guests',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Submitted:', formData);
  };

  return (
    <section className="bg-white text-black py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Address Block */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-red-600 font-bold">
                <MapPin className="w-5 h-5" />
                <h3 className="text-xl font-medium text-black">Visit Our Restaurant</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed pl-7">
                H-1A/5&6, Globus D H Block, Shop No 20 & 25,<br />
                Sector 63, Noida, Uttar Pradesh 201301
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Phone Block */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-red-600 font-bold">
                <Phone className="w-5 h-5" />
                <h3 className="text-xl font-medium text-black">Call Us</h3>
              </div>
              <p className="text-gray-800 text-base leading-relaxed pl-7">
                +91 8860113366
              </p>
            </div>

            {/* Email Block */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-red-600 font-bold">
                <Mail className="w-5 h-5" />
                <h3 className="text-xl font-medium text-black">Email Us</h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-base pl-7">
                info@dakshayani.com
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>

          </div>

          {/* Right Column - Reservation & Inquiry Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-wider text-gray-600">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-wider text-gray-600">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Email & Guests / Table Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-wider text-gray-600">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-wider text-gray-600">
                    NUMBER OF GUESTS
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-red-600 focus:bg-white transition-all duration-200"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3-4 Guests">3-4 Guests</option>
                    <option value="5-8 Guests">5-8 Guests</option>
                    <option value="Large Party (9+)">Large Party (9+)</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-wider text-gray-600">
                    RESERVATION DATE
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-red-600 focus:bg-white transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-wider text-gray-600">
                    PREFERRED TIME
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-red-600 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Message / Special Requests */}
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-wider text-gray-600">
                  SPECIAL REQUESTS OR INQUIRIES
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about dietary preferences, seating requests, or private event catering details..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#8B1E1B] text-white font-bold text-base hover:bg-red-700 transition-colors duration-300 shadow-md"
                >
                  Book Table / Send Inquiry
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;