'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, UtensilsCrossed, Users, Clock, ArrowRight, Heart, Star } from 'lucide-react';

const AboutUs = () => {
  // Brand Color Palette
  const PRIMARY_RED = '#8B1E1B';

  const stats = [
    { icon: UtensilsCrossed, label: 'Authentic Dishes', value: '50+' },
    { icon: Users, label: 'Happy Guests', value: '25k+' },
    { icon: Award, label: 'Years of Tradition', value: '15+' },
    { icon: Clock, label: 'Daily Fresh Meals', value: '100%' },
  ];

  return (
    <section className="bg-white text-black py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-20">
        
        {/* Top Hero Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: PRIMARY_RED }} />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Welcome To Dakshayani
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-black tracking-tight text-gray-900 leading-[1.15]">
              Bringing Authentic <span style={{ color: PRIMARY_RED }}>Flavors & Heritage</span> To Your Table
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Founded with a passion for traditional culinary heritage, Dakshayani is a labor of love by our founders to bring time-tested family recipes, hand-picked spices, and authentic regional taste to your dining experience.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              Whether you are dining with family or hosting a special celebration, our commitment remains the same: fresh ingredients, warm Indian hospitality, and unforgettable taste crafted under expert culinary guidance.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#menu"
                style={{ backgroundColor: PRIMARY_RED }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-base hover:opacity-90 transition-all duration-300 shadow-lg shadow-red-950/10"
              >
                Explore Our Menu
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWndqFIi4-rJber4d8bhC5KU7ZlnAVz3pGplnPLPYRWMoC1Ki6xfu2Bl9F5YLGozow-YM7vdrbWndBmqyuhvdDsN3RGrfusFiQGHqcS_cZw4P9XpqFJfz5uz5xqvxxpO0__uDVYJQ4f7oZD3=s1360-w1360-h1020-rw"
                  alt="Restaurant Dining Area"
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-md border border-gray-100"
                />
                <div 
                  className="p-6 rounded-2xl text-white shadow-xl"
                  style={{ backgroundColor: PRIMARY_RED }}
                >
                  <p className="text-2xl font-black">100%</p>
                  <p className="text-xs uppercase tracking-wider font-semibold opacity-90 mt-1">
                    Fresh & Authentic Ingredients
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
                  alt="Delicious Prepared Dish"
                  className="w-full h-72 sm:h-96 object-cover rounded-3xl shadow-md border border-gray-100"
                />
              </div>
            </div>

            {/* Decorative Background Glow */}
            <div 
              className="absolute -bottom-6 -right-6 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ backgroundColor: PRIMARY_RED }}
            />
          </motion.div>

        </div>

        {/* Executive Chef & Founders Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-xl bg-gray-50 border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                Meet Our Culinary Director & Chef
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Crafted Under Expert Hands & Founder's Vision
              </h3>

              <p className="text-gray-600 leading-relaxed text-base">
                Our Master Chef brings over two decades of culinary mastery in traditional Indian recipes. From grinding fresh whole spices every morning to slow-cooking signature gravy bases, every single plate is crafted with genuine passion.
              </p>

              <blockquote className="p-4 rounded-xl bg-white border-l-4 border-amber-500 text-gray-700 italic text-sm shadow-sm">
                "At Dakshayani, cooking isn't just a process—it's an emotion of bringing families together over authentic home-style flavors."
              </blockquote>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80"
                  alt="Executive Chef"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Counter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-xl bg-gray-50 border border-gray-100 shadow-sm"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-4 p-2">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white"
                  style={{ backgroundColor: PRIMARY_RED }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stat.value}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Brand Values / Why Choose Us */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: PRIMARY_RED }}>
              Why Choose Us
            </span>
            <h3 className="text-3xl font-extrabold text-gray-900">
              Crafted With Passion & Tradition
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Founder's Legacy",
                desc: "Built on cherished family recipes passed down through generations.",
                img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Master Chef Expertise",
                desc: "Led by expert chefs with 20+ years of traditional cooking excellence.",
                img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Warm Ambience",
                desc: "Designed to give you and your loved ones a relaxing, premium dining experience.",
                img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;