
import { Phone } from "lucide-react";
import { motion } from "motion/react";

function FloatingCallButton() {
  return (
    <motion.a
      href="tel:+917987775155"
      aria-label="Call Hotel Vrindavan"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      whileHover={{
        scale: 1.06,
        backgroundColor: "rgba(197, 164, 109, 0.85)",
      }}
      whileTap={{
        scale: 0.88,
        backgroundColor: "rgba(197, 164, 109, 0.95)",
        boxShadow: "0 2px 12px rgba(197, 164, 109, 0.35)",
      }}
      className="fixed bottom-5 right-5 z-[999] flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/60 bg-white/35 text-[#173c31] shadow-[0_8px_28px_rgba(23,60,49,0.18)] backdrop-blur-xl transition-colors duration-300 sm:bottom-7 sm:right-7 md:hidden"
    >
      {/* Glass Highlight */}
      <span className="pointer-events-none absolute inset-[1px] rounded-full border border-white/30" />

      {/* Phone Icon */}
      <motion.span
        className="relative z-10 flex items-center justify-center"
        whileTap={{ rotate: -12 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <Phone size={22} strokeWidth={1.8} />
      </motion.span>
    </motion.a>
  );
}

export default FloatingCallButton;
