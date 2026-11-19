
function RoomsHero() {
  const heroImage =
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2400&q=90";

  return (
    <section
      className="relative flex min-h-[620px] w-full items-center overflow-hidden bg-[#173c31] bg-cover bg-center md:min-h-[675px] lg:min-h-[700px]"
      style={{
        backgroundImage: `url("${heroImage}")`,
        backgroundPosition: "center 55%",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#101f1b]/60" />

      {/* Left-to-right gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#101f1b]/80 via-[#101f1b]/55 to-[#101f1b]/25" />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101f1b]/35 via-transparent to-[#101f1b]/20" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-12 pt-28 sm:px-10 md:px-12 lg:px-16">
        <div className="max-w-[560px]">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-11 shrink-0 bg-[#c5a46d]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c5a46d] sm:text-[11px]">
              Hotel & Rooms
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-[39px] leading-[1.15] text-[#f8f5ee] sm:text-[48px] md:text-[56px] lg:text-[64px]">
            Serene Comfort on
            <br />
            the <span className="whitespace-nowrap">✳Ground Floor✳</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[520px] text-[14px] leading-[1.85] text-white/80 sm:text-[15px]">
            13 well-kept double-bed air-conditioned rooms — every one
            of them on the ground floor, just steps from reception.
          </p>

          {/* Breadcrumb */}
          <div className="mt-7 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.15em] sm:text-[10px]">
            <span className="text-white/50">Home</span>

            <span className="text-[#c5a46d]">◆</span>

            <span className="text-[#c5a46d]">Hotel & Rooms</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default RoomsHero;
