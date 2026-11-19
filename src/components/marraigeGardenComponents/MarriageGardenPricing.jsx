
import { Phone } from "lucide-react";
import { motion } from "motion/react";

function MarriageGardenPricing() {
  return (
    <section className="border-b-[3px] border-[#173c31] bg-[#eae3d8] px-5 py-20 sm:px-8 sm:py-24 lg:py-24">
      <motion.div
        className="mx-auto flex max-w-[600px] flex-col items-center text-center"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >

        {/* Section Label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-7 bg-[#c5a46d]" />

          <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#b18b50]">
            Pricing
          </span>

          <span className="h-px w-7 bg-[#c5a46d]" />
        </div>

        {/* Heading */}
        <h2 className="font-heading text-[27px] font-normal leading-tight text-[#173c31] sm:text-[32px] md:text-[34px]">
          Packages to Suit{" "}
          <span className="italic text-[#c5a46d]">
            Every
          </span>{" "}
          Celebration
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-[430px] text-[12px] leading-[1.8] text-[#626760] sm:text-[13px]">
          We offer fixed packages as well as customized pricing options,
          tailored to your date, guest count and preferences. Package
          prices are shared on enquiry — call us and we will put together
          the right plan for you.
        </p>

        {/* CTA */}
        <motion.a
          href="tel:7987775155"
          className="mt-7 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#1c4035] px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-[#c5a46d] sm:px-8"
          style={{ color: "#ffffff" }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Phone size={13} strokeWidth={1.7} color="#ffffff" />

          <span style={{ color: "inherit" }}>
            Call for a Package Quote
          </span>
        </motion.a>

      </motion.div>
    </section>
  );
}

export default MarriageGardenPricing;
