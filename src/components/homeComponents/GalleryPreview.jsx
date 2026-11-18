import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const u = (id, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// Apni khud ki photos yahan replace kar lena.
// 3 columns, har column me images upar se neeche. `ratio` = aspect ratio.
const columns = [
  [
    {
      src: u("photo-1520250497591-112f2f40a3f4"),
      alt: "Hotel courtyard in the evening",
      ratio: "3 / 2",
    },
    {
      src: u("photo-1631049307264-da0ec9d70304"),
      alt: "Guest room with double bed",
      ratio: "3 / 2",
    },
    {
      src: u("photo-1478131143081-80f7f84ca84d"),
      alt: "Celebration dinner setup",
      ratio: "3 / 2",
    },
  ],
  [
    {
      src: u("photo-1546833999-b9f581a1996d"),
      alt: "Vegetarian thali",
      ratio: "16 / 9",
    },
    {
      src: u("photo-1519741497674-611481863552"),
      alt: "Wedding mandap and aisle",
      ratio: "3 / 2.1",
    },
    {
      src: u("photo-1519167758481-83f550bb49b3"),
      alt: "Banquet hall lit for an event",
      ratio: "4 / 3",
    },
  ],
  [
    {
      src: u("photo-1517248135467-4c7edcad34c4"),
      alt: "Restaurant dining area",
      ratio: "2 / 3",
    },
    {
      src: u("photo-1566073771259-6a8506099945"),
      alt: "Hotel exterior and lawn",
      ratio: "2 / 1",
      fill: true,
    },
  ],
];

function GalleryPreview() {
  return (
    <section className="bg-[#f7f4ec] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c5a46d]" />
              <p className="text-[9px] font-semibold tracking-[0.25em] text-[#a78345] sm:text-[10px]">
                GALLERY
              </p>
            </div>

            <h2 className="font-heading text-[clamp(32px,4vw,52px)] leading-[1.14] tracking-[-0.025em] text-[#173c31]">
              A Glimpse of <span className="italic text-[#c5a46d]">Vrindavan</span>
            </h2>

            <p className="mt-4 max-w-[560px] text-[13px] leading-[1.85] text-[#686a63] sm:text-[14px]">
              Photographs from across our hotel, restaurant, garden and
              celebrations.
            </p>
          </div>

          <Link
            to="/gallery"
            className="group inline-flex min-h-[46px] w-full shrink-0 items-center justify-center gap-3 rounded-full border border-[#173c31]/30 px-7 text-[10px] font-semibold tracking-[0.12em] text-[#173c31]! transition-colors duration-300 hover:border-[#173c31] hover:bg-[#173c31] hover:text-white! sm:w-auto"
          >
            VIEW FULL GALLERY
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* ================= MASONRY ================= */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col gap-4 ${
                colIndex === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {column.map((image, imgIndex) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: imgIndex * 0.1 }}
                  style={image.fill ? undefined : { aspectRatio: image.ratio }}
                  className={`group relative overflow-hidden bg-[#142e27] ${
                    image.fill ? "min-h-[180px] flex-1" : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className={`${
                      image.fill ? "absolute inset-0" : ""
                    } h-full w-full object-cover transition-transform duration-700 group-hover:scale-105`}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;