'use client';

import React, { useState } from "react";
import Link from 'next/link';
import { X, ChevronRight } from 'lucide-react';

const PRIMARY_RED = '#8B1E1B';

const previewImages = [
    {
        id: 1,
        alt: 'Mysore Masala Dosa',
        ratio: '3 / 4',
        image: '/images/Food/lemon_rice.jpeg'
    },
    {
        id: 2,
        alt: 'Restaurant seating area',
        ratio: '4 / 5',
        image: '/images/Food/filter_coffee.jpeg' 
    },
    {
        id: 3,
        alt: 'Idli sambar and chutney',
        ratio: '1 / 1',
        image: '/images/Food/idli4.jpeg'
    },
    {
        id: 4,
        alt: 'Slow-cooked paneer curry',
        ratio: '3 / 4',
        image: '/images/Food/chola.jpeg'
    },
    {
        id: 5,
        alt: 'Warm dining ambience',
        ratio: '9 / 16',
        image: '/images/Food/sambar_vada.jpeg'
    },
    {
        id: 6,
        alt: 'Veg biryani served hot',
        ratio: '1 / 1',
        image: '/images/Food/bedmi_poori_bhaji.jpeg'
    }
];

// {
//         id: 1,
//         alt: 'Mysore Masala Dosa',
//         ratio: '3 / 4',
//         image: '/images/Food/dosa2.jpeg'
//     },
//     {
//         id: 2,
//         alt: 'Idli sambar and chutney',
//         ratio: '1 / 1',
//         image: '/images/Food/idli1.jpeg'
//     },
//     {
//         id: 3,
//         alt: 'Slow-cooked paneer curry',
//         ratio: '3 / 4',
//         image: '/images/Food/sadhya.jpeg'
//     },
//     {
//         id: 4,
//         alt: 'Veg biryani served hot',
//         ratio: '1 / 1',
//         image: '/images/Food/biryani.jpeg'

const HomeGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="bg-[#fff] py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <span className="font-bold text-sm sm:text-base uppercase tracking-wider block mb-2" style={{ color: PRIMARY_RED }}>
                        Take a Look
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-black tracking-tight text-black">
                        Our Gallery
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-lg mx-auto">
                        A glimpse of our food, our space, and the experience that awaits you at Dakshayani.
                    </p>
                </div>

                {/* Masonry preview grid */}
                <div className="columns-2 sm:columns-3 gap-3 sm:gap-4">
                    {previewImages.map((img) => (
                        <button
                            key={img.id}
                            onClick={() => setSelectedImage(img)}
                            className="relative block w-full mb-3 sm:mb-4 rounded-xl overflow-hidden group cursor-pointer border border-gray-200 break-inside-avoid"
                        >
                            <img
                                src={img.image}
                                alt={img.alt}
                                style={{ aspectRatio: img.ratio }}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </button>
                    ))}
                </div>

                {/* View All button */}
                <div className="flex justify-center mt-8 md:mt-12">
                    <Link
                        href="/gallery"
                        style={{ backgroundColor: PRIMARY_RED }}
                        className="inline-flex items-center gap-1 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                    >
                        View All Photos
                        <ChevronRight className="w-4 h-4" />
                    </Link>
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

export default HomeGallery;