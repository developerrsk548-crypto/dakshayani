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
    'Dosa',
    'Idli & Vada',
    'Uttapam',
    'Veg Curry',
    'Evening Snacks',
    'Biryani & Rice',
    'Combos',
    'Breads',
    'Dessert',
    'Beverages'
  ];

  // Local images from /public/images/Food/ — used as fallback per category
  const IMG = {
    dosa: '/images/Food/dosa2.jpeg',
    idli: '/images/Food/idli1.jpeg',
    vada: '/images/Food/dal_vada.jpeg',
    curry: '/images/Food/sadhya.jpeg',
    snack: '/images/Food/pakodi.jpeg',
    biryani: '/images/Food/biryani.jpeg',
    combo: '/images/Food/idli_dosa.jpeg',
    bread: '/images/Food/parotta.jpeg',
    dessert: '/images/Food/kheer.jpeg',
    drink: '/images/Food/filter_coffee.jpeg'
  };

  const menuItems = [
    // ---------- DOSA ----------
    { id: 1, name: 'Plain Dosa', category: 'Dosa', price: 129, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Thin, crispy South Indian crepe made from fermented rice and urad dal batter, served with chutney and sambar.', image: '/images/Food/dosa2.jpeg' },
    { id: 2, name: 'Paper Plain Dosa', category: 'Dosa', price: 139, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'An ultra-thin, extra-crispy version of the classic dosa, fermented and griddled to a delicate crunch.', image: '/images/Food/dosa3.jpeg' },
    { id: 3, name: 'Masala Dosa', category: 'Dosa', price: 159, rating: 4.8, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Golden dosa filled with a soft, spiced potato masala, served with chutney and sambar.', image: '/images/Food/dosa4.jpeg' },
    { id: 4, name: 'Mysore Masala Dosa', category: 'Dosa', price: 189, rating: 4.9, isVeg: true, isChefSpecial: false, isPopular: true, isSpicy: true, description: 'Crispy dosa layered with a fiery red garlic chutney and stuffed with spiced potato filling.', image: '/images/Food/dosa2.jpeg' },
    { id: 5, name: 'Ghee Roast Dosa', category: 'Dosa', price: 189, rating: 4.8, isVeg: true, isChefSpecial: true, isPopular: false, isSpicy: false, description: 'Fermented batter roasted on a hot tawa and finished with a generous drizzle of ghee for a golden crunch.', image: '/images/Food/dosa3.jpeg' },
    { id: 6, name: 'Karnataka Special Benne Masala Dosa', category: 'Dosa', price: 199, rating: 4.9, isVeg: true, isChefSpecial: true, isPopular: true, isSpicy: false, description: 'Our signature butter dosa from Karnataka, indulgently rich and stuffed with spiced potato masala.', image: '/images/Food/dosa4.jpeg' },
    { id: 7, name: 'Paneer Dosa', category: 'Dosa', price: 199, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Crispy dosa filled with a mildly spiced cottage cheese filling.', image: '/images/Food/dosa2.jpeg' },
    { id: 8, name: 'Rava Masala Dosa', category: 'Dosa', price: 199, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Light, lacy semolina dosa, crisp at the edges and stuffed with classic potato masala.', image: '/images/Food/dosa3.jpeg' },
    { id: 9, name: 'Jini Dosa', category: 'Dosa', price: 249, rating: 4.8, isVeg: true, isChefSpecial: true, isPopular: false, isSpicy: false, description: "A loaded crepe piled with butter, vegetables, cheese and Schezwan sauce — part dosa, part indulgence.", image: '/images/Food/dosa_roll.jpeg' },

    // ---------- IDLI & VADA ----------
    { id: 10, name: 'Steamed Idli (2 pcs)', category: 'Idli & Vada', price: 99, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Soft, pillowy steamed rice cakes served with coconut chutney and sambar.', image: '/images/Food/idli1.jpeg' },
    { id: 11, name: 'Medu Vada (2 pcs)', category: 'Idli & Vada', price: 119, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Crispy, golden lentil fritters with a soft centre, served with chutney and sambar.', image: '/images/Food/dal_vada.jpeg' },
    { id: 12, name: 'Podi Thatti Idli', category: 'Idli & Vada', price: 149, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'A Karnataka-style plate-sized steamed rice cake topped with spiced lentil powder and melted ghee.', image: '/images/Food/idli3.jpeg' },
    { id: 13, name: 'Rava Idli', category: 'Idli & Vada', price: 129, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Soft steamed semolina idlis, made without any raw rice.', image: '/images/Food/idli4.jpeg' },
    { id: 14, name: 'Dahi Idli Chaat', category: 'Idli & Vada', price: 149, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: true, isSpicy: false, description: 'Steamed idlis soaked in sweetened yogurt, topped with tangy tamarind and green chutneys and crunchy sev.', image: '/images/Food/idli1.jpeg' },
    { id: 15, name: 'Fried Idli Masala Chaat', category: 'Idli & Vada', price: 159, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: true, description: 'Crisp fried idlis tossed with onions, curry leaves and spices, finished with tangy chutneys.', image: '/images/Food/sambar_vada.jpeg' },

    // ---------- UTTAPAM ----------
    { id: 16, name: 'Onion Uttapam', category: 'Uttapam', price: 159, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'A thick, savoury rice-and-lentil pancake topped generously with chopped onions.', image: '/images/Food/uttapam.jpeg' },
    { id: 17, name: 'Mix Vegetable Uttapam', category: 'Uttapam', price: 199, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Soft uttapam loaded with a colourful mix of fresh vegetables.', image: '/images/Food/uttapam.jpeg' },
    { id: 18, name: 'Paneer Uttapam', category: 'Uttapam', price: 219, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'A hearty uttapam topped with soft cottage cheese.', image: '/images/Food/uttapam.jpeg' },

    // ---------- VEG CURRY ----------
    { id: 19, name: 'Paneer Butter Masala', category: 'Veg Curry', price: 249, rating: 4.9, isVeg: true, isChefSpecial: true, isPopular: true, isSpicy: false, description: 'Cottage cheese simmered in a rich, buttery tomato gravy — a comfort-food classic.', image: '/images/Food/sadhya.jpeg' },
    { id: 20, name: 'Dal Makhani', category: 'Veg Curry', price: 199, rating: 4.8, isVeg: true, isChefSpecial: false, isPopular: true, isSpicy: false, description: 'Black lentils slow-cooked overnight with butter and cream for a deeply rich finish.', image: '/images/Food/cuisine1.jpeg' },
    { id: 21, name: 'Kadai Paneer', category: 'Veg Curry', price: 249, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: true, description: 'Cottage cheese and peppers tossed in a bold, freshly ground kadai masala.', image: '/images/Food/sadhya.jpeg' },
    { id: 22, name: 'Malai Kofta', category: 'Veg Curry', price: 199, rating: 4.8, isVeg: true, isChefSpecial: true, isPopular: false, isSpicy: false, description: 'Delicate vegetable and paneer dumplings simmered in a creamy, mildly sweet gravy.', image: '/images/Food/cuisine1.jpeg' },
    { id: 23, name: 'Chana Masala', category: 'Veg Curry', price: 149, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: true, description: 'Chickpeas simmered in a tangy, spiced onion-tomato masala.', image: '/images/Food/chola.jpeg' },
    { id: 24, name: 'Yellow Dal Tadka', category: 'Veg Curry', price: 149, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Everyday comfort dal, tempered with cumin, garlic and dried red chillies.', image: '/images/Food/sadhya.jpeg' },

    // ---------- EVENING SNACKS ----------
    { id: 25, name: 'Paneer 65', category: 'Evening Snacks', price: 199, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: true, isSpicy: true, description: 'Crispy fried paneer cubes tossed in a fiery South Indian-style seasoning.', image: '/images/Food/pakodi.jpeg' },
    { id: 26, name: 'Honey Chilli Potato', category: 'Evening Snacks', price: 159, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: true, description: 'Crispy fried potatoes glazed in a sweet-and-spicy honey chilli sauce.', image: '/images/Food/pakodi.jpeg' },
    { id: 27, name: 'Chilli Paneer', category: 'Evening Snacks', price: 199, rating: 4.8, isVeg: true, isChefSpecial: false, isPopular: true, isSpicy: true, description: 'Wok-tossed paneer with onions, peppers and a bold chilli-garlic sauce.', image: '/images/Food/pakodi.jpeg' },
    { id: 28, name: 'Mysore Pakoda (6 pcs)', category: 'Evening Snacks', price: 139, rating: 4.5, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Crunchy, spiced lentil fritters, a Mysore tea-time favourite.', image: '/images/Food/pakodi.jpeg' },
    { id: 29, name: 'Veg Manchurian', category: 'Evening Snacks', price: 149, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: true, description: 'Crisp vegetable dumplings tossed in a tangy, garlicky Indo-Chinese sauce.', image: '/images/Food/pakodi.jpeg' },

    // ---------- BIRYANI & RICE ----------
    { id: 30, name: 'Dakshayani Special Kerala Biryani', category: 'Biryani & Rice', price: 199, rating: 4.9, isVeg: true, isChefSpecial: true, isPopular: true, isSpicy: true, description: 'Fragrant rice layered with vegetables, coconut and traditional Kerala spices.', image: '/images/Food/kerala_biryani.jpeg' },
    { id: 31, name: 'Chettinad Biryani', category: 'Biryani & Rice', price: 189, rating: 4.8, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: true, description: 'A bold, spice-forward biryani built on freshly ground Chettinad masala and curry leaves.', image: '/images/Food/biryani.jpeg' },
    { id: 32, name: 'Vegetable Hyderabadi Biryani', category: 'Biryani & Rice', price: 199, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: true, description: 'Dum-cooked basmati rice layered with yogurt-marinated vegetables, fried onions and mint.', image: '/images/Food/biryani.jpeg' },
    { id: 33, name: 'Bisi Bele Bath', category: 'Biryani & Rice', price: 199, rating: 4.8, isVeg: true, isChefSpecial: true, isPopular: false, isSpicy: false, description: 'A traditional one-pot Karnataka rice dish, spiced, tangy and deeply comforting.', image: '/images/Food/lemon_rice.jpeg' },
    { id: 34, name: 'Lemon Rice', category: 'Biryani & Rice', price: 169, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Fragrant rice tossed with fresh lemon juice, curry leaves and mild tempering.', image: '/images/Food/lemon_rice.jpeg' },
    { id: 35, name: 'Curd Rice', category: 'Biryani & Rice', price: 159, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Soft-cooked rice mixed with yogurt and tempered with curry leaves and mustard seeds.', image: '/images/Food/upma.jpeg' },

    // ---------- COMBOS ----------
    { id: 36, name: 'Dakshayani Combo Special Plater', category: 'Combos', price: 249, rating: 4.8, isVeg: true, isChefSpecial: false, isPopular: true, isSpicy: false, description: 'Mini masala dosa, idli, mini uttapam and filter coffee — a little bit of everything on one plate.', image: '/images/Food/idli_dosa.jpeg' },
    { id: 37, name: 'Masala Dosa + Idli + Filter Coffee', category: 'Combos', price: 229, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'A classic dosa and idli pairing, rounded off with a hot filter coffee.', image: '/images/Food/idli_dosa.jpeg' },
    { id: 38, name: 'Classic Indian Breakfast', category: 'Combos', price: 149, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Fluffy deep-fried pooris served with spiced potato bhaji and masala chhach.', image: '/images/Food/bedmi_poori_bhaji.jpeg' },
    { id: 39, name: 'Dakshayani Special Chhole Bhatoore', category: 'Combos', price: 169, rating: 4.8, isVeg: true, isChefSpecial: false, isPopular: true, isSpicy: true, description: 'Soft, puffed bhature paired with tangy spiced chickpea curry — a hearty North Indian favourite.', image: '/images/Food/chola.jpeg' },

    // ---------- BREADS ----------
    { id: 40, name: 'Malabar Parantha (2 pcs)', category: 'Breads', price: 49, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Flaky, layered flatbread, best paired with any of our curries.', image: '/images/Food/malabar_prantha.jpeg' },
    { id: 41, name: 'Tawa Butter Roti', category: 'Breads', price: 20, rating: 4.5, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Whole wheat flatbread cooked on a tawa and finished with butter.', image: '/images/Food/parotta.jpeg' },
    { id: 42, name: 'Papad', category: 'Breads', price: 20, rating: 4.4, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Thin, crisp lentil wafer, roasted or fried.', image: '/images/Food/parotta.jpeg' },

    // ---------- DESSERT ----------
    { id: 43, name: 'Dakshayani Special Kheer', category: 'Dessert', price: 79, rating: 4.8, isVeg: true, isChefSpecial: true, isPopular: false, isSpicy: false, description: 'Our house rice pudding, slow-simmered with milk and finished with cardamom.', image: '/images/Food/kheer.jpeg' },
    { id: 44, name: 'Rava Keshri', category: 'Dessert', price: 79, rating: 4.8, isVeg: true, isChefSpecial: true, isPopular: false, isSpicy: false, description: 'Warm semolina pudding infused with saffron, ghee, cardamom and roasted cashews.', image: '/images/Food/kheer2.jpeg' },
    { id: 45, name: 'Gulab Jamun', category: 'Dessert', price: 35, rating: 4.7, isVeg: true, isChefSpecial: false, isPopular: true, isSpicy: false, description: 'Soft milk-solid dumplings soaked in warm, fragrant sugar syrup.', image: '/images/Food/kheer2.jpeg' },
    { id: 46, name: 'Payasam', category: 'Dessert', price: 99, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'A traditional South Indian sweet pudding, simmered slow and finished with nuts.', image: '/images/Food/kheer.jpeg' },

    // ---------- BEVERAGES ----------
    { id: 47, name: 'Filter Coffee', category: 'Beverages', price: 69, rating: 4.9, isVeg: true, isChefSpecial: false, isPopular: true, isSpicy: false, description: 'Strong, frothy decoction coffee, brewed the traditional way and served in a classic steel tumbler.', image: '/images/Food/filter_coffee.jpeg' },
    { id: 48, name: 'Masala Chai', category: 'Beverages', price: 55, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'Classic Indian tea, brewed strong with warm aromatic spices.', image: '/images/Food/filter_coffee.jpeg' },
    { id: 49, name: 'Mango Lassi', category: 'Beverages', price: 99, rating: 4.8, isVeg: true, isChefSpecial: false, isPopular: true, isSpicy: false, description: 'A thick, chilled yogurt drink blended with sweet mango.', image: '/images/Food/filter_coffee.jpeg' },
    { id: 50, name: 'Fresh Lime Soda', category: 'Beverages', price: 89, rating: 4.6, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: false, description: 'A refreshing citrus soda, sweet or salted, over ice.', image: '/images/Food/filter_coffee.jpeg' },
    { id: 51, name: 'Rasam Shot', category: 'Beverages', price: 59, rating: 4.5, isVeg: true, isChefSpecial: false, isPopular: false, isSpicy: true, description: 'A tangy, pepper-spiced rasam served as a warming digestive shot.', image: '/images/Food/sambar_vada.jpeg' }
  ];

  // Fallback handler if any local image fails to load
  const handleImgError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.style.display = 'none';
    e.currentTarget.parentElement.style.background = 'linear-gradient(135deg,#3a2416,#1c130c)';
  };

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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">

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

        {/* Most Popular Dishes Spotlight */}
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
                    <img src={item.image} alt={item.name} onError={handleImgError} className="w-full h-full object-cover" />
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
                      onError={handleImgError}
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