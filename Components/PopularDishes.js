'use client';

import React from "react";
import { Star, Award, Utensils, Sparkles, ChevronRight, Flame, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PRIMARY_RED = '#8B1E1B';

const menuItems = [
    {
        id: 1,
        name: 'Mysore Masala Dosa',
        category: 'Dosa & Tiffins',
        price: 160,
        rating: 4.9,
        isChefSpecial: true,
        isPopular: true,
        isSpicy: true,
        description: 'Crispy fermented rice crepe with spicy red chutney, stuffed with a soft masala potato filling.',
        image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 2,
        name: 'Soft Idli Sambar',
        category: 'Dosa & Tiffins',
        price: 120,
        rating: 4.8,
        isChefSpecial: false,
        isPopular: true,
        isSpicy: false,
        description: 'Steamed rice cakes served with piping hot lentil sambar and fresh coconut chutney.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 3,
        name: 'Crispy Medu Vada',
        category: 'Starters',
        price: 110,
        rating: 4.7,
        isChefSpecial: false,
        isPopular: true,
        isSpicy: false,
        description: 'Golden, crunchy lentil doughnuts, deep fried and served with sambar and chutney.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 4,
        name: 'Ghee Podi Uttapam',
        category: 'Dosa & Tiffins',
        price: 170,
        rating: 4.9,
        isChefSpecial: true,
        isPopular: true,
        isSpicy: true,
        description: 'Thick savoury pancake topped with onions and tomatoes, finished with aromatic gunpowder ghee.',
        image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 5,
        name: 'Chettinad Veg Biryani',
        category: 'Main Course',
        price: 260,
        rating: 4.9,
        isChefSpecial: true,
        isPopular: true,
        isSpicy: true,
        description: 'Fragrant basmati rice slow-cooked with mixed vegetables and a signature South Indian spice blend.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 6,
        name: 'Slow-Cooked Handi Paneer',
        category: 'Main Course',
        price: 280,
        rating: 4.8,
        isChefSpecial: true,
        isPopular: false,
        isSpicy: true,
        description: 'Cottage cheese cubes simmered in traditional clay pots with freshly ground aromatic spices.',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 7,
        name: 'Rava Kesari',
        category: 'Desserts',
        price: 110,
        rating: 4.8,
        isChefSpecial: true,
        isPopular: false,
        isSpicy: false,
        description: 'Warm semolina pudding infused with saffron, ghee, cardamom and roasted cashews.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 8,
        name: 'South Indian Filter Coffee',
        category: 'Beverages',
        price: 70,
        rating: 4.9,
        isChefSpecial: false,
        isPopular: true,
        isSpicy: false,
        description: 'Strong, frothy decoction coffee brewed the traditional way and served in a classic steel tumbler.',
        image: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 9,
        name: 'Garlic Butter Naan',
        category: 'Breads & Rice',
        price: 60,
        rating: 4.7,
        isChefSpecial: false,
        isPopular: true,
        isSpicy: false,
        description: 'Refined flour leavened bread cooked in a clay tandoor and brushed generously with garlic butter.',
        image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80'
    }
];

// Pure JavaScript Filtering
const popularDishes = menuItems.filter((item) => item.isPopular);
const chefSpecials = menuItems.filter((item) => item.isChefSpecial);
const southIndianClassics = menuItems.filter((item) => item.category === 'Dosa & Tiffins');

// Animation variants for a simple, gentle grid reveal
const gridVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.05 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

// Pure JS Card Component
const DishCard = ({ item, highlight }) => (
    <motion.div
        variants={cardVariants}
        whileHover={{ y: -3 }}
        className="relative bg-amber-50/40 rounded-xl p-4 border border-amber-200/60 shadow-sm flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-md"
    >
        {highlight && (
            <span
                style={{ backgroundColor: PRIMARY_RED }}
                className="absolute -top-2 -left-2 z-10 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md"
            >
                Top Pick
            </span>
        )}

        <div className="space-y-3">
            <div className="relative h-40 rounded-lg overflow-hidden group">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <span className="absolute top-2 right-2 bg-black/75 backdrop-blur-md text-amber-300 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    {item.rating}
                </span>

                {item.isSpicy && (
                    <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-md text-red-600 p-1 rounded-md shadow-sm" title="Spicy">
                        <Flame className="w-3.5 h-3.5 fill-red-500" />
                    </span>
                )}
            </div>

            <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg leading-snug">
                    {item.name}
                </h4>
                <p className="text-[11px] uppercase tracking-wide text-amber-600 font-semibold mt-0.5">
                    {item.category}
                </p>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                </p>
            </div>
        </div>

        <div className="flex items-center justify-between pt-4 mt-3 border-t border-amber-200/50">
            <span className="text-xl font-black text-gray-900">₹{item.price}</span>
            <Link
                href="/contact"
                style={{ backgroundColor: PRIMARY_RED }}
                className="px-4 py-1.5 rounded-lg text-white text-xs font-bold shadow hover:opacity-90 transition-opacity cursor-pointer"
            >
                Order
            </Link>
        </div>
    </motion.div>
);

// Pure JS Header Component with View All link, reveals on scroll
const SectionHeader = ({ title, subtitle, icon: Icon }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.3 }}
        className="flex items-end justify-between"
    >
        <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-amber-100">
                <Icon className="w-5 h-5 text-amber-600" />
            </span>
            <div>
                <h3 className="text-2xl font-bold sm:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                    <Icon className="w-6 h-6 text-amber-500 sm:hidden" />
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
                )}
            </div>
        </div>

        <Link
            href="/menu"
            className="inline-flex items-center gap-1 text-sm font-extrabold uppercase tracking-wider text-[#8B1E1B] hover:text-red-700 transition-colors group cursor-pointer whitespace-nowrap"
        >
            View All
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
    </motion.div>
);

