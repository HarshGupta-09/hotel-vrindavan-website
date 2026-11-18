import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

// Apni khud ki photos yahan replace kar lena
const offerings = [
  {
    title: "Hotel & Accommodation",
    text: "Comfortable air-conditioned rooms designed for a relaxing stay.",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    alt: "Air-conditioned double-bed room at Hotel Vrindavan",
    path: "/rooms",
  },
  {
    title: "Pure Vegetarian Restaurant",
    text: "A welcoming dining experience featuring a variety of vegetarian dishes.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80",
    alt: "Vegetarian thali served at the restaurant",
    path: "/restaurant",
  },
  {
    title: "Marriage Garden",
    text: "A spacious venue for weddings and memorable celebrations, accommodating approximately 1,000 guests.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    alt: "Wedding mandap at the marriage garden",
    path: "/marriage-garden",
  },
  {
    title: "Banquet & Celebration Hall",
    text: "An elegant indoor venue for birthdays, anniversaries, engagements, corporate events and family functions, with a capacity of 500+ guests.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80",
    alt: "Banquet hall set for a celebration",
    path: "/banquet-hall",
  },
];

function OfferingsGrid() {
  return (
    <section className="overflow-hidden bg-[#f7f4ec] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
        {/* ================= HEADER ================= */}
        <div className="max-w-[560px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#c5a46d]" />
            <p className="text-[9px] font-semibold tracking-[0.25em] text-[#a78345] sm:text-[10px]">
              UNDER ONE ROOF
            </p>
          </div>

          <h2 className="font-heading text-[clamp(32px,3.6vw,46px)] leading-[1.14] tracking-[-0.025em] text-[#173c31]">
            Everything We <span className="italic text-[#c5a46d]">Offer</span>
          </h2>

          <p className="mt-4 text-[13px] leading-[1.8] text-[#686a63] sm:text-[14px]">
            Four services, one brand, one standard of care.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:gap-x-10">
          {offerings.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (index % 2) * 0.12 }}
            >
              <Link to={item.path} className="group block">
                {/* Image */}
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#142e27]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Number badge */}
                    <span className="absolute left-3 top-3 bg-[#1f4a3d] px-2 py-1 font-heading text-[10px] italic leading-none text-white/90 sm:left-4 sm:top-4">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Offset border */}
                  <div className="pointer-events-none absolute -bottom-2 -right-2 h-full w-full border border-[#c5a46d]/45 sm:-bottom-2.5 sm:-right-2.5" />
                </div>

                {/* Text */}
                <h3 className="mt-6 font-heading text-[21px] leading-tight text-[#173c31] transition-colors duration-300 group-hover:text-[#c5a46d] sm:text-[22px]">
                  {item.title}
                </h3>

                <p className="mt-2.5 max-w-[360px] text-[12px] leading-[1.8] text-[#686a63] sm:text-[13px]">
                  {item.text}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-[9px] font-semibold tracking-[0.16em] text-[#a78345] sm:text-[10px]">
                  EXPLORE MORE
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferingsGrid;