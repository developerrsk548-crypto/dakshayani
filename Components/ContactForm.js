'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

// Custom Brand SVGs
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const ZomatoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.579 5.867A1.564 1.564 0 0 0 20.45 5.4H3.55a1.564 1.564 0 0 0-1.129.467A1.562 1.562 0 0 0 1.954 7v10c0 .416.166.814.467 1.129.315.315.713.471 1.129.471h16.9a1.564 1.564 0 0 0 1.129-.471A1.564 1.564 0 0 0 22.046 17V7c0-.416-.166-.814-.467-1.133zm-4.708 3.093-5.263 5.345h4.945v1.667H9.284v-1.667l5.263-5.345H9.602V7.293h7.269v1.667z" />
  </svg>
);

const SwiggyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.04 4.544c1.942 0 3.738.79 5.034 2.069a.9.9 0 0 1-.035 1.306.9.9 0 0 1-1.272-.036 5.32 5.32 0 0 0-3.727-1.539 5.352 5.352 0 0 0-5.347 5.347c0 1.591.685 3.023 1.777 4.02l.006.006c.01.009.02.018.03.027l4.088 3.712a.9.9 0 0 1 .054 1.271.9.9 0 0 1-1.271.054l-4.088-3.712a.9.9 0 0 1-.059-.059A7.126 7.126 0 0 1 4.887 11.7c0-3.956 3.208-7.156 7.153-7.156z" />
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
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
                href="https://www.facebook.com/p/Dakshayani-restaurant-100091418854884/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/dakshayani_noida/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              {/* <a
                href="https://www.zomato.com/ncr/dakshini-south-indian-kitchen-sector-63-noida/order"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                aria-label="Zomato"
              >
                <ZomatoIcon />
              </a>
              <a
                href="https://www.swiggy.com/city/noida-1/dakshayani-sector-64-rest1378036"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                aria-label="Swiggy"
              >
                <SwiggyIcon />
              </a> */}
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