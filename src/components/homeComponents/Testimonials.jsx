import { motion } from "motion/react";
import { Quote } from "lucide-react";

// Real reviews aane par `sample: false` kar dena, badge apne aap hat jayega
const testimonials = [
  {
    quote:
      "A truly comfortable stay. The room was spotless, the staff were courteous, and the vegetarian food reminded me of home.",
    name: "Guest Name (Sample)",
    context: "Hotel Guest · Sample testimonial",
    sample: true,
  },
  {
    quote:
      "We hosted our daughter's wedding in the garden. Beautiful setting, excellent arrangements and catering — every guest was all praise.",
    name: "Guest Name (Sample)",
    context: "Wedding Celebration · Sample testimonial",
    sample: true,
  },
  {
    quote:
      "The banquet hall was perfect for our anniversary party. Elegant hall, prompt service and delicious pure vegetarian food.",
    name: "Guest Name (Sample)",
    context: "Anniversary Celebration · Sample testimonial",
    sample: true,
  },
];

function Testimonials() {
  return (
    <section className="bg-[#e8e1d5] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-16">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-[640px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c5a46d]" />
            <p className="text-[9px] font-semibold tracking-[0.25em] text-[#a78345] sm:text-[10px]">
              GUEST WORDS
            </p>
            <span className="h-px w-10 bg-[#c5a46d]" />
          </div>

          <h2 className="font-heading text-[clamp(32px,4vw,50px)] leading-[1.14] tracking-[-0.025em] text-[#173c31]">
            Stories Our Guests <span className="italic text-[#c5a46d]">Tell</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[540px] text-[13px] leading-[1.85] text-[#686a63] sm:text-[14px]">
            Sample testimonials are shown for layout purposes only and will be
            replaced with genuine guest reviews.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="flex flex-col bg-[#f6f3ee] px-7 pb-7 pt-7 sm:px-8"
            >
              <Quote
                size={22}
                strokeWidth={1.4}
                className="shrink-0 rotate-180 text-[#c5a46d]"
                aria-hidden="true"
              />

              <blockquote className="mt-6 flex-1 font-heading text-[16px] italic leading-[1.75] text-[#173c31] sm:text-[17px]">
                “{item.quote}”
              </blockquote>

              <div className="mt-6 border-t border-[#ddd5c5] pt-5">
                <figcaption>
                  <p className="text-[12px] font-semibold text-[#1c2420]">
                    {item.name}
                  </p>
                  <p className="mt-1 text-[10px] text-[#8c8e85]">
                    {item.context}
                  </p>
                </figcaption>

                {item.sample && (
                  <span className="mt-3 inline-block bg-[#e8e1d5] px-2.5 py-1.5 text-[8px] font-semibold tracking-[0.12em] text-[#a78345]">
                    SAMPLE · REPLACE WITH REAL REVIEW
                  </span>
                )}
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;