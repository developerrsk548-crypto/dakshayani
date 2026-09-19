'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Custom WhatsApp SVG Icon
const WhatsAppIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

// Custom Phone SVG Icon
const PhoneIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const FloatingContactButtons = () => {
  // Replace with your restaurant's phone number (with country code)
  const whatsappNumber = '918860113366'; // without + or spaces
  const callNumber = '+918860113366';

  const defaultMessage = encodeURIComponent(
    'Hello! I would like to inquire about table booking / menu options.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
  const phoneUrl = `tel:${callNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 select-none">

      {/* ================= CALL BUTTON (upar) ================= */}
      <div className="flex items-center gap-3">

        {/* "Call us 📞" Animated Pill Label */}
        <motion.a
          href={phoneUrl}
          initial={{ opacity: 0, x: 20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 bg-[#2563eb] text-white font-bold text-sm px-4 py-2.5 rounded-full shadow-lg border border-blue-400/30 cursor-pointer"
        >
          <span>Call us</span>

          {/* Ringing Phone Animation */}
          <motion.span
            animate={{ rotate: [0, -14, 14, -14, 14, -8, 8, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            📞
          </motion.span>
        </motion.a>

        {/* Floating Glowing Button Container */}
        {/* w-14 wrapper: WhatsApp button (w-14) ke saath center-aligned rahe */}
        <div className="relative flex items-center justify-center w-14 h-14">

          {/* Pulse Glow Effect in Background */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full bg-[#2563eb] blur-md pointer-events-none"
          />

          {/* Circular Action Button */}
          <motion.a
            href={phoneUrl}
            aria-label="Call us"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 rounded-full bg-[#2563eb] flex items-center justify-center shadow-[0_8px_25px_rgba(37,99,235,0.4)] border border-blue-300/40 cursor-pointer"
          >
            <PhoneIcon />
          </motion.a>
        </div>
      </div>

      {/* ================= WHATSAPP BUTTON (neeche, pehle jaisa hi) ================= */}
      <div className="flex items-center gap-3">

        {/* "Chat with us 👋" Animated Pill Label */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 bg-[#10b981] text-white font-bold text-sm px-4 py-2.5 rounded-full shadow-lg border border-emerald-400/30 cursor-pointer"
        >
          <span>Chat with us</span>

          {/* Waving Hand Animation */}
          <motion.span
            animate={{ rotate: [0, 18, -10, 18, -4, 10, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
            className="inline-block origin-bottom-right"
          >
            👋
          </motion.span>
        </motion.a>

        {/* Floating Glowing Button Container */}
        <div className="relative flex items-center justify-center">

          {/* Pulse Glow Effect in Background */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full bg-[#25D366] blur-md pointer-events-none"
          />

          {/* Circular Action Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] border border-emerald-300/40 cursor-pointer"
          >
            <WhatsAppIcon />
          </motion.a>
        </div>
      </div>

    </div>
  );
};

export default FloatingContactButtons;