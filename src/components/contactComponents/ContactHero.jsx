
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function ContactHero() {
  return (
    <section className="relative flex min-h-[620px] items-end overflow-hidden bg-[#172c26] sm:min-h-[660px] lg:min-h-[680px]">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=85')",
        }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#101f1b]/55" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#101f1b]/65 via-[#101f1b]/40 to-[#101f1b]/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[900px] px-6 pb-14 pt-32 sm:px-10 sm:pb-16 lg:px-0">

        <div className="max-w-[520px]">

          {/* Section Label */}
          <motion.div
            className="mb-5 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <span className="h-px w-8 bg-[#c5a46d]" />

            <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-[#c5a46d] sm:text-[9px]">
              Contact Us · Jabalpur, Madhya Pradesh
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-heading text-[36px] font-normal leading-[1.15] text-[#f7f3eb] sm:text-[44px] md:text-[48px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            We Look Forward
            <br />
            to <span>*Welcoming You*</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-4 max-w-[400px] text-[11px] leading-[1.8] text-white/75 sm:text-[12px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            Direct phone calls are the best way to reach us — for rooms,
            a table, or the celebration of a lifetime.
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            className="mt-7 flex items-center gap-2 text-[8px] font-medium uppercase tracking-[0.12em]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
          >
            <Link
              to="/"
              className="text-white/45 transition-colors duration-300 hover:text-[#c5a46d]"
            >
              Home
            </Link>

            <span className="text-[#c5a46d]">◆</span>

            <span className="text-[#c5a46d]">
              Contact Us
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactHero;
