
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const categories = [
  "All",
  "Hotel",
  "Rooms",
  "Restaurant",
  "Food",
  "Marriage Garden",
  "Weddings",
  "Banquet Hall",
  "Celebrations",
];

const galleryImages = [
  // HOTEL
  {
    id: 1,
    category: "Hotel",
    title: "Hotel Vrindavan Exterior",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.25/1]",
  },
  {
    id: 2,
    category: "Hotel",
    title: "Elegant Hotel Reception",
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.2/1]",
  },
  {
    id: 3,
    category: "Hotel",
    title: "Hotel Interior",
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.4/1]",
  },
  {
    id: 4,
    category: "Hotel",
    title: "Luxury Hotel Lobby",
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.3/1]",
  },

  // ROOMS
  {
    id: 5,
    category: "Rooms",
    title: "Deluxe Room",
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.15/1]",
  },
  {
    id: 6,
    category: "Rooms",
    title: "Comfortable Bedroom",
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.4/1]",
  },
  {
    id: 7,
    category: "Rooms",
    title: "Premium Room Interior",
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.2/1]",
  },
  {
    id: 8,
    category: "Rooms",
    title: "Elegant Room Setup",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.35/1]",
  },

  // RESTAURANT
  {
    id: 9,
    category: "Restaurant",
    title: "Restaurant Dining Area",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.25/1]",
  },
  {
    id: 10,
    category: "Restaurant",
    title: "Elegant Dining Space",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.4/1]",
  },
  {
    id: 11,
    category: "Restaurant",
    title: "Restaurant Ambience",
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.2/1]",
  },

  // FOOD
  {
    id: 12,
    category: "Food",
    title: "Assorted Indian Thali",
    src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.15/1]",
  },
  {
    id: 13,
    category: "Food",
    title: "Traditional Indian Meal",
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.5/1]",
  },
  {
    id: 14,
    category: "Food",
    title: "Indian Snacks",
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.15/1]",
  },
  {
    id: 15,
    category: "Food",
    title: "Delicious Indian Cuisine",
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.4/1]",
  },
  {
    id: 16,
    category: "Food",
    title: "Indian Sweets",
    src: "https://images.unsplash.com/photo-1605197161470-5d1d7d8a5f1e?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.3/1]",
  },

  // MARRIAGE GARDEN
  {
    id: 17,
    category: "Marriage Garden",
    title: "Beautiful Wedding Garden",
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.3/1]",
  },
  {
    id: 18,
    category: "Marriage Garden",
    title: "Outdoor Celebration Venue",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.5/1]",
  },
  {
    id: 19,
    category: "Marriage Garden",
    title: "Wedding Venue Decoration",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.2/1]",
  },

  // WEDDINGS
  {
    id: 20,
    category: "Weddings",
    title: "Wedding Celebration",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.15/1]",
  },
  {
    id: 21,
    category: "Weddings",
    title: "Wedding Ceremony",
    src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.4/1]",
  },
  {
    id: 22,
    category: "Weddings",
    title: "Wedding Decor",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.25/1]",
  },

  // BANQUET HALL
  {
    id: 23,
    category: "Banquet Hall",
    title: "Grand Banquet Hall",
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.3/1]",
  },
  {
    id: 24,
    category: "Banquet Hall",
    title: "Elegant Event Setup",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.45/1]",
  },
  {
    id: 25,
    category: "Banquet Hall",
    title: "Celebration Hall",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.2/1]",
  },

  // CELEBRATIONS
  {
    id: 26,
    category: "Celebrations",
    title: "Special Family Celebration",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.25/1]",
  },
  {
    id: 27,
    category: "Celebrations",
    title: "Birthday Celebration",
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.4/1]",
  },
  {
    id: 28,
    category: "Celebrations",
    title: "Special Moments",
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1.2/1]",
  },
];

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  return (
    <section className="bg-[#f8f5ef] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

      <div className="mx-auto max-w-[900px]">

        {/* Category Filters */}
        <div className="mb-7 flex flex-wrap items-center justify-center gap-2 sm:mb-8">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-3 py-[7px] text-[7px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 sm:px-4 sm:text-[8px] ${
                activeCategory === category
                  ? "border-[#c5a46d] bg-[#c5a46d] !text-[#173c31]"
                  : "border-[#d7d2c8] bg-transparent text-[#55534d] hover:border-[#c5a46d] hover:bg-[#c5a46d]/10"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Masonry Gallery */}
        <motion.div
          layout
          className="columns-1 gap-[7px] sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.035,
                  ease: "easeOut",
                }}
                className="group relative mb-[7px] break-inside-avoid overflow-hidden bg-[#eae3d8]"
              >
                <div className={`relative w-full overflow-hidden ${image.aspect}`}>

                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101f1b]/65 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Image Title */}
                  <div className="absolute bottom-0 left-0 p-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[8px] font-medium uppercase tracking-[0.12em] text-white sm:text-[9px]">
                      {image.title}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Placeholder Note */}
        <p className="mt-8 text-center text-[7px] font-medium uppercase tracking-[0.18em] text-[#a29c91] sm:text-[8px]">
          Representative placeholder photography — actual Hotel Vrindavan
          photographs will be added.
        </p>

      </div>
    </section>
  );
}

export default GalleryGrid;
