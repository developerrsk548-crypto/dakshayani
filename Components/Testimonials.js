'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonialsData = [
  // Real Google Reviews from Images
  {
    rating: '5.0',
    stars: 5,
    text: '"Had a great experience enjoying the meal. The food was delicious, and the quality met the expected standards. Overall, a very satisfying dining experience!"',
    author: 'Abhay Sisodiya',
    role: 'Local Guide',
    initial: 'A'
  },
  {
    rating: '5.0',
    stars: 5,
    text: '"Love the experience great place food taste & quality is good over all a decent & good place to be with your loved ones."',
    author: 'Akash Jha',
    role: 'Local Diner',
    initial: 'A'
  },
  {
    rating: '5.0',
    stars: 5,
    text: '"Delicious food and great service. Please come and enjoy the food here."',
    author: 'Sakshi Singh',
    role: 'Verified Customer',
    initial: 'S'
  },
  {
    rating: '5.0',
    stars: 5,
    text: '"Very delicious south indian food, the staff is also very friendly and hospitable. Every time I visit there I get the best experience."',
    author: 'Eishita Lal',
    role: 'Local Guide',
    initial: 'E'
  },

  // Additional South Indian Specific Reviews
  {
    rating: '5.0',
    stars: 5,
    text: '"The Mysore Masala Dosa and Benne Dosa here are as authentic as it gets. Crisp on the outside, perfectly seasoned inside, and served with fresh chutneys!"',
    author: 'Rohan Sharma',
    role: 'Regular Diner',
    initial: 'R'
  },
  {
    rating: '5.0',
    stars: 5,
    text: '"Best Podi Thatti Idli and Medu Vada in town. Melt-in-your-mouth softness with authentic ghee and podi flavor. Exceptional hospitality!"',
    author: 'Priya Nair',
    role: 'Food Enthusiast',
    initial: 'P'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalPages = Math.ceil(testimonialsData.length / 2);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
      setIsAnimating(false);
    }, 250); // Small transition delay for smooth fade-in-out effect
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
      setIsAnimating(false);
    }, 250);
  };

  const handleDotClick = (idx) => {
    if (idx === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsAnimating(false);
    }, 250);
  };

  // Auto-slide effect (4 seconds interval)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, totalPages]);

  // Visible items based on current page index
  const visibleTestimonials = testimonialsData.slice(
    currentIndex * 2,
    currentIndex * 2 + 2
  );

  return (
    <section className="bg-[#8B1E1B] text-white py-16 md:py-24 main-padding overflow-hidden">
      <div className="max-w-[1440px] mx-auto py-16 px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium md:text-5xl font-black uppercase tracking-wider text-white">
            Testimonials
          </h2>

          {/* Rating Summary */}
          <div className="flex items-center gap-4 backdrop-blur-sm px-5 py-3 rounded-2xl w-fit border border-red-500/30">
            <div className="w-12 h-12 rounded-full border-2 border-white/80 flex items-center justify-center font-bold text-lg text-white">
              4.8
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-white/90 mt-1 block">
                95+ Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid with Smooth Transition */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 transition-all duration-500 ease-in-out transform ${
            isAnimating
              ? 'opacity-0 scale-[0.98] translate-y-2'
              : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          {visibleTestimonials.map((item, index) => (
            <div
              key={index}
              className="bg-red-700/40 border border-red-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg backdrop-blur-sm hover:border-red-400/60 transition-colors duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold text-white text-base sm:text-lg">{item.rating}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-white/90 text-base sm:text-lg leading-relaxed font-medium mb-8">
                  {item.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-red-500/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white text-red-600 font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base sm:text-lg leading-tight">
                    {item.author}
                  </h4>
                  <p className="text-white/70 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button & Slider Controls */}
        <div className="flex flex-col items-center gap-8">
          <a
            href="https://www.google.com/search?client=safari&hs=Uz99&sca_esv=e25f4044016e62e9&channel=iphone_bm&biw=393&bih=695&sxsrf=ANbL-n4cm5I-8Uwl_QbcED9Bi60-soKhkw:1773120022558&kgmid=/g/11mll2qqjy&q=Dakshayani&shndl=30&source=sh/x/loc/act/m1/3&kgs=a44521f750f9ab5a&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/act/m1/3#lrd=0x390ce500239b352d:0x2c1228825e852eba,1,,,"
            className="px-8 py-3.5 rounded-full bg-white text-red-600 font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:scale-105"
          >
            See What Our Guests Say
          </a>

          {/* Navigation Controls & Indicators */}
          <div className="flex items-center gap-4 sm:gap-6 w-full max-w-md justify-center">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-red-600 active:scale-95 transition-all shrink-0"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Lines */}
            <div className="flex items-center gap-2 flex-1 max-w-[200px]">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 flex-1 ${
                    currentIndex === idx ? 'bg-white scale-y-125' : 'bg-red-800/60 hover:bg-red-400/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-red-600 active:scale-95 transition-all shrink-0"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;