
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function MarriageGardenHero() {
  return (
    <section className="relative isolate flex min-h-[675px] items-center overflow-hidden bg-[#19221f] -mt-[82px] pt-[82px] sm:min-h-[720px] lg:min-h-[100svh]">

      {/* Background Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=85"
        alt="Elegant outdoor wedding celebration setup"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#101f1b]/65" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101f1b]/75 via-[#101f1b]/35 to-[#101f1b]/10" />

      {/* Content */}
      <div className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-10 lg:px-12">
        <div className="max-w-[760px]">

          {/* Eyebrow */}
          <motion.div
            className="mb-6 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <span className="h-px w-11 bg-[#c5a46d]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#c5a46d] sm:text-[11px]">
              Marriage Garden · Jabalpur
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-heading text-[42px] font-normal leading-[1.12] tracking-[-0.025em] text-[#f5f1e9] sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Celebrate Your Special
            <br />
            Moments at{" "}
            <span className="whitespace-nowrap">
              *Vrindavan*
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 max-w-[550px] text-sm leading-[1.8] text-white/80 sm:text-base"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            A beautiful setting, thoughtful arrangements and memorable
            experiences for weddings and grand celebrations.
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            className="mt-8 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.08em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
          >
            <Link
              to="/"
              className="text-white/50 transition-colors hover:text-[#c5a46d]"
            >
              Home
            </Link>

            <span className="text-[#c5a46d]">◆</span>

            <span className="text-[#c5a46d]">
              Marriage Garden
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default MarriageGardenHero;
