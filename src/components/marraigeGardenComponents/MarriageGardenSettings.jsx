
import { motion } from "motion/react";

const settings = [
  {
    id: 1,
    title: "Outdoor Celebrations",
    description:
      "Open-air mandap, floral walkways and a sprawling lawn for the pheras, reception and everything in between.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
    alt: "Beautiful outdoor wedding mandap with floral decorations",
    imagePosition: "center",
  },
  {
    id: 2,
    title: "Indoor Arrangements",
    description:
      "Elegantly arranged indoor seating and dining for family functions, whatever the weather.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    alt: "Elegant indoor wedding dining arrangements",
    imagePosition: "center",
  },
];

function MarriageGardenSettings() {
  return (
    <section className="bg-[#f5f1e9] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1010px]">

        {/* Section Heading */}
        <motion.div
          className="mb-10 text-center sm:mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c5a46d]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#b18b50] sm:text-[10px]">
              Indoor & Outdoor
            </span>

            <span className="h-px w-8 bg-[#c5a46d]" />
          </div>

          <h2 className="font-heading text-3xl font-normal leading-tight text-[#173c31] sm:text-4xl lg:text-[38px]">
            Two Settings,{" "}
            <span className="italic text-[#c5a46d]">
              One
            </span>{" "}
            Unforgettable Day
          </h2>
        </motion.div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 gap-9 sm:gap-8 md:grid-cols-2 md:gap-[30px]">
          {settings.map((setting, index) => (
            <motion.article
              key={setting.id}
              className="group min-w-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >

              {/* Image */}
              <div className="relative aspect-[1.5/1] overflow-hidden bg-[#e8e0d4]">
                <img
                  src={setting.image}
                  alt={setting.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              {/* Content */}
              <div className="pt-4">
                <h3 className="font-heading text-xl font-normal text-[#173c31] sm:text-[22px]">
                  {setting.title}
                </h3>

                <p className="mt-2 max-w-[420px] text-[12px] leading-[1.8] text-[#65716b] sm:text-[13px]">
                  {setting.description}
                </p>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MarriageGardenSettings;
