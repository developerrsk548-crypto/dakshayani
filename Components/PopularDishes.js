'use client';

import React from "react";
import { Star, Award, Utensils, Sparkles, ChevronRight, Flame, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PRIMARY_RED = '#8B1E1B';

const menuItems = [
  // ---------- DOSA PARAMPARA ----------
  {
    id: 1,
    name: 'Karnataka Special Benne Masala Dosa',
    category: 'Dosa',
    price: 199,
    rating: 4.9,
    isVeg: true,
    isChefSpecial: true,
    isPopular: true,
    isSpicy: false,
    description: 'Signature butter dosa from Karnataka, stuffed with spiced potato masala - indulgent and rich',
    image: '/images/Home_Food/butter_masala_dosa.jpg'
  },
  {
    id: 2,
    name: 'Karnataka Paneer Dosa',
    category: 'Dosa',
    price: 239,
    rating: 4.8,
    isVeg: true,
    isChefSpecial: false,
    isPopular: false,
    isSpicy: false,
    description: 'Crispy crepe (dosa) with a rich, North Indian-inspired paneer (Indian cottage cheese) filling',
    image: '/images/Home_Food/paneer_dosa.avif'
  },
  {
    id: 3,
    name: 'Karnataka Mysore Masala Dosa',
    category: 'Dosa',
    price: 189,
    rating: 4.8,
    isVeg: true,
    isChefSpecial: false,
    isPopular: true,
    isSpicy: true,
    description: 'Crispy, fermented rice-and-lentil crepe slathered with a signature spicy red garlic-chutney and stuffed with a savory, spiced potato filling.',
    image: '/images/Home_Food/mysore_masala_dosa.jpg'
  },
  {
    id: 4,
    name: 'Karnataka Butter Masala Dosa',
    category: 'Dosa',
    price: 199,
    rating: 4.7,
    isVeg: true,
    isChefSpecial: true,
    isPopular: false,
    isSpicy: false,
    description: 'Crisp, buttery South Indian crepe, originating from Davanagere, made from a fermented batter of rice, urad dal, poha, and fenugreek',
    image: '/images/Home_Food/masala_dosa.jpg'
  },
  {
    id: 5,
    name: 'Jini Dosa',
    category: 'Dosa',
    price: 249,
    rating: 4.9,
    isVeg: true,
    isChefSpecial: true,
    isPopular: true,
    isSpicy: true,
    description: 'crisp crepe loaded with butter, vegetables (cabbage, capsicum, onion, carrot), Schezwan sauce, pav bhaji masala, and an abundance of grated cheese',
    image: '/images/Home_Food/jini_dosa.avif'
  },

  // ---------- UTTAMPAM RANGE ----------
  {
    id: 6,
    name: 'Onion Uttapam',
    category: 'Uttampam Range',
    price: 159,
    rating: 4.6,
    isVeg: true,
    isChefSpecial: false,
    isPopular: true,
    isSpicy: false,
    description: 'Thick, savory pancake topped with finely chopped onions and herbs.',
    image: '/images/Home_Food/onion_uttapam.jpg'
  },
  {
    id: 7,
    name: 'Tomato Uttapam',
    category: 'Uttampam Range',
    price: 169,
    rating: 4.5,
    isVeg: true,
    isChefSpecial: false,
    isPopular: false,
    isSpicy: false,
    description: 'Flavorful South Indian pancake topped with fresh, juicy diced tomatoes.',
    image: '/images/Home_Food/tomato_uttapam.avif'
  },
  {
    id: 8,
    name: 'Mix Vegetable Uttapam',
    category: 'Uttampam Range',
    price: 199,
    rating: 4.7,
    isVeg: true,
    isChefSpecial: true,
    isPopular: true,
    isSpicy: false,
    description: 'Rich pancake loaded with a vibrant mix of fresh garden vegetables.',
    image: '/images/Home_Food/vegitable_uttapam.jpg'
  },
  {
    id: 9,
    name: 'Paneer Uttapam',
    category: 'Uttampam Range',
    price: 219,
    rating: 4.8,
    isVeg: true,
    isChefSpecial: true,
    isPopular: false,
    isSpicy: false,
    description: 'Soft uttapam topped with seasoned cottage cheese and fresh herbs.',
    image: '/images/Home_Food/paneer_uttapam.jpg'
  },
  {
    id: 10,
    name: 'Onion Tomato Uttapam',
    category: 'Uttampam Range',
    price: 179,
    rating: 4.6,
    isVeg: true,
    isChefSpecial: false,
    isPopular: true,
    isSpicy: false,
    description: 'Classic combination of caramelized onions and fresh tomatoes on a fluffy base.',
    image: '/images/Home_Food/onion_uttapam.jpg'
  },

  // ---------- IDLI & VADA ----------
  {
    id: 11,
    name: 'Steamed Idli (2 Pcs)',
    category: 'Idli & Vada',
    price: 99,
    rating: 4.7,
    isVeg: true,
    isChefSpecial: false,
    isPopular: true,
    isSpicy: false,
    description: 'Soft, fluffy steamed rice cakes served with coconut chutney and Sambar',
    image: '/images/Home_Food/steam_idli.jpg'
  },
  {
    id: 12,
    name: 'Medu Vada (2 Pcs)',
    category: 'Idli & Vada',
    price: 119,
    rating: 4.8,
    isVeg: true,
    isChefSpecial: false,
    isPopular: true,
    isSpicy: false,
    description: 'Crispy lentil fritters, golden and crunchy, served with chutney and Sambar',
    image: '/images/Home_Food/medu_vada.jpg'
  },
  {
    id: 13,
    name: 'Podi Thatti Idli',
    category: 'Idli & Vada',
    price: 149,
    rating: 4.9,
    isVeg: true,
    isChefSpecial: true,
    isPopular: true,
    isSpicy: true,
    description: 'a popular Karnataka-style breakfast consisting of a large, plate-sized steamed rice cake (thatte idli) topped with a generous amount of spiced lentil powder (podi) and melted ghee',
    image: '/images/Home_Food/podi_thatti_idli.jpg'
  },
  {
    id: 14,
    name: 'Rava Idli',
    category: 'Idli & Vada',
    price: 129,
    rating: 4.6,
    isVeg: true,
    isChefSpecial: false,
    isPopular: false,
    isSpicy: false,
    description: 'Soft, fluffy south indian idlis without grinding raw rice',
    image: '/images/Home_Food/rava_idli.webp'
  },
  {
    id: 15,
    name: 'Vegetable Idli',
    category: 'Idli & Vada',
    price: 159,
    rating: 4.7,
    isVeg: true,
    isChefSpecial: false,
    isPopular: false,
    isSpicy: false,
    description: 'finely chopped vegetables directly into the batter, high in fiber & vitamins',
    image: '/images/Home_Food/vegetable_idli.avif'
  },
  {
    id: 16,
    name: 'Fried Idli Masala Chaat',
    category: 'Idli & Vada',
    price: 159,
    rating: 4.8,
    isVeg: true,
    isChefSpecial: true,
    isPopular: true,
    isSpicy: true,
    description: 'Crispy fried idles sautéed with onions, curry leaves, spices, And drizzled with tangy chutneys',
    image: '/images/Home_Food/idli_masala_chhat.avif'
  }
];

// Pure JavaScript Filtering
const popularDishes = menuItems.filter((item) => item.isPopular);
const chefSpecials = menuItems.filter((item) => item.isChefSpecial);
const idliVadaDishes = menuItems.filter((item) => item.category === 'Idli & Vada');

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

      {/* Section 3: Idli & Vada Delights */}
      <div className="space-y-6">
        <SectionHeader
          title="Idli & Vada Delights"
          subtitle="Authentic, soft idlis and crisp golden vadas"
          icon={Utensils}
        />
        <DishGrid items={idliVadaDishes} keyPrefix="idli-vada" />
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