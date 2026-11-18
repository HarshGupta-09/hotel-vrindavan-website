import { motion } from "motion/react";

// Apni khud ki photos yahan replace kar lena
const images = [
  {
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    alt: "Hotel Vrindavan lobby and reception",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Restaurant dining area at Hotel Vrindavan",
  },
];

function OurStory() {
  return (
    <section className="bg-[#f7f4ec] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-14 px-6 sm:px-10 lg:grid-cols-[0.85fr_1fr] lg:gap-24 lg:px-16">
        {/* ================= TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#c5a46d]" />
            <p className="text-[9px] font-semibold tracking-[0.25em] text-[#a78345] sm:text-[10px]">
              OUR STORY
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[clamp(32px,3.6vw,46px)] leading-[1.14] tracking-[-0.025em] text-[#173c31]">
            One Address, <span className="italic text-[#c5a46d]">Four</span>{" "}
            Experiences
          </h2>

          {/* Paragraphs */}
          <div className="mt-6 max-w-[400px] space-y-4 text-[12px] leading-[1.85] text-[#686a63] sm:text-[13px]">
            <p>
              Hotel Vrindavan began with a simple belief: that every guest —
              whether staying the night, sharing a meal or celebrating the
              biggest day of their life — deserves the same genuine care.
            </p>

            <p>
              Over more than a decade, that belief has grown into four offerings
              at one convenient Jabalpur location: a hotel with 13 comfortable
              double-bed air-conditioned rooms, a pure vegetarian restaurant, a
              marriage garden for around a thousand guests, and an elegant
              banquet hall for 500 or more.
            </p>

            <p>
              Everything is run by the same family and the same team — which is
              why our guests find the same warmth whether they check in, dine
              in, or book the garden for a wedding.
            </p>
          </div>

          {/* Signature */}
          <p className="mt-8 font-heading text-[17px] italic text-[#c5a46d]">
            — Hotel Vrindavan, Jabalpur
          </p>
        </motion.div>

        {/* ================= IMAGES ================= */}
        <div className="flex flex-col gap-[18px]">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="aspect-[8/5] overflow-hidden bg-[#142e27]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStory;