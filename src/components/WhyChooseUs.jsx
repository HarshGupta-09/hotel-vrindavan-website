import { motion } from "motion/react";
import {
  Award,
  BedDouble,
  UtensilsCrossed,
  Flower2,
  Sparkles,
  MapPin,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    title: "10+ Years of Experience",
    text: "A decade of warm, dependable hospitality in Jabalpur.",
    icon: Award,
  },
  {
    title: "Comfortable AC Accommodation",
    text: "13 well-kept double-bed rooms, all on the ground floor.",
    icon: BedDouble,
  },
  {
    title: "Pure Vegetarian Restaurant",
    text: "A fully vegetarian kitchen serving a wide variety of dishes.",
    icon: UtensilsCrossed,
  },
  {
    title: "Spacious Event Venues",
    text: "A grand marriage garden and an elegant banquet hall.",
    icon: Flower2,
  },
  {
    title: "Dedicated Event Facilities",
    text: "Decoration, lighting, catering and DJ arrangements.",
    icon: Sparkles,
  },
  {
    title: "Convenient Location",
    text: "Easy to reach, in the heart of Jabalpur.",
    icon: MapPin,
  },
  {
    title: "Parking & Security",
    text: "On-site parking with CCTV surveillance and security.",
    icon: ShieldCheck,
  },
  {
    title: "Professional Hospitality",
    text: "A caring team that treats every guest like family.",
    icon: HeartHandshake,
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#173c31] py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c5a46d]" />
              <p className="text-[9px] font-semibold tracking-[0.25em] text-[#c5a46d] sm:text-[10px]">
                WHY CHOOSE US
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-[clamp(32px,3.6vw,48px)] leading-[1.14] tracking-[-0.025em]">
              The Vrindavan{" "}
              <span className="italic text-[#c5a46d]">Difference</span>
            </h2>

            <p className="mt-4 max-w-[480px] text-[13px] leading-[1.8] text-white/70 sm:text-[14px]">
              Eight reasons guests keep returning to us, year after year.
            </p>
          </div>

          {/* Stat */}
          <div className="sm:text-right">
            <p className="font-heading text-[clamp(48px,5vw,66px)] leading-none text-[#c5a46d]">
              10+
            </p>
            <p className="mt-3 text-[9px] tracking-[0.25em] text-white/55 sm:text-[10px]">
              YEARS OF EXPERIENCE
            </p>
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="mt-12 grid grid-cols-1 gap-px border border-[#c5a46d]/30 bg-[#c5a46d]/30 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ title, text, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
              className="bg-[#173c31] px-6 pb-8 pt-6 sm:px-7"
            >
              {/* Icon box */}
              <div className="flex h-[38px] w-[38px] items-center justify-center border border-[#c5a46d]/50">
                <Icon size={15} strokeWidth={1.6} className="text-[#d5b779]" />
              </div>

              <h3 className="mt-9 font-heading text-[17px] leading-snug">
                {title}
              </h3>

              <p className="mt-3 max-w-[240px] text-[11px] leading-[1.75] text-white/55 sm:text-[12px]">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;