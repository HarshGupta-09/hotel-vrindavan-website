
import {
  Tent,
  Utensils,
  Flower2,
  Lightbulb,
  Music2,
  ParkingSquare,
} from "lucide-react";
import { motion } from "motion/react";

const facilities = [
  {
    title: "Indoor & Outdoor Arrangements",
    icon: Tent,
  },
  {
    title: "Catering",
    icon: Utensils,
  },
  {
    title: "Decoration",
    icon: Flower2,
  },
  {
    title: "Lighting",
    icon: Lightbulb,
  },
  {
    title: "DJ",
    icon: Music2,
  },
  {
    title: "Parking",
    icon: ParkingSquare,
  },
];

function MarriageGardenVenue() {
  return (
    <section className="bg-[#173c31] px-5 py-20 text-[#f5f1e9] sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1210px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

        {/* Guest Capacity */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4">
            <span className="font-heading text-5xl font-normal leading-none text-[#c5a46d] sm:text-6xl lg:text-7xl">
              ≈
            </span>

            <span className="font-heading text-6xl font-normal leading-none tracking-tight text-[#c5a46d] sm:text-7xl lg:text-[88px]">
              1,000
            </span>
          </div>

          <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.28em] text-white/60 sm:text-[11px]">
            Guests Accommodated
          </p>
        </motion.div>

        {/* Venue Information */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#c5a46d]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#c5a46d]">
              The Venue
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl font-normal leading-[1.2] text-[#f5f1e9] sm:text-4xl lg:text-[40px]">
            A Garden Built for{" "}
            <span className="italic text-[#c5a46d]">
              Grand
            </span>{" "}
            Weddings
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[600px] text-[13px] leading-[1.8] text-white/65 sm:text-sm">
            Our marriage garden welcomes approximately 1,000 guests
            with indoor and outdoor arrangements, full catering and
            decoration, lighting, DJ and parking — everything your
            celebration needs, managed by one team.
          </p>

          {/* Facilities Grid */}
          <div className="mt-7 grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:grid-cols-3">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <motion.div
                  key={facility.title}
                  className="group flex min-h-[53px] items-center gap-3 border border-white/[0.12] bg-white/[0.035] px-3 py-3 transition-all duration-300 hover:border-[#c5a46d]/50 hover:bg-white/[0.08] sm:px-3.5"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <Icon
                    size={14}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#c5a46d] transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="text-[11px] leading-[1.4] text-white/75 sm:text-xs">
                    {facility.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default MarriageGardenVenue;
