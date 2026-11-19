
import { motion } from "motion/react";

const roomImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=85",
    alt: "Elegant hotel bedroom",
    className: "h-[260px] sm:h-[300px]",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85",
    alt: "Comfortable hotel room interior",
    className: "h-[190px] sm:h-[220px]",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85",
    alt: "Modern bedroom interior",
    className: "h-[190px] sm:h-[220px]",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=85",
    alt: "Hotel bed and room",
    className: "h-[105px] sm:h-[120px]",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=85",
    alt: "Luxury hotel bedroom",
    className: "h-[220px] sm:h-[260px]",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=85",
    alt: "Hotel room with comfortable bed",
    className: "h-[105px] sm:h-[120px]",
  },
];

function RoomGallery() {
  const columns = [
    [roomImages[0], roomImages[3]],
    [roomImages[1], roomImages[4]],
    [roomImages[2], roomImages[5]],
  ];

  return (
    <section className="w-full bg-[#f7f4ed] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">

      <div className="mx-auto max-w-[900px]">

        {/* Section Heading */}
        <motion.div
          className="mb-8 text-center sm:mb-10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >

          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-px w-5 bg-[#c5a46d]" />

            <span className="text-[8px] font-semibold tracking-[0.3em] text-[#b58c50] sm:text-[9px]">
              PHOTO GALLERY
            </span>
          </div>

          <h2 className="font-heading text-[27px] leading-tight text-[#173c31] sm:text-[32px]">
            Inside Our Rooms
          </h2>

          <p className="mt-2 text-[10px] leading-relaxed text-[#77766f] sm:text-[11px]">
            Representative photographs — actual room photos will be updated
            with the hotel's own.
          </p>

        </motion.div>

        {/* Masonry-style Gallery */}
        <div className="mx-auto grid max-w-[700px] grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5">

          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`flex flex-col gap-2 sm:gap-2.5 ${
                columnIndex === 2 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >

              {column.map((image, imageIndex) => (
                <motion.div
                  key={image.id}
                  className={`group relative w-full overflow-hidden bg-[#e8e1d5] ${image.className}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: (columnIndex * 2 + imageIndex) * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#173c31]/0 transition-colors duration-500 group-hover:bg-[#173c31]/10" />
                </motion.div>
              ))}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default RoomGallery;
