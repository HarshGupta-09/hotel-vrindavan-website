import { Link } from "react-router-dom";
import { motion } from "motion/react";

// Apni khud ki reception / lobby photo yahan replace kar lena
const heroImage =
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2400&q=85";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

function About() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[540px] h-[72svh] max-h-[760px] w-full items-end overflow-hidden bg-[#142e27] text-white">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Reception area at Hotel Vrindavan"
            className="h-full w-full object-cover object-center"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-[#0b211b]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b211b]/80 via-[#0b211b]/20 to-[#0b211b]/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b211b]/70 via-[#0b211b]/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 pb-12 pt-36 sm:px-10 sm:pb-14 lg:px-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="max-w-[760px]"
          >
            {/* Eyebrow */}
            <motion.div
              variants={textVariants}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-px w-12 shrink-0 bg-[#c5a46d]" />
              <span className="text-[9px] font-semibold tracking-[0.28em] text-[#c5a46d] sm:text-[10px]">
                ABOUT US · JABALPUR, MADHYA PRADESH
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={textVariants}
              className="font-heading text-[clamp(40px,5.6vw,76px)] leading-[1.06] tracking-[-0.025em]"
            >
              A Legacy of Warmth,
              <br className="hidden sm:block" />{" "}
              Served with{" "}
              <span className="italic text-[#c5a46d]">Heart</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="mt-6 max-w-[540px] text-[13px] leading-[1.85] text-white/75 sm:text-[15px]"
            >
              More than ten years of welcoming guests to Jabalpur — with comfort,
              honest food and celebrations remembered for a lifetime.
            </motion.p>

            {/* Breadcrumb */}
            <motion.nav
              variants={textVariants}
              aria-label="Breadcrumb"
              className="mt-8 flex items-center gap-3 text-[9px] tracking-[0.18em] sm:text-[10px]"
            >
              <Link
                to="/"
                className="text-white/60! transition-colors duration-300 hover:text-[#c5a46d]!"
              >
                HOME
              </Link>
              <span className="text-[7px] text-[#c5a46d]" aria-hidden="true">
                ◆
              </span>
              <span className="text-[#c5a46d]" aria-current="page">
                ABOUT US
              </span>
            </motion.nav>
          </motion.div>
        </div>
      </section>

     
    </main>
  );
}

export default About;