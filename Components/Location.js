'use client';

import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const FULL_ADDRESS =
    'Dakshayani, H-1A/5&6, Globus D H Block, Shop No 20 & 25, Globus D, Commercial Property, Sector 63, Noida, Uttar Pradesh 201309';

// Exact Google Maps Place CID for Dakshayani — pins the precise listing, not just a nearby address match
const PLACE_CID = '3175645227646267066';

const Location = () => {
    // CID-based embed locks onto the exact Google Business listing (no API key needed)
    const mapEmbedUrl = `https://www.google.com/maps?cid=${PLACE_CID}&output=embed`;

    // Sends the user straight into turn-by-turn directions to the exact address
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(FULL_ADDRESS)}`;

    return (
        <section className="bg-[#f8f8f8] text-black py-12 md:py-20">
            <div className="w-full px-4 sm:px-6 md:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12">
                    <div>
                        <span className="text-red-600 font-bold text-sm sm:text-base uppercase tracking-wider block mb-2">
                            Find Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-medium md:text-5xl font-black tracking-tight text-black">
                            Our Location
                        </h2>
                    </div>

                    <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E1B] text-white font-bold text-base hover:bg-red-700 transition-colors duration-300 w-fit"
                    >
                        <Navigation className="w-4 h-4" />
                        Get Directions
                        <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                </div>

                {/* Map Container */}
                <div className="relative w-full h-[400px] sm:h-[480px] md:h-[550px] rounded-xl overflow-hidden border border-gray-200 shadow-md">
                    <iframe
                        title="Dakshayani Restaurant Location Map"
                        src={mapEmbedUrl}
                        className="w-full h-full border-0"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    {/* Location Details Card Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-gray-200 shadow-xl max-w-sm">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-black text-lg leading-snug">Dakshayani</h3>
                                <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">
                                    H-1A/5&amp;6, Globus D H Block, Shop No 20 &amp; 25, Sector 63, Noida, UP 201309
                                </p>
                                <span className="inline-block mt-3 text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
                                    Open Today &bull; 11:00 AM &ndash; 11:00 PM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Location;