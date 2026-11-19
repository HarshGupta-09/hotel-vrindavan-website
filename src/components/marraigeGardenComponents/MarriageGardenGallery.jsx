
import { motion } from "motion/react";

const galleryColumns = [
  [
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=85",
      alt: "Beautiful outdoor wedding mandap",
      height: "h-[150px] sm:h-[180px]",
    },
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=700&q=85",
      alt: "Grand wedding reception decoration",
      height: "h-[105px] sm:h-[125px]",
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=85",
      alt: "Wedding ceremony with floral decorations",
      height: "h-[105px] sm:h-[125px]",
    },
    {
      src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=700&q=85",
      alt: "Traditional wedding celebration",
      height: "h-[190px] sm:h-[230px]",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=700&q=85",
      alt: "Bride and groom at their wedding",
      height: "h-[210px] sm:h-[260px]",
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=700&q=85",
      alt: "Elegant wedding venue arrangement",
      height: "h-[105px] sm:h-[125px]",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=700&q=85",
      alt: "Warmly illuminated wedding celebration",
      height: "h-[150px] sm:h-[180px]",
    },
    {
      src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=700&q=85",
      alt: "Outdoor wedding garden with lights",
      height: "h-[150px] sm:h-[180px]",
    },
  ],
];

function MarriageGardenGallery() {
  return (
    <section className="bg-[#f5f1e9] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[680px]">

        {/* Gallery Heading */}
        <motion.div
          className="mb-7"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-7 bg-[#c5a46d]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#b18b50]">
              Wedding Gallery
            </span>
          </div>

          <h2 className="font-heading text-2xl font-normal text-[#173c31] sm:text-[28px]">
            Weddings at{" "}
            <span className="italic text-[#c5a46d]">
              Vrindavan
            </span>
          </h2>

          <p className="mt-2 text-[10px] leading-relaxed text-[#7b8079] sm:text-[11px]">
            Representative photographs — actual event photos will be
            updated with the hotel's own.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-3 items-start gap-1.5 sm:gap-2">
          {galleryColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex min-w-0 flex-col gap-1.5 sm:gap-2"
            >
              {column.map((image, imageIndex) => (
                <motion.div
                  key={imageIndex}
                  className={`group relative overflow-hidden bg-[#e8e0d4] ${image.height}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: columnIndex * 0.12 + imageIndex * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-[#173c31]/0 transition-colors duration-300 group-hover:bg-[#173c31]/15" />
                </motion.div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MarriageGardenGallery;
