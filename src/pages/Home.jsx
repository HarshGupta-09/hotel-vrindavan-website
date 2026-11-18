
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Phone } from "lucide-react";
import HighlightsMarquee from "../components/HighlightsMarquee";
import RoomsShowcase from "../components/RoomsShowcase";
import RestaurantShowcase from "../components/RestaurantShowcase";
const heroStats = [
  "13 DOUBLE-BED AC ROOMS",
  "PURE VEGETARIAN DINING",
  "MARRIAGE GARDEN · 1,000 GUESTS",
  "BANQUET HALL · 500+ GUESTS",
];

const heroImage =
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2400&q=85";

const welcomeImage =
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85";

const heroTextVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Home() {
  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex min-h-[780px] h-[100svh] w-full items-end overflow-hidden bg-[#142e27] text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Hotel Vrindavan hospitality and outdoor seating"
            className="h-full w-full object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b211b]/85 via-[#0b211b]/45 to-[#0b211b]/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b211b]/80 via-transparent to-[#0b211b]/25" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-10 pt-36 sm:px-10 sm:pb-14 lg:px-16 lg:pb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.16,
                },
              },
            }}
            className="max-w-[850px]"
          >
            {/* Eyebrow */}
            <motion.div
              variants={heroTextVariants}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[#c5a46d]" />

              <span className="text-[9px] font-semibold tracking-[0.28em] text-[#c5a46d] sm:text-[10px]">
                HOTEL VRINDAVAN · JABALPUR, MADHYA PRADESH
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={heroTextVariants}
              className="max-w-[850px] font-heading text-[clamp(42px,6.3vw,86px)] leading-[1.06] tracking-[-0.025em]"
            >
              Where Comfort Meets
              <br className="hidden sm:block" />{" "}
              <span className="italic text-[#c5a46d]">Exceptional</span>{" "}
              Hospitality
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={heroTextVariants}
              className="mt-6 max-w-[560px] text-[13px] leading-[1.85] text-white/75 sm:text-[15px]"
            >
              Discover a welcoming destination for comfortable stays, delightful
              vegetarian dining and unforgettable celebrations at Hotel Vrindavan,
              Jabalpur.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={heroTextVariants}
              className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Link
                to="/rooms"
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-3 rounded-full bg-[#c5a46d] px-7 text-[10px] font-semibold tracking-[0.12em] text-[#173c31] transition-colors duration-300 hover:bg-[#d8bd8a] sm:w-auto"
              >
                EXPLORE OUR EXPERIENCES
                <ArrowDown
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-3 rounded-full border border-white/35 px-7 text-[10px] font-semibold tracking-[0.12em] text-white transition-all duration-300 hover:border-[#c5a46d] hover:text-[#c5a46d] sm:w-auto"
              >
                <Phone size={14} />
                CALL US
              </Link>
            </motion.div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative mt-14 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-white/20 pt-6 sm:mt-16 sm:grid-cols-4 sm:gap-5 sm:pt-7"
          >
            {heroStats.map((stat, index) => (
              <div
                key={stat}
                className={`${
                  index >= 2 ? "sm:border-l sm:border-white/15 sm:pl-5" : ""
                }`}
              >
                <p className="text-[8px] font-medium leading-relaxed tracking-[0.16em] text-white/65 sm:text-[9px] md:text-[10px]">
                  {stat}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WELCOME SECTION ================= */}
      <section className="overflow-hidden bg-[#f7f4ec] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-24 lg:px-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[580px] lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={welcomeImage}
                alt="Hotel Vrindavan reception and welcoming interiors"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Decorative border */}
            <div className="pointer-events-none absolute -bottom-3 -right-3 -z-0 h-full w-full border border-[#c5a46d]/55 sm:-bottom-4 sm:-right-4" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c5a46d]" />
              <p className="text-[9px] font-semibold tracking-[0.25em] text-[#a78345] sm:text-[10px]">
                WELCOME TO HOTEL VRINDAVAN
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-[clamp(35px,4vw,55px)] leading-[1.14] tracking-[-0.025em] text-[#173c31]">
              Hospitality That Feels Like
              <br />
              <span className="italic text-[#c5a46d]">Home</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[570px] text-[13px] leading-[1.9] text-[#686a63] sm:text-[14px]">
              For more than ten years, Hotel Vrindavan has been a trusted name in
              Jabalpur, a place where guests arrive as visitors and leave as
                friends. Under one roof, we bring together four things we do with
                love: comfortable stays, pure vegetarian food, grand weddings and
                memorable celebrations.
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              {[
                "Comfortable accommodation for a relaxing stay",
                "Pure vegetarian dining prepared with care",
                "Beautiful spaces for weddings and celebrations",
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-1 font-heading text-[11px] italic text-[#c5a46d]">
                    0{index + 1}
                  </span>
                  <p className="text-[12px] leading-relaxed text-[#4f5b53] sm:text-[13px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-3 border-b border-[#c5a46d] pb-2 text-[10px] font-semibold tracking-[0.14em] text-[#173c31]"
            >
              DISCOVER OUR STORY
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
      <HighlightsMarquee/>
      <RoomsShowcase/>
      <RestaurantShowcase/>

      
    </main>

  );
}

export default Home;
