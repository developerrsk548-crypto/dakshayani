'use client';

import React, { useState } from "react";
import { X } from 'lucide-react';

const PRIMARY_RED = '#8B1E1B';

const galleryImages = [
    {
        id: 1,
        category: 'Food',
        alt: 'Butter Masala Dosa',
        ratio: '3 / 4',
        image: '/images/Home_Food/butter_masala_dosa.jpg'
    },
    {
        id: 2,
        category: 'Interior',
        alt: 'Restaurant seating area',
        ratio: '4 / 5',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        category: 'Food',
        alt: 'Podi Thatti Idli',
        ratio: '1 / 1',
        image: '/images/Home_Food/podi_thatti_idli.jpg'
    },
    {
        id: 4,
        category: 'Food',
        alt: 'Mysore Masala Dosa',
        ratio: '3 / 4',
        image: '/images/Home_Food/mysore_masala_dosa.jpg'
    },
    {
        id: 5,
        category: 'Ambience',
        alt: 'Warm dining ambience',
        ratio: '9 / 16',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 6,
        category: 'Food',
        alt: 'Medu Vada',
        ratio: '1 / 1',
        image: '/images/Home_Food/medu_vada.jpg'
    },
    {
        id: 7,
        category: 'Interior',
        alt: 'Restaurant interior view',
        ratio: '4 / 3',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 8,
        category: 'Food',
        alt: 'Vegetable Uttapam',
        ratio: '3 / 4',
        image: '/images/Home_Food/vegitable_uttapam.jpg'
    },
    {
        id: 9,
        category: 'Food',
        alt: 'Idli Masala Chaat',
        ratio: '1 / 1',
        image: '/images/Home_Food/idli_masala_chhat.avif'
    },
    {
        id: 10,
        category: 'Ambience',
        alt: 'Table setting close-up',
        ratio: '4 / 5',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 11,
        category: 'Food',
        alt: 'Jini Dosa',
        ratio: '3 / 4',
        image: '/images/Home_Food/jini_dosa.avif'
    },
    {
        id: 12,
        category: 'Food',
        alt: 'Steamed Idli',
        ratio: '9 / 16',
        image: '/images/Home_Food/steam_idli.jpg'
    }
];

const categories = ['All', 'Food', 'Interior', 'Ambience'];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages =
        activeCategory === 'All'
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeCategory);

    return (
        <section className="bg-[#f8f8f8] py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <span className="text-red-600 font-bold text-sm sm:text-base uppercase tracking-wider block mb-2">
                        Take a Look
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-black tracking-tight text-black">
                        Our Gallery
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-lg mx-auto">
                        A glimpse of our food, our space, and the experience that awaits you at Dakshayani.
                    </p>
                </div>

                {/* Category filter tabs */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-8 md:mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors duration-300 ${
                                activeCategory === cat
                                    ? 'text-white border-transparent'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-red-300'
                            }`}
                            style={activeCategory === cat ? { backgroundColor: PRIMARY_RED } : undefined}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry image grid */}
                <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4">
                    {filteredImages.map((img) => (
                        <button
                            key={img.id}
                            onClick={() => setSelectedImage(img)}
                            className="relative block w-full mb-3 sm:mb-4 rounded-xl overflow-hidden group cursor-pointer border border-gray-200 break-inside-avoid"
                        >
                            <img
                                src={img.image}
                                alt={img.alt}
                                style={{ aspectRatio: img.ratio || '1 / 1' }}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-8"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-5 right-5 sm:top-8 sm:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <img
                        src={selectedImage.image}
                        alt={selectedImage.alt}
                        className="max-w-full max-h-full rounded-xl object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export default Gallery;