// Reusable animated grid wrapper so every section reveals as the user scrolls
const DishGrid = ({ items, keyPrefix }) => (
    <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
        {items.slice(0, 4).map((item, idx) => (
            <DishCard key={`${keyPrefix}-${item.id}`} item={item} highlight={idx === 0} />
        ))}
    </motion.div>
);

const PopularDishes = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

            {/* 100% Veg banner */}
            <div className="flex items-center justify-center gap-2 text-green-700 font-bold text-sm sm:text-base">
                <Leaf className="w-5 h-5" />
                100% Pure Vegetarian &middot; Authentic South Indian &amp; Multi-Cuisine
            </div>

            {/* Section 1: Most Popular Dishes */}
            <div className="space-y-6">
                <SectionHeader
                    title="Most Popular Dishes"
                    subtitle="Loved by our regulars, ordered again and again"
                    icon={Award}
                />
                <DishGrid items={popularDishes} keyPrefix="popular" />
            </div>

            {/* Section 2: Chef's Special */}
            <div className="space-y-6">
                <SectionHeader
                    title="Chef's Special"
                    subtitle="Signature recipes, crafted with extra care"
                    icon={Sparkles}
                />
                <DishGrid items={chefSpecials} keyPrefix="chef" />
            </div>

            {/* Section 3: South Indian Classics */}
            <div className="space-y-6">
                <SectionHeader
                    title="South Indian Classics"
                    subtitle="Dosas, idlis and tiffins made the authentic way"
                    icon={Utensils}
                />
                <DishGrid items={southIndianClassics} keyPrefix="south" />
            </div>

            {/* Bottom CTA strip */}
            <div
                style={{ backgroundColor: PRIMARY_RED }}
                className="rounded-2xl px-6 py-10 text-center text-white flex flex-col items-center gap-3"
            >
                <Leaf className="w-7 h-7 opacity-80" />
                <h3 className="text-xl sm:text-2xl font-black">Hungry for more?</h3>
                <p className="text-sm text-white/80 max-w-md">
                    Explore our full menu for more tiffins, mains, breads and desserts.
                </p>
                <Link
                    href="/menu"
                    className="mt-2 inline-flex items-center gap-1 bg-white text-[#8B1E1B] font-extrabold text-sm px-5 py-2.5 rounded-lg shadow hover:opacity-90 transition-opacity"
                >
                    View Full Menu
                    <ChevronRight className="w-4 h-4" />
                </Link>
            </div>

        </section>
    );
};

export default PopularDishes;