
import { Phone } from "lucide-react";
import { motion } from "motion/react";

function BanquetHallPricing() {
  return (
    <section className="bg-[#f8f5ef] px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[520px] text-center">

        {/* Section Label */}
        <motion.div
          className="mb-5 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="h-px w-7 bg-[#c5a46d]" />

          <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#b18b50]">
            Pricing
          </span>

          <span className="h-px w-7 bg-[#c5a46d]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-heading text-[28px] font-normal leading-tight text-[#173c31] sm:text-[32px] md:text-[34px]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Simple, Transparent{" "}
          <span className="italic text-[#c5a46d]">
            Enquiries
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mx-auto mt-5 max-w-[430px] text-[12px] leading-[1.7] text-[#66645f] sm:text-[13px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Hall charges are shared on enquiry and depend on your date,
          timings and arrangement preferences. Call us — we will put
          together a plan that fits your celebration perfectly.
        </motion.p>

        {/* Call CTA */}
        <motion.div
          className="mt-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <a
            href="tel:+917987775155"
            className="mx-auto inline-flex min-h-[38px] items-center justify-center gap-2 rounded-full bg-[#1c4035] px-7 py-3 !text-white text-[9px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-[#c5a46d] hover:!text-[#173c31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a46d] focus-visible:ring-offset-2"
          >
            <Phone size={12} strokeWidth={1.7} />
            <span className="!text-white hover:!text-[#173c31]">
              Call for Hall Charges
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default BanquetHallPricing;
