'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Flame, Star, ShoppingBag, Utensils, Heart, Award } from 'lucide-react';

const OurMenu = () => {
  const PRIMARY_RED = '#8B1E1B';

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVegOnly, setFilterVegOnly] = useState(false);
  const [quickFilter, setQuickFilter] = useState('All'); // 'All', 'Popular', 'Spicy'

  const categories = [
    'All',
    'Starters',
    'Main Course',
    'Clay Pot Special',
    'Breads & Rice',
    'Desserts',
    'Beverages'
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Dakshayani Royal Thali',
      category: 'Main Course',
      price: 380,
      rating: 4.9,
      isVeg: true,
      isChefSpecial: true,
      isPopular: true,
      isSpicy: false,
      description: 'A grand feast featuring Paneer Butter Masala, Dal Makhani, Mix Veg, Naan, Rice, Gulab Jamun & Raita.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      name: 'Mysore Masala Dosa',
      category: 'Dosa & Tiffins',
      price: 160,
      rating: 4.9,
      isVeg: true,
      isChefSpecial: true,
      isPopular: true,
      isSpicy: true,
      description: 'Crispy fermented rice crepe with spicy red chutney, stuffed with a soft masala potato filling.',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      name: 'Paneer Tikka Charcoal Grill',
      category: 'Starters',
      price: 240,
      rating: 4.7,
      isVeg: true,
      isChefSpecial: false,
      isPopular: true,
      isSpicy: true,
      description: 'Marinated cottage cheese marinated in yogurt and spices, grilled over live charcoal to perfection.',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      name: 'Soft Idli Sambar',
      category: 'Dosa & Tiffins',
      price: 120,
      rating: 4.8,
      isVeg: true,
      isChefSpecial: false,
      isPopular: true,
      isSpicy: false,
      description: 'Steamed rice cakes served with piping hot lentil sambar and fresh coconut chutney.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      name: 'Chettinad Veg Biryani',
      category: 'Main Course',
      price: 260,
      rating: 4.9,
      isVeg: true,
      isChefSpecial: true,
      isPopular: true,
      isSpicy: true,
      description: 'Fragrant basmati rice slow-cooked with mixed vegetables and a signature South Indian spice blend.',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      name: 'Crispy Medu Vada',
      category: 'Starters',
      price: 110,
      rating: 4.6,
      isVeg: true,
      isChefSpecial: false,
      isPopular: false,
      isSpicy: false,
      description: 'Golden, crunchy lentil doughnuts, deep fried and served with sambar and chutney.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 7,
      name: 'Garlic Butter Naan',
      category: 'Breads & Rice',
      price: 60,
      rating: 4.8,
      isVeg: true,
      isChefSpecial: false,
      isPopular: true,
      isSpicy: false,
      description: 'Refined flour leavened bread cooked in clay tandoor and brushed generously with garlic butter.',
      image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 8,
      name: 'Rava Kesari',
      category: 'Desserts',
      price: 110,
      rating: 4.9,
      isVeg: true,
      isChefSpecial: true,
      isPopular: false,
      isSpicy: false,
      description: 'Warm semolina pudding infused with saffron, ghee, cardamom and roasted cashews.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 9,
      name: 'South Indian Filter Coffee',
      category: 'Beverages',
      price: 70,
      rating: 4.9,
      isVeg: true,
      isChefSpecial: false,
      isPopular: true,
      isSpicy: false,
      description: 'Strong, frothy decoction coffee brewed the traditional way and served in a classic steel tumbler.',
      image: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=600&q=80'
    }
];

  // Popular Dishes Subset
  const popularDishes = menuItems.filter((item) => item.isPopular);

  // Filtered Main List
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = filterVegOnly ? item.isVeg : true;
    
    let matchesQuickFilter = true;
    if (quickFilter === 'Popular') matchesQuickFilter = item.isPopular;
    if (quickFilter === 'Spicy') matchesQuickFilter = item.isSpicy;

    return matchesCategory && matchesSearch && matchesVeg && matchesQuickFilter;
  });

  return (
    <section id="menu" className="bg-white text-black py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200">
            <Utensils className="w-3.5 h-3.5 text-amber-900" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
              Freshly Prepared Daily
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-black text-gray-900 tracking-tight">
            Explore Our <span style={{ color: PRIMARY_RED }}>Authentic Menu</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Handpicked ingredients, traditional spice blends, and recipes slow-cooked to perfection.
          </p>
        </div>

        {/* 🌟 MOST POPULAR DISHES SPOTLIGHT SECTION */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-500" />
              <h3 className="text-2xl font-black font-bold text-gray-900">Most Popular Dishes</h3>
            </div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-gray-400">
              GUEST FAVORITES ❤️
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.slice(0, 4).map((item) => (
              <motion.div
                key={`popular-${item.id}`}
                whileHover={{ y: -6 }}
                className="bg-amber-50/40 rounded p-4 border border-amber-200/60 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative h-36 rounded overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <span className="absolute top-2 right-2 bg-black/70 backdrop-blur-md text-amber-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                      {item.rating}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-base leading-snug">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 mt-2 border-t border-amber-200/40">
                  <span className="text-lg font-black text-gray-900">₹{item.price}</span>
                  <a
                    href="#contact"
                    style={{ backgroundColor: PRIMARY_RED }}
                    className="px-3 py-1.5 rounded-sm text-white text-xs font-bold shadow-md hover:opacity-90 transition-opacity"
                  >
                    Order
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Filters & Search Controls */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
            
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes, paneer, biryani..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-red-800 transition-all"
              />
            </div>

            {/* Quick Special Filters */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {['All', 'Popular', 'Spicy'].map((qf) => (
                <button
                  key={qf}
                  onClick={() => setQuickFilter(qf)}
                  className={`px-3.5 py-2 rounded-sm text-xs font-bold transition-all ${
                    quickFilter === qf
                      ? 'bg-gray-900 text-white shadow-sm'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {qf === 'Spicy' ? '🌶️ Spicy' : qf === 'Popular' ? '🔥 Popular' : 'All Items'}
                </button>
              ))}

              {/* Veg Only Toggle */}
              <button
                onClick={() => setFilterVegOnly(!filterVegOnly)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 border ${
                  filterVegOnly 
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' 
                    : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-600'
                }`}
              >
                <span className={`w-3 h-3 border-2 ${filterVegOnly ? 'border-white' : 'border-emerald-600'} flex items-center justify-center p-0.5`}>
                  <span className={`w-1 h-1 rounded-lg ${filterVegOnly ? 'bg-white' : 'bg-emerald-600'}`} />
                </span>
                Veg Only
              </button>
            </div>
          </div>

          {/* Category Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={isActive ? { backgroundColor: PRIMARY_RED } : {}}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Item Image & Badges */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Veg / Non-Veg Indicator */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md p-1.5 rounded-lg shadow-md">
                      <span className={`w-4 h-4 border-2 ${item.isVeg ? 'border-emerald-600' : 'border-red-600'} flex items-center justify-center`}>
                        <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                      </span>
                    </div>

                    {/* Special Badges */}
                    <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                      {item.isChefSpecial && (
                        <span className="bg-amber-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                          <Flame className="w-3 h-3 fill-white" />
                          Chef's Special
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
                          🌶️ Spicy
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Item Content */}
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-900 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs font-bold bg-amber-50 text-amber-900 px-2 py-0.5 rounded-md shrink-0">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        {item.rating}
                      </div>
                    </div>

                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-gray-50">
                  <div>
                    <span className="text-xs text-gray-400 block font-semibold">PRICE</span>
                    <span className="text-xl font-bold font-black text-gray-900">₹{item.price}</span>
                  </div>

                  <a
                    href="#contact"
                    style={{ backgroundColor: PRIMARY_RED }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-md"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Order Now
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-100 space-y-3">
            <Utensils className="w-10 h-10 mx-auto text-gray-300" />
            <h4 className="text-lg font-bold text-gray-800">No dishes found</h4>
            <p className="text-gray-500 text-xs">Try clearing your search query or switching filters.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default OurMenu;