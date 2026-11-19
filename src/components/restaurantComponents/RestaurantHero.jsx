
import { Link } from "react-router-dom";

function RestaurantHero() {
  return (
    <section
      className="relative -mt-[82px] flex min-h-[620px] w-full items-center overflow-hidden bg-[#14251f] pt-[82px] sm:min-h-[680px] lg:min-h-[720px]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#101f1b]/65" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#101f1b]/85 via-[#101f1b]/45 to-[#101f1b]/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-[800px]">

          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#c5a46d]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c5a46d] sm:text-[11px]">
              Pure Vegetarian Restaurant
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-[42px] leading-[1.12] text-[#f7f4ed] sm:text-[55px] md:text-[64px] lg:text-[68px]">
            Pure Vegetarian,
            <br />
            Prepared with
            <span className="italic text-[#c5a46d]">
              {" "}Devotion
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[600px] text-[13px] leading-[1.8] text-white/75 sm:text-[15px]">
            An exclusively vegetarian kitchen serving dine-in,
            takeaway and room service — with a variety of dishes
            across many food categories.
          </p>

          {/* Breadcrumb */}
          <div className="mt-8 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.12em] sm:text-[10px]">
            <Link
              to="/"
              className="text-white/50 transition-colors duration-300 hover:text-[#c5a46d]"
            >
              Home
            </Link>

            <span className="text-[#c5a46d]">◆</span>

            <span className="text-[#c5a46d]">
              Pure Vegetarian Restaurant
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default RestaurantHero;
