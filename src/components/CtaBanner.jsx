import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Phone, Navigation } from "lucide-react";

function CtaBanner() {
  return (
    <section className="relative bg-[#173c31] py-24 text-white sm:py-28 lg:py-32">
      {/* Inner frame border */}
      <div className="pointer-events-none absolute inset-3 border border-[#c5a46d]/25 sm:inset-[18px]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-[760px] px-6 text-center sm:px-10"
      >
        <h2 className="font-heading text-[clamp(34px,4.4vw,58px)] leading-[1.12] tracking-[-0.025em]">
          Experience{" "}
          <span className="italic text-[#c5a46d]">Hotel Vrindavan</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[470px] text-[13px] leading-[1.85] text-white/70 sm:text-[14px]">
          Whether you are planning a comfortable stay, a delightful meal or a
          memorable celebration, we look forward to welcoming you.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          {/* Call button: real number aane par to="/contact" ki jagah
              <a href="tel:+91XXXXXXXXXX"> use kar lena */}
          <Link
            to="/contact"
            className="inline-flex min-h-[46px] w-full items-center justify-center gap-3 rounded-full bg-[#c5a46d] px-8 text-[10px] font-semibold tracking-[0.12em] text-[#173c31]! transition-colors duration-300 hover:bg-[#d8bd8a] sm:w-auto"
          >
            <Phone size={14} />
            CALL US
          </Link>

          {/* Directions: Google Maps link yahan laga dena */}
          <Link
            to="/contact"
            className="inline-flex min-h-[46px] w-full items-center justify-center gap-3 rounded-full border border-white/35 px-8 text-[10px] font-semibold tracking-[0.12em] text-white! transition-all duration-300 hover:border-[#c5a46d] hover:text-[#c5a46d]! sm:w-auto"
          >
            <Navigation size={14} />
            GET DIRECTIONS
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default CtaBanner;