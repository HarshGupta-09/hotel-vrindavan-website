import { motion } from "motion/react";
import { HeartHandshake, Leaf, BedDouble, Sparkles } from "lucide-react";

const values = [
  {
    title: "Warmth First",
    text: "Every guest is welcomed personally and cared for like family — the way hospitality was meant to be.",
    icon: HeartHandshake,
  },
  {
    title: "Pure & Honest",
    text: "A completely vegetarian kitchen and honest, transparent service across everything we do.",
    icon: Leaf,
  },
  {
    title: "Comfort Always",
    text: "Clean, comfortable, air-conditioned rooms that make every stay restful.",
    icon: BedDouble,
  },
  {
    title: "Memorable Celebrations",
    text: "Venues and arrangements crafted with care, so your milestones feel extraordinary.",
    icon: Sparkles,
  },
];

function Philosophy() {
  return (
    <section className="bg-[#142e27] py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-16">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-[680px] text-center">
          <p className="text-[9px] font-semibold tracking-[0.28em] text-[#c5a46d] sm:text-[10px]">
            OUR PHILOSOPHY
          </p>

          <h2 className="mt-6 font-heading text-[clamp(28px,3.6vw,46px)] italic leading-[1.2] tracking-[-0.02em]">
            “Atithi Devo Bhava — the guest is God.”
          </h2>

          <p className="mx-auto mt-6 max-w-[470px] text-[13px] leading-[1.85] text-white/65 sm:text-[14px]">
            It is the oldest idea in Indian hospitality, and it is still the way
            we work: comfortable rooms kept with care, food cooked pure and
            honest, and celebrations handled as if they were our own.
          </p>
        </div>

        {/* ================= VALUES ================= */}
        <div className="mt-14 grid grid-cols-1 gap-px border border-[#c5a46d]/30 bg-[#c5a46d]/30 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, text, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-[#1f4237] px-7 pb-8 pt-7"
            >
              <div className="flex h-[43px] w-[43px] items-center justify-center border border-[#c5a46d]/50">
                <Icon size={16} strokeWidth={1.5} className="text-[#d5b779]" />
              </div>

              <h3 className="mt-7 font-heading text-[18px] leading-snug">
                {title}
              </h3>

              <p className="mt-3 max-w-[260px] text-[12px] leading-[1.75] text-white/55">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;