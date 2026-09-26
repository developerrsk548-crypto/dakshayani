"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * NOTE ON FONTS
 * This component uses "Fraunces" (headings) and "Work Sans" (body), loaded
 * below via a lightweight @import so it renders standalone. For production,
 * prefer loading both once in app/layout.js with next/font/google and
 * swapping the inline fontFamily values below for the resulting CSS
 * variables — this avoids a render-blocking font request.
 */

// Brand Color Palette (Dakshayani — dark/gold theme)
const BG = "#211009";
const GOLD = "#d6a44e";
const GOLD_DIM = "#8a6a35";
const SPICE = "#c14a35";
const CREAM = "#f4e9d8";
const CREAM_DIM = "#c9b79c";
const LEAF = "#6b8a55";
const RULE = "rgba(214,164,78,0.28)";

const CATEGORIES = [
  {
    id: "combo-special",
    title: "Dakshayani Combo Special",
    items: [
      { name: "Masala Dosa + Vada (1pc) + Idli (1pc)", price: "₹219" },
      { name: "Idli Vada Combo", price: "₹109" },
      { name: "Masala Dosa + Idli (1pc) + Filter Coffee", price: "₹229" },
      {
        name: "Plater",
        desc: "Mini masala dosa + idli (1pc) + mini uttapam + coffee",
        price: "₹249",
      },
      {
        name: "Masala Dosa + Idli (1pc) + Vada (1pc) + Upma + Rava Keshri + Dahi Vada",
        price: "₹349",
      },
    ],
  },
  {
    id: "combo",
    title: "Dakshayani Combo",
    note: "12 PM – 9 PM",
    footnote:
      "Add papad for just ₹19 · Add masala chachh for just ₹49, on any combo above.",
    items: [
      { name: "Malabar Parantha 2pcs + Kadla Curry", price: "₹139" },
      { name: "Malabar Parantha 2pcs + Andhra Chilli Paneer", price: "₹199" },
      { name: "Malabar Parantha 2pcs + Paneer Chettinad", price: "₹149" },
      { name: "Malabar Parantha 2pcs + Andhra Chilli Mushroom", price: "₹189" },
      { name: "Malabar Parantha 2pcs + Butter Idli Masala", price: "₹149" },
      { name: "Malabar Parantha 2pcs + Keerai-Kottu", price: "₹179" },
    ],
  },
  {
    id: "uttar",
    title: "Uttar Ka Swaad",
    note: "Uttari Thali Combo · 12 PM – 9 PM",
    items: [
      { name: "Malabar Parantha 2pcs + Masala Chole", price: "₹129" },
      { name: "Malabar Parantha 2pcs + Rajma Masala", price: "₹129" },
      {
        name: "Dal + Mix Vegetable + Rice + Tawa Roti (4pc) / Malabar Parantha 2pc + Salad + Chhachh",
        price: "₹169",
      },
      {
        name: "Dal + Paneer of the Day + Rice + Tawa Roti (4pc) / Malabar Parantha 2pc + Salad + Chhachh",
        price: "₹199",
      },
      {
        name: "Dal + Paneer of the Day + Mix Vegetable + Tawa Roti (4pc) / Malabar Parantha 2pc + Rice + Chhachh + Papad + Sweet",
        price: "₹269",
      },
    ],
  },
  {
    id: "breads",
    title: "Breads",
    items: [
      { name: "Tawa Roti", price: "₹15" },
      { name: "Tawa Butter Roti", price: "₹20" },
      { name: "Parantha", price: "₹49" },
      { name: "Papad", price: "₹20" },
      { name: "Green Salad", price: "₹59" },
    ],
  },
  {
    id: "rice-combo",
    title: "Rice Combo",
    items: [
      { name: "Chole Rice + Salad + Chutney", price: "₹129" },
      { name: "Rajma Rice + Salad + Chutney", price: "₹129" },
    ],
  },
  {
    id: "biryani",
    title: "Dakshayani Special Biryani",
    items: [
      {
        name: "Kerala Biryani",
        desc: "Fragrant rice cooked with vegetables, coconut and traditional Kerala spices",
        price: "₹199",
      },
      {
        name: "Chettined Biryani",
        desc: "Spicy flavour from freshly ground spices, coconut and samba rice, cooked with ghee, star anise and curry leaves",
        price: "₹189",
      },
      {
        name: "Vegetable Hyderabad Biryani",
        desc: "Dum-cooked basmati rice layered with spiced, yogurt-marinated vegetables, fried onions, mint, coriander and ghee",
        price: "₹199",
      },
    ],
  },
  {
    id: "signature",
    title: "Signature Dish",
    items: [
      {
        name: "Appe",
        desc: "Thin pancake made with fermented rice batter and coconut milk, served hot with tomato and green chutney",
        price: "₹129",
      },
      {
        name: "Upma",
        desc: "Roasted semolina tempered with mustard seeds, lentils, curry leaves and spices",
        price: "₹99",
      },
      {
        name: "Rava Upma",
        desc: "Roasted semolina cooked with tempered spices, curry leaves, onions and water",
        price: "₹129",
      },
      {
        name: "Vegetable Upma",
        desc: "Semolina simmered with tempered spices, cashew nuts and finely chopped carrots, peas, beans and onions",
        price: "₹149",
      },
      {
        name: "Dahi Idli Chaat",
        desc: "Steamed idlis in sweetened whisked yogurt, topped with tangy tamarind chutney, green chutney, spices and sev",
        price: "₹149",
      },
      {
        name: "Dahi Idli",
        desc: "Soft steamed idlis soaked in sweetened, spiced and tempered yogurt",
        price: "₹149",
      },
      {
        name: "Dahi Bade",
        desc: "Soft lentil fritters soaked in creamy seasoned yogurt",
        price: "₹149",
      },
      {
        name: "Chettined Idli",
        desc: "A flavourful spiced variation of the traditional steamed rice cake",
        price: "₹149",
      },
      {
        name: "Idli 65",
        desc: "A spicy, deep-fried South Indian snack made using steamed rice cakes",
        price: "₹139",
      },
    ],
  },
  {
    id: "chuski",
    title: "Traditional Chuski",
    items: [
      {
        name: "Filter Coffee",
        desc: "Traditional South Indian kaapi, strong and aromatic",
        price: "₹69",
      },
      {
        name: "Masala Chai",
        desc: "Classic Indian tea brewed with warm spices",
        price: "₹55",
      },
      { name: "Butter Milk", price: "₹79" },
      {
        name: "Spiced Buttermilk (Cool)",
        desc: "Curd drink tempered with curry leaves and ginger",
        price: "₹79",
      },
      {
        name: "Rasam Shot",
        desc: "Tangy, pepper-spiced rasam served as a digestive shot",
        price: "₹59",
      },
      { name: "Lassi Sweet", price: "₹89" },
      { name: "Lassi Salted", price: "₹89" },
      { name: "Milk Shake", price: "₹99" },
      { name: "Mango Lassi", price: "₹99" },
      { name: "Fresh Lime Soda", price: "₹89" },
      { name: "Water Bottle", price: "MRP", priceClass: "mrp" },
      { name: "Soft Drink", price: "MRP", priceClass: "mrp" },
    ],
  },
  {
    id: "desi",
    title: "Desi Swaad Sabki Pasand",
    items: [
      {
        nameHtml: "Classic Indian Breakfast <em>(Favourite)</em>",
        desc: "Bedmi poori bhaji + masala chhach — fluffy deep-fried pooris with spiced potato bhaji",
        price: "₹149",
      },
      {
        nameHtml: "Dakshayani Special Chhole Bhatoore",
        desc: "Soft, puffed bhature paired with paneer &amp; spices, tangy chickpea curry — a hearty North Indian delight",
        price: "₹169",
      },
    ],
  },
  {
    id: "rice-bowl",
    title: "Dakshayani Special Rice Bowl",
    items: [
      {
        name: "Lemon Rice",
        desc: "Fragrant rice tossed with fresh lemon juice, curry leaves and mild spices",
        price: "₹169",
      },
      {
        name: "Tomato Rice",
        desc: "Fluffy rice cooked with ripe tomatoes, tempered spices and herbs",
        price: "₹169",
      },
      {
        name: "Sambhar Rice",
        desc: "Steamed rice served with hearty, tangy South Indian sambhar",
        price: "₹149",
      },
      {
        name: "Curd Rice",
        desc: "Soft-cooked rice mixed with curd and tempered with aromatic spices",
        price: "₹159",
      },
      {
        name: "Bisi Bele Bath",
        desc: "A traditional, spicy one-pot rice dish from Karnataka",
        price: "₹199",
      },
    ],
  },
  {
    id: "dosa",
    title: "Dosa Parampara",
    items: [
      {
        name: "Karnataka Special Benne Masala Dosa",
        desc: "Signature butter dosa from Karnataka, stuffed with spiced potato masala",
        price: "₹199",
      },
      {
        name: "Karnataka Paneer Dosa",
        desc: "Crispy dosa with a rich, North Indian-inspired paneer filling",
        price: "₹239",
      },
      {
        name: "Karnataka Mysore Masala Dosa",
        desc: "Fermented rice-and-lentil crepe slathered with a spicy red garlic chutney and stuffed with spiced potato",
        price: "₹189",
      },
      {
        name: "Karnataka Butter Masala Dosa",
        desc: "Crisp, buttery crepe from Davanagere, made from a fermented batter of rice, urad dal, poha and fenugreek",
        price: "₹199",
      },
      {
        name: "Jini Dosa",
        desc: "Crisp crepe loaded with butter, vegetables, Schezwan sauce, pav bhaji masala and grated cheese",
        price: "₹249",
      },
    ],
  },
  {
    id: "uttapam",
    title: "Uttapam Range",
    items: [
      { name: "Onion Uttapam", price: "₹159" },
      { name: "Tomato Uttapam", price: "₹169" },
      { name: "Mix Vegetable Uttapam", price: "₹199" },
      { name: "Paneer Uttapam", price: "₹219" },
      { name: "Onion Tomato Uttapam", price: "₹179" },
    ],
  },
  {
    id: "idli-vada",
    title: "Idli & Vada",
    items: [
      {
        name: "Steamed Idli (2pcs)",
        desc: "Soft, fluffy steamed rice cakes served with coconut chutney and sambhar",
        price: "₹99",
      },
      {
        name: "Medu Vada (2pcs)",
        desc: "Crispy lentil fritters, golden and crunchy, served with chutney and sambhar",
        price: "₹119",
      },
      {
        name: "Podi Thatti Idli",
        desc: "Karnataka-style plate-sized steamed idli topped with spiced lentil podi and melted ghee",
        price: "₹149",
      },
      {
        name: "Rava Idli",
        desc: "Soft, fluffy South Indian idlis made without grinding raw rice",
        price: "₹129",
      },
      {
        name: "Vegetable Idli",
        desc: "Finely chopped vegetables mixed into the batter, high in fibre and vitamins",
        price: "₹159",
      },
      {
        name: "Fried Idli Masala Chaat",
        desc: "Crispy fried idlis sautéed with onions, curry leaves, spices, drizzled with tangy chutneys",
        price: "₹159",
      },
    ],
  },
  {
    id: "veg-curry",
    title: "Veg Curry",
    items: [
      { name: "Yellow Dal Tadka", price: "₹149" },
      { name: "Dal Makhani", price: "₹199" },
      { name: "Paneer Butter Masala", price: "₹249" },
      { name: "Kadai Paneer", price: "₹249" },
      { name: "Matar Paneer", price: "₹219" },
      { name: "Paneer Lababdar", price: "₹249" },
      { name: "Sahi Paneer", price: "₹229" },
      { name: "Chana Masala", price: "₹149" },
      { name: "Rajma Masala", price: "₹149" },
      { name: "Mix Vegetable", price: "₹189" },
      { name: "Dum Aloo", price: "₹149" },
      { name: "Malai Kofta", price: "₹199" },
    ],
  },
  {
    id: "snacks",
    title: "Evening Snacks",
    note: "4 PM – 9 PM",
    items: [
      { name: "Paneer 65", price: "₹199" },
      { name: "Gobhi 65", price: "₹139" },
      { name: "Idli 65", price: "₹149" },
      { name: "Mushroom 65", price: "₹169" },
      { name: "French Fries", price: "₹149" },
      { name: "Mysore Pakoda (6pcs)", price: "₹139" },
      { name: "Keerai Vada (6pcs)", price: "₹139" },
      { name: "Honey Chilli Potato", price: "₹159" },
      { name: "Chilli Paneer", price: "₹199" },
      { name: "Fried Rice", price: "₹149" },
      { name: "Veg Manchurian", price: "₹149" },
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    items: [
      { name: "Dakshayani Special Kheer", price: "₹79" },
      { name: "Gulab Jamun", price: "₹35" },
      { name: "Rava Keshri", price: "₹79" },
      { name: "Payasam", price: "₹99" },
    ],
  },
];

const OurMenu1 = () => {
  const sectionRefs = useRef({});
  const linkRefs = useRef({});
  const navInnerRef = useRef(null);
  const tickingRef = useRef(false);
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);

  // Scroll function fixed & moved outside useEffect
  const scroll = (direction) => {
    if (navInnerRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250;
      navInnerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const computeActiveId = () => {
      let current = CATEGORIES[0].id;
      CATEGORIES.forEach((cat) => {
        const el = sectionRefs.current[cat.id];
        if (el && el.getBoundingClientRect().top - 90 <= 0) current = cat.id;
      });
      return current;
    };

    const updateActive = () => {
      tickingRef.current = false;
      const id = computeActiveId();

      setActiveId((prev) => (prev === id ? prev : id));

      // Gently nudge the category pill bar horizontally
      const link = linkRefs.current[id];
      const navInner = navInnerRef.current;
      if (link && navInner) {
        const linkLeft = link.offsetLeft;
        const linkRight = linkLeft + link.offsetWidth;
        const viewLeft = navInner.scrollLeft;
        const viewRight = viewLeft + navInner.clientWidth;
        if (linkLeft < viewLeft || linkRight > viewRight) {
          navInner.scrollTo({
            left: Math.max(0, linkLeft - 24),
            behavior: "auto",
          });
        }
      }
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(updateActive);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActive();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: BG, color: CREAM }}
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(214,164,78,0.08), transparent 40%), radial-gradient(circle at 88% 92%, rgba(193,74,53,0.10), transparent 45%)",
        }}
      />

      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto w-full max-w-7xl border-b px-4 py-8 text-center sm:px-6 sm:pt-16 sm:pb-10"
        style={{ borderColor: RULE }}
      >
        <div className="mb-4 inline-flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: LEAF }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-widest sm:text-sm"
            style={{ color: LEAF }}
          >
            South &amp; North Indian · All Day Dining
          </span>
        </div>

        <h1
          className="text-4xl font-semibold leading-tight sm:text-6xl md:text-7xl"
          style={{ color: GOLD }}
        >
          Dakshayani
        </h1>

        <p
          className="mx-auto mt-3 max-w-md text-sm sm:mt-4 sm:text-base"
          style={{ color: CREAM_DIM }}
        >
          Dosas from the coast, paranthas from the north, and everything in
          between.
        </p>
      </motion.header>

      {/* Sticky Category Nav */}
      <nav
        aria-label="Menu categories"
        className="sticky top-0 z-20 w-full border-b backdrop-blur-sm"
        style={{ borderColor: RULE, backgroundColor: BG }}
      >
        <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            className="z-10 p-2 text-cream hover:opacity-75 focus:outline-none shrink-0"
            style={{ color: GOLD }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Categories Scrollable Container */}
          <div
            ref={navInnerRef}
            className="flex flex-1 items-center gap-2 overflow-x-auto py-3 scrollbar-none scroll-smooth"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeId === cat.id;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  ref={(el) => {
                    if (linkRefs.current) linkRefs.current[cat.id] = el;
                  }}
                  className="shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-xs font-medium transition-colors duration-150 sm:text-sm"
                  style={{
                    borderColor: isActive ? GOLD : RULE,
                    backgroundColor: isActive ? GOLD : "transparent",
                    color: isActive ? BG : CREAM_DIM,
                  }}
                >
                  {cat.title}
                </a>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            className="z-10 p-2 text-cream hover:opacity-75 focus:outline-none shrink-0"
            style={{ color: GOLD }}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Menu Sections */}
      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-10">
        {CATEGORIES.map((cat, catIdx) => (
          <motion.section
            key={cat.id}
            id={cat.id}
            ref={(el) => {
              sectionRefs.current[cat.id] = el;
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: Math.min(catIdx * 0.03, 0.2) }}
            className="scroll-mt-[72px] pt-10 first:pt-2"
          >
            <div className="mb-1 flex items-baseline gap-3">
              <h2 className="text-2xl font-semibold" style={{ color: GOLD }}>
                {cat.title}
              </h2>
              {cat.note && (
                <span className="text-xs font-medium" style={{ color: LEAF }}>
                  {cat.note}
                </span>
              )}
            </div>
            <div className="my-3 h-px" style={{ backgroundColor: RULE }} />

            <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {cat.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-baseline justify-between gap-4 border-b border-dashed py-3"
                  style={{ borderColor: RULE }}
                >
                  <div className="min-w-0">
                    {item.nameHtml ? (
                      <span
                        className="text-base font-medium"
                        style={{ color: CREAM }}
                        dangerouslySetInnerHTML={{ __html: item.nameHtml }}
                      />
                    ) : (
                      <span
                        className="text-base font-medium"
                        style={{ color: CREAM }}
                      >
                        {item.name}
                      </span>
                    )}
                    {item.desc && (
                      <span
                        className="mt-1 block max-w-[44ch] text-sm italic leading-snug"
                        style={{ color: CREAM_DIM }}
                      >
                        {item.desc}
                      </span>
                    )}
                  </div>
                  <span
                    className="whitespace-nowrap text-sm tabular-nums"
                    style={{
                      color: item.priceClass === "mrp" ? CREAM_DIM : GOLD,
                      fontWeight: item.priceClass === "mrp" ? 500 : 600,
                    }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            {cat.footnote && (
              <p className="mt-4 text-sm italic" style={{ color: SPICE }}>
                {cat.footnote}
              </p>
            )}
          </motion.section>
        ))}
      </main>

      <footer
        className="relative z-10 border-t px-4 py-10 text-center text-xs"
        style={{ borderColor: RULE, color: GOLD_DIM }}
      >
        Prices in ₹ · Menu transcribed from Dakshayani&apos;s in-house menu book
      </footer>

      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default OurMenu1;
