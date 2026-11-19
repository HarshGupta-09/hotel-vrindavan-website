
import { motion } from "motion/react";

const services = [
  {
    title: "Catering",
    description:
      "Pure vegetarian menus for weddings, receptions and related functions.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
    alt: "Traditional Indian vegetarian food platter",
  },
  {
    title: "Decoration & Lighting",
    description:
      "Floral themes, lighting and stage styling across the garden.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85",
    alt: "Beautiful wedding decoration with ambient lights",
  },
  {
    title: "Event Services",
    description:
      "DJ, seating and complete event-day coordination.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85",
    alt: "Celebration setup with cake and decorations",
  },
];

function MarriageGardenServices() {
  return (
    <section className="bg-[#eae3d8] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1016px]">

        {/* Section Heading */}
        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-7 bg-[#c5a46d]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#b18b50]">
              Catering & Decoration
            </span>
          </div>

          <h2 className="font-heading text-[27px] font-normal leading-tight text-[#173c31] sm:text-[32px]">
            Details Handled,{" "}
            <span className="italic text-[#c5a46d]">
              Beautifully
            </span>
          </h2>

          <p className="mt-3 max-w-[520px] text-[12px] leading-[1.7] text-[#666b65] sm:text-[13px]">
            From the first flower to the last course, our in-house
            arrangements keep your celebration effortless.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
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
              <div className="aspect-[1.5/1] overflow-hidden bg-[#ded5c8]">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="pt-4">
                <h3 className="font-heading text-[16px] font-normal text-[#173c31] sm:text-[17px]">
                  {service.title}
                </h3>

                <p className="mt-2 max-w-[340px] text-[11px] leading-[1.7] text-[#74776f] sm:text-[12px]">
                  {service.description}
                </p>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MarriageGardenServices;
