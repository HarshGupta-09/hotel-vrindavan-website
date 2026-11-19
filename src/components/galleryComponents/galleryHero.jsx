
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function GalleryHero() {
  return (
    <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#172c26] sm:min-h-[670px] lg:min-h-[675px]">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=85')",
        }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#101f1b]/65" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#101f1b]/75 via-[#101f1b]/45 to-[#101f1b]/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-4 pt-28 sm:px-10 lg:px-16">

        <div className="max-w-[520px]">

          {/* Section Label */}
          <motion.div
            className="mb-5 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <span className="h-px w-9 bg-[#c5a46d]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#c5a46d]">
              Gallery
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-heading text-[38px] font-normal leading-[1.15] text-[#f7f3eb] sm:text-[46px] md:text-[50px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Moments at
            <br />
            <span>*Vrindavan*</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-5 max-w-[420px] text-[11px] leading-[1.8] text-white/75 sm:text-[12px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            A visual journey through our hotel, rooms, restaurant, food,
            garden and celebrations.
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
              Gallery
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default GalleryHero;
