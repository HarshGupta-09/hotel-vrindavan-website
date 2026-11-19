
const restaurantHighlights = [
  "PURE VEGETARIAN",
  "DINE-IN",
  "TAKEAWAY",
  "ROOM SERVICE",
  "MULTIPLE CATEGORIES",
];

function RestaurantIntro() {
  return (
    <section className="w-full bg-[#f7f4ed] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left Content */}
        <div className="max-w-[480px]">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#c5a46d]" />

            <span className="text-[9px] font-semibold tracking-[0.3em] text-[#b58c50]">
              DINING AT VRINDAVAN
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[32px] leading-[1.2] text-[#173c31] sm:text-[36px] lg:text-[38px]">
            A Kitchen That Is{" "}
            <span className="italic text-[#c5a46d]">
              Completely
            </span>
            <br className="hidden sm:block" />
            {" "}Vegetarian
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[465px] text-[13px] leading-[1.7] text-[#62635d] sm:text-[14px]">
            Our restaurant serves only pure vegetarian food — prepared fresh,
            served warm and enjoyed by families across Jabalpur. Choose a
            relaxed dine-in meal, pick up a takeaway, or have it delivered to
            your room.
          </p>

          {/* Highlight Tags */}
          <div className="mt-7 flex max-w-[470px] flex-wrap gap-2">
            {restaurantHighlights.map((item) => (
              <span
                key={item}
                className="border border-[#c9c2b5] bg-[#eee9df] px-3.5 py-2 text-[9px] font-medium tracking-[0.08em] text-[#55574f] transition-all duration-300 hover:border-[#c5a46d] hover:bg-[#c5a46d] hover:text-[#173c31] sm:text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-[580px] lg:ml-auto">

          {/* Offset Border */}
          <div className="absolute -right-3 -bottom-3 h-full w-full border border-[#c5a46d]/40 sm:-right-4 sm:-bottom-4" />

          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8e1d5]">
            <img
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85"
              alt="Traditional Indian vegetarian thali with a variety of dishes"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default RestaurantIntro;
