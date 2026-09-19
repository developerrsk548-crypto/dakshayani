'use client';

import React from "react";
import { Leaf, ChevronRight, UtensilsCrossed, Clock, Award } from 'lucide-react';
import Link from 'next/link';

const PRIMARY_RED = '#8B1E1B';

const highlights = [
    {
        icon: Leaf,
        title: '100% Vegetarian',
        description: 'Every dish on our menu is pure veg, no exceptions.'
    },
    {
        icon: UtensilsCrossed,
        title: 'South Indian & Multi-Cuisine',
        description: 'Authentic dosas, idlis and tiffins alongside multi-cuisine favourites.'
    },
    {
        icon: Clock,
        title: 'Fresh, Made to Order',
        description: 'No pre-made shortcuts — every plate is cooked fresh in-house.'
    },
    {
        icon: Award,
        title: 'Trusted in Noida',
        description: 'A go-to spot for families and food lovers across the city.'
    }
];

const HomeAbout = () => {
    return (
        <section className="bg-[#f8f8f8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Image */}
                <div className="relative rounded-xl overflow-hidden h-72 sm:h-96 lg:h-[420px] order-2 lg:order-1 group">
                    <img
                        src="https://images.livemint.com/img/2021/07/05/original/crispy-dosa-temple-recipe_1625469413436.jpg"
                        alt="Dakshayani restaurant interior"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-md flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-green-700" />
                        <span className="text-sm font-bold text-gray-900">100% Pure Veg Kitchen</span>
                    </span>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2">
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ color: PRIMARY_RED }}>
                        About Us
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold md:text-5xl font-black text-gray-900 tracking-tight mt-3">
                        A Taste of South India, Made with Love
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
                        Dakshayani is a 100% pure vegetarian restaurant in Noida, bringing authentic South Indian
                        flavours together with popular multi-cuisine dishes. From crispy dosas and soft idlis to
                        comforting curries, every recipe is prepared fresh with traditional spices and a whole lot
                        of care — because good food should always feel like home.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 shrink-0">
                                    <item.icon className="w-5 h-5 text-amber-600" />
                                </span>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{item.title}</h4>
                                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/about"
                        style={{ backgroundColor: PRIMARY_RED }}
                        className="inline-flex items-center gap-1 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-full mt-9 hover:opacity-90 transition-opacity"
                    >
                        Know More About Us
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
            </div>
        </section>
    );
};

export default HomeAbout;