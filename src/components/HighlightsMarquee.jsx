const highlights = [
  "Comfortable Stays",
  "Pure Vegetarian Dining",
  "Marriage Garden",
  "Banquet Hall",
  "10+ Years of Hospitality",
];

function HighlightsMarquee() {
  return (
    <section className="marquee-section overflow-hidden bg-[#173c31] py-7">
      <div className="marquee-track flex w-max">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="marquee-group flex shrink-0 items-center"
            aria-hidden={group === 1}
          >
            {highlights.map((item, index) => (
              <div
                key={`${group}-${index}`}
                className="flex shrink-0 items-center gap-12 px-8 sm:gap-16 sm:px-12"
              >
                <span className="whitespace-nowrap font-heading text-xl italic text-white/75 sm:text-2xl">
                  {item}
                </span>

                <span className="text-sm text-[#c5a46d]">
                  ◆
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HighlightsMarquee;