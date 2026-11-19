
import { motion } from "motion/react";

const hallImages = [
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85",
    alt: "Elegant banquet hall with decorated dining tables",
    className: "aspect-[1.65/1]",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85",
    alt: "Banquet hall arranged for a large celebration",
    className: "aspect-[1.65/1]",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85",
    alt: "Beautifully decorated event dining space",
    className: "aspect-[1.65/1]",
  },
  {
    src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85",
    alt: "Grand indoor celebration hall",
    className: "aspect-[1.65/1]",
  },
];

function BanquetHallGallery() {
  return (
    <section className="bg-[#f7f4ee] px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-[450px]">

        {/* Section Heading */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-5 bg-[#c5a46d]" />

            <span className="text-[7px] font-medium uppercase tracking-[0.25em] text-[#b18b50]">
              Inside the Hall
            </span>
          </div>

          <h2 className="font-heading text-[22px] leading-tight text-[#173c31] sm:text-[24px]">
            An Interior Dressed for{" "}
            <span className="italic text-[#c5a46d]">
              the Occasion
            </span>
          </h2>

          <p className="mt-2 text-[8px] leading-relaxed text-[#77746d]">
            Representative photographs — actual hall photos will be
            updated with the hotel's own.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-[5px]">
          {hallImages.map((image, index) => (
            <motion.div
              key={index}
              className={`group overflow-hidden ${image.className}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BanquetHallGallery;
