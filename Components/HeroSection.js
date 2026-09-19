"use client";

import { useEffect, useState } from "react";
import { motion, animate, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

const IMG_THALI =
  "https://images.livemint.com/img/2021/07/05/original/crispy-dosa-temple-recipe_1625469413436.jpg";
const IMG_DOSA =
  "https://naturallynidhi.com/wp-content/uploads/2024/04/Vrat-Ka-Dosa-Samak-Rice-Dosa-Cover.jpg";

const STATIC_LINE = "Dakshayani brings";
const HEADLINE = "the coast to your table";

// types the full headline, pauses, deletes it, pauses, and repeats forever
function useTypewriterLoop(text, start, reduceMotion) {
  const [output, setOutput] = useState(reduceMotion ? text : "");

  useEffect(() => {
    if (!start || reduceMotion) return;
    let cancelled = false;
    let timeoutId;
    const wait = (ms) =>
      new Promise((resolve) => {
        timeoutId = setTimeout(resolve, ms);
      });

    const loop = async () => {
      while (!cancelled) {
        for (let i = 1; i <= text.length && !cancelled; i += 1) {
          setOutput(text.slice(0, i));
          await wait(75);
        }
        await wait(2200);
        for (let i = text.length - 1; i >= 0 && !cancelled; i -= 1) {
          setOutput(text.slice(0, i));
          await wait(45);
        }
        await wait(600);
      }
    };

    loop();
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [start, text, reduceMotion]);

  return output;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};
const slideFromRight = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};
const slideFromBottom = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};
const popIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const HeroSection = () => {
  const [start, setStart] = useState(false);
  const [thaliOk, setThaliOk] = useState(true);
  const [dosaOk, setDosaOk] = useState(true);
  const [years, setYears] = useState(0);
  const [dishes, setDishes] = useState(0);
  const [rating, setRating] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setStart(true), 120);
    return () => clearTimeout(t);
  }, []);

  const typedHeadline = useTypewriterLoop(HEADLINE, start, reduceMotion);

  useEffect(() => {
    if (!start) return;
    const ease = [0.16, 1, 0.3, 1];
    const c1 = animate(0, 26, {
      duration: 2,
      ease,
      onUpdate: (v) => setYears(Math.round(v)),
    });
    const c2 = animate(0, 40, {
      duration: 2,
      ease,
      onUpdate: (v) => setDishes(Math.round(v)),
    });
    const c3 = animate(0, 4.9, {
      duration: 2,
      ease,
      onUpdate: (v) => setRating(v),
    });
    return () => {
      c1.stop();
      c2.stop();
      c3.stop();
    };
  }, [start]);

  return (
    <section className="relative w-full min-h-screen bg-[#f8f8f8] overflow-hidden pt-6 pb-8">
      <style>{`
        @keyframes blinkCaret {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .caret-blink { animation: blinkCaret 0.9s step-end infinite; }
        @media (prefers-reduced-motion: reduce) {
          .caret-blink { animation: none; opacity: 0; }
        }
      `}</style>

      {/* ambient warmth */}
      <div className="pointer-events-none absolute -top-32 -right-24 w-[28rem] h-[28rem] bg-[#C88A2E]/[0.08] rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-[#7A2E2E]/[0.06] rounded-full blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate={start ? "show" : "hidden"}
        className="font-body relative z-10 mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-0 md:min-h-screen grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        {/* Left: copy */}
        <motion.div variants={fadeUp}>
          <p className="text-[#B8752E] text-sm font-medium mb-4">
            Since 1998 · Handmade South Indian fare
          </p>

          <div className="relative min-h-[2.3em] md:min-h-[2.15em] mb-6">
            {/* Invisible sizer: reserves the final, full-text height so nothing shifts while typing */}
            <h1
              aria-hidden="true"
              className="invisible font-display font-medium text-[clamp(1.9rem,5vw,4.5rem)] leading-[1.05]"
            >
              <span className="block whitespace-nowrap">{STATIC_LINE}</span>
              <span className="block">{HEADLINE}</span>
            </h1>

            {/* Visible, animated headline sits on top and never affects layout */}
            <h1 className="absolute inset-0 font-display font-medium text-[clamp(1.9rem,5vw,4.5rem)] text-[#241A14] leading-[1.05]">
              <span className="block whitespace-nowrap">{STATIC_LINE}</span>
              <span className="block">
                {typedHeadline}
                <span className="inline-block w-[3px] h-[0.85em] bg-[#B23A2E] ml-1 align-middle caret-blink" />
              </span>
            </h1>
          </div>

          <p className="text-[#5C5148] text-lg leading-relaxed max-w-md mb-9">
            Slow-ground chutneys, wood-fired dosas and a filter coffee finish —
            cooked the way our grandmothers taught us, plated for tonight.
          </p>

          <div className="flex flex-row items-center gap-3 sm:gap-4 mb-12">
            <Link href="/contact" className="flex-1 sm:flex-initial">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="w-full group relative overflow-hidden bg-[#B23A2E] text-[#f8f8f8] px-4 sm:px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-center hover:bg-[#8F2A20] hover:shadow-lg hover:shadow-[#B23A2E]/30 transition-colors duration-300"
              >
                <span className="relative z-10 whitespace-nowrap">
                  Reserve a table
                </span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </motion.button>
            </Link>

            <Link href="/menu" className="flex-1 sm:flex-initial">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="w-full border border-[#D8D0C4] cursor-pointer text-[#241A14] px-4 sm:px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-center whitespace-nowrap hover:border-[#B23A2E] hover:text-[#B23A2E] transition-colors duration-300"
              >
                View the menu
              </motion.button>
            </Link>
          </div>

          <div className="flex gap-10 pt-8 border-t border-[#E4DED5]">
            <div>
              <div className="font-display text-3xl text-[#241A14] tabular-nums">
                {years}
              </div>
              <div className="text-sm text-[#8A7E70]">years in Chennai</div>
            </div>
            <div>
              <div className="font-display text-3xl text-[#241A14] tabular-nums">
                {dishes}+
              </div>
              <div className="text-sm text-[#8A7E70]">dishes on the menu</div>
            </div>
            <div>
              <div className="font-display text-3xl text-[#241A14] tabular-nums">
                {rating.toFixed(1)}
              </div>
              <div className="text-sm text-[#8A7E70]">from 2,300 diners</div>
            </div>
          </div>
        </motion.div>

        {/* Right: image collage */}
        <div className="relative h-[380px] sm:h-[460px] md:h-[560px]">
          <motion.div
            variants={slideFromRight}
            className="group absolute top-0 right-0 w-[78%] h-[72%] rounded-2xl overflow-hidden shadow-xl"
          >
            {thaliOk ? (
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                src={IMG_THALI}
                alt="Signature South Indian thali at Dakshayani"
                className="w-full h-full object-cover"
                onError={() => setThaliOk(false)}
              />
            ) : (
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-gradient-to-br from-[#C88A2E] to-[#7A2E2E] flex items-center justify-center"
              >
                <span className="font-display text-[#f8f8f8] text-lg px-6 text-center">
                  Signature Thali
                </span>
              </motion.div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <span className="text-white text-sm font-medium">
                Signature Thali
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={slideFromBottom}
            className="group absolute bottom-0 left-0 w-[58%] h-[50%] rounded-2xl overflow-hidden shadow-xl border-4 border-[#f8f8f8]"
          >
            {dosaOk ? (
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                src={IMG_DOSA}
                alt="Dosa crisping on the griddle"
                className="w-full h-full object-cover"
                onError={() => setDosaOk(false)}
              />
            ) : (
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-gradient-to-br from-[#241A14] to-[#5C5148] flex items-center justify-center"
              >
                <span className="font-display text-[#f8f8f8] text-base px-4 text-center">
                  Fresh Dosa
                </span>
              </motion.div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <span className="text-white text-xs font-medium">Fresh Dosa</span>
            </div>
          </motion.div>

          <motion.div
            variants={popIn}
            className="absolute top-6 left-0 md:left-4"
          >
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
              }
              className="bg-white rounded-xl px-4 py-3 shadow-lg border border-[#E4DED5] flex items-center gap-2"
            >
              <Star className="w-5 h-5 fill-[#C88A2E] text-[#C88A2E]" />
              <div>
                <div className="text-[#241A14] font-semibold text-sm leading-none">
                  4.9 rating
                </div>
                <div className="text-[#8A7E70] text-xs mt-0.5">
                  Open till 11pm
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
