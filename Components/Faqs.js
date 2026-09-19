'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What makes Dakshayani different from traditional restaurants?",
    answer: "At Dakshayani, we combine traditional authentic recipes with high-quality, locally sourced fresh ingredients. Every dish is crafted to order with rich, home-style spices to ensure an unforgettable dining experience."
  },
  {
    question: "Do you offer online ordering and food delivery services?",
    answer: "Yes, you can easily place an order online through our website or call us directly. We provide fast and reliable doorstep delivery to keep your food hot and fresh."
  },
  {
    question: "What are your operating hours and opening days?",
    answer: "We are open 7 days a week from 11:00 AM to 11:00 PM for dine-in, takeaway, and online delivery."
  },
  {
    question: "Do you cater for special events, parties, or bulk orders?",
    answer: "Absolutely! We cater for birthday parties, corporate events, and family gatherings. Reach out to us via our contact page for customized party menus and bulk pricing."
  },
  {
    question: "Are there vegetarian and vegan options available on the menu?",
    answer: "Yes, we offer a wide range of vegetarian and vegan dishes clearly labeled on our menu to accommodate all diet requirements."
  }
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-16 md:py-24 main-padding">
      <div className="mx-auto py-16 px-4 sm:px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-black mb-10 md:mb-16 text-black ">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const isLast = index === faqData.length - 1;

            return (
              <div key={index} className="relative flex items-start gap-4 md:gap-6">
                {/* Vertical Line Connector */}
                {!isLast && (
                  <div className="absolute left-[15px] top-8 bottom-[-24px] w-[1px] bg-gray-200" />
                )}

                {/* Toggle Icon Circle */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="z-10 flex-shrink-0 w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-black bg-white hover:border-black transition-colors"
                  aria-label="Toggle answer"
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </button>

                {/* FAQ Content */}
                <div className="flex-1 pt-0.5">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left focus:outline-none"
                  >
                    <h3 className="text-lg sm:text-xl font-medium text-black hover:text-red-500 transition-colors">
                      {faq.question}
                    </h3>
                  </button>

                  {isOpen && (
                    <p className="mt-3 text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl transition-all duration-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;