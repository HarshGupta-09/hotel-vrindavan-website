
import { motion } from "motion/react";

const accessibilityPoints = [
  "Ground-floor rooms — no lift required",
  "On-site parking with CCTV surveillance",
  "Pure vegetarian restaurant within the property",
  "Marriage garden & banquet hall for hosted events",
];

function RoomLocation() {
  return (
    <section className="w-full border-y-[3px] border-[#193e32] bg-[#f7f4ed] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-7 bg-[#c5a46d]" />

            <span className="text-[8px] font-semibold tracking-[0.3em] text-[#b58c50] sm:text-[9px]">
              LOCATION & ACCESSIBILITY
            </span>
          </div>

          <h2 className="font-heading text-[27px] leading-tight text-[#173c31] sm:text-[32px]">
            Easy to Reach,{" "}
            <span className="italic text-[#c5a46d]">Easy to Love</span>
          </h2>

          <p className="mt-3 max-w-[470px] text-[11px] leading-[1.7] text-[#686860] sm:text-[12px]">
            Hotel Vrindavan sits conveniently in Jabalpur, Madhya Pradesh —
            simple to find from the city's main routes, with parking on-site
            and reception on the ground floor.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="border-l border-[#c5a46d]/50 pl-5 sm:pl-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <ul className="flex flex-col gap-3">
            {accessibilityPoints.map((point, index) => (
              <motion.li
                key={index}
                className="text-[11px] leading-relaxed text-[#555750] transition-colors duration-300 hover:text-[#b58c50] sm:text-[12px]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.25 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

export default RoomLocation;
