import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  UtensilsCrossed,
  ShoppingBag,
  ConciergeBell,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

// Apni khud ki food photos yahan replace kar lena
const mainImage =
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1400&q=80";

const accentImage =
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80";

const features = [
  { label: "Dine-In Experience", icon: UtensilsCrossed },
  { label: "Takeaway", icon: ShoppingBag },
  { label: "Room Service", icon: ConciergeBell },
  { label: "Multiple Food Categories", icon: LayoutGrid },
];

function RestaurantShowcase() {
  return (
    <section className="overflow-hidden bg-[#252b27] py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-[1.15fr_1fr] lg:gap-24 lg:px-16">
        {/* ================= IMAGES ================= */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-[600px] pb-10 lg:mx-0"
        >
          {/* Main image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={mainImage}
              alt="Vegetarian thali served at Hotel Vrindavan restaurant"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Overlapping accent image */}
          <div className="absolute -bottom-0 right-0 aspect-[3/3.4] w-[38%] translate-x-[8%] overflow-hidden border-4 border-[#252b27] sm:translate-x-[10%]">
            <img
              src={accentImage}
              alt="Rich North Indian curry in a copper bowl"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* ================= TEXT ================= */}
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
            <p className="text-[9px] font-semibold tracking-[0.25em] text-[#c5a46d] sm:text-[10px]">
              PURE VEGETARIAN RESTAURANT
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[clamp(32px,3.6vw,50px)] leading-[1.14] tracking-[-0.025em]">
            Food That Feels Like a{" "}
            <span className="italic text-[#c5a46d]">Celebration</span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-[520px] text-[13px] leading-[1.85] text-white/70 sm:text-[14px]">
            An exclusively vegetarian kitchen serving a wide variety of dishes —
            from hearty thalis and North Indian classics to snacks, beverages and
            desserts. Dine in, take away, or enjoy it in your room.
          </p>

          {/* Feature boxes */}
          <div className="mt-8 grid max-w-[540px] grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex min-h-[46px] items-center gap-3 border border-white/15 bg-white/[0.04] px-4 py-3"
              >
                <Icon
                  size={14}
                  strokeWidth={1.6}
                  className="shrink-0 text-[#c5a46d]"
                />
                <span className="text-[11px] text-white/80 sm:text-[12px]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/restaurant"
            className="group mt-9 inline-flex min-h-[44px] items-center gap-3 rounded-full bg-[#c5a46d] px-7 text-[10px] font-semibold tracking-[0.12em] text-[#173c31]! transition-colors duration-300 hover:bg-[#d8bd8a]"
          >
            EXPLORE OUR MENU
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default RestaurantShowcase;