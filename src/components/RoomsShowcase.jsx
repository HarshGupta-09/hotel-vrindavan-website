import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  BedDouble,
  Snowflake,
  Bath,
  Wifi,
  Tv,
  ConciergeBell,
  Droplets,
  Phone,
} from "lucide-react";

// Apni khud ki room photos yahan replace kar lena
const rooms = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80",
    alt: "Double-bed AC room at Hotel Vrindavan, room 1",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    alt: "Double-bed AC room at Hotel Vrindavan, room 2",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    alt: "Double-bed AC room at Hotel Vrindavan, room 3",
  },
];

const amenities = [
  { label: "Double Bed", icon: BedDouble },
  { label: "Air Conditioning", icon: Snowflake },
  { label: "Attached Bathroom", icon: Bath },
  { label: "Wi-Fi", icon: Wifi },
  { label: "Television", icon: Tv },
  { label: "Room Service", icon: ConciergeBell },
  { label: "Hot Water", icon: Droplets },
];

function RoomsShowcase() {
  return (
    <section className="bg-[#f7f4ec] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[640px]">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c5a46d]" />
              <p className="text-[9px] font-semibold tracking-[0.25em] text-[#a78345] sm:text-[10px]">
                HOTEL &amp; ACCOMMODATION
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-[clamp(32px,4vw,52px)] leading-[1.14] tracking-[-0.025em] text-[#173c31]">
              Rooms Made for <span className="italic text-[#c5a46d]">Restful</span>{" "}
              Nights
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[560px] text-[13px] leading-[1.85] text-[#686a63] sm:text-[14px]">
              13 double-bed air-conditioned rooms, all on the ground floor — steps
              away from reception, parking and the restaurant.
            </p>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="inline-flex min-h-[46px] w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#173c31] px-7 text-[10px] font-semibold tracking-[0.12em] text-white! transition-colors duration-300 hover:bg-[#c5a46d] hover:text-[#173c31]! sm:w-auto"
          >
            <Phone size={14} />
            CALL FOR ROOM RATES
          </Link>
        </div>

        {/* ================= ROOM CARDS ================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group overflow-hidden border border-[#e4dccb] bg-[#fbfaf6]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#142e27]">
                <img
                  src={room.image}
                  alt={room.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Room tag */}
                <span className="absolute left-4 top-4 bg-[#1f4a3d]/90 px-3 py-1.5 font-heading text-[10px] italic tracking-wide text-white/90">
                  Room 0{room.id}
                </span>
              </div>

              {/* Content */}
              <div className="px-6 pb-7 pt-6 sm:px-7">
                <h3 className="font-heading text-[22px] leading-tight text-[#173c31] sm:text-[24px]">
                  Double-Bed AC Room
                </h3>

                <p className="mt-2 text-[9px] tracking-[0.18em] text-[#9a9c93]">
                  ALL 13 ROOMS · GROUND FLOOR
                </p>

                <div className="my-5 h-px w-full bg-[#e4dccb]" />

                {/* Amenities */}
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3.5">
                  {amenities.map(({ label, icon: Icon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2.5 text-[11px] text-[#5d6a62]"
                    >
                      <Icon
                        size={13}
                        strokeWidth={1.6}
                        className="shrink-0 text-[#c5a46d]"
                      />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Note */}
        <p className="mt-7 text-[9px] tracking-[0.14em] text-[#9a9c93] sm:text-[10px]">
          ROOM RATES ARE NOT YET PUBLISHED — PLEASE CALL US DIRECTLY FOR CURRENT
          AVAILABILITY AND PRICING.
        </p>
      </div>
    </section>
  );
}

export default RoomsShowcase;