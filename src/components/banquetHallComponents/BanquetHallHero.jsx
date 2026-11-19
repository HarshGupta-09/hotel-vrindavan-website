
import { Link } from "react-router-dom";

function BanquetHallHero() {
  return (
    <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#172c26] sm:min-h-[680px] lg:min-h-[700px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#101f1b]/65" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#101f1b]/70 via-[#101f1b]/35 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-12 pt-32 sm:px-10 lg:px-16">

        <div className="max-w-[650px]">

          {/* Section Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#c5a46d]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#c5a46d] sm:text-[10px]">
              Banquet & Celebration Hall · Jabalpur
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-[38px] font-normal leading-[1.12] text-[#f7f3eb] sm:text-[48px] md:text-[54px] lg:text-[58px]">
            Make Every Celebration
            <br />
            <span>*Extraordinary*</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[470px] text-[13px] leading-[1.8] text-white/75 sm:text-[14px]">
            One grand, air-conditioned hall for 500+ guests — birthdays,
            anniversaries, engagements, corporate events and family functions.
          </p>

          {/* Breadcrumb */}
          <div className="mt-8 flex flex-wrap items-center gap-2 text-[9px] font-medium uppercase tracking-[0.1em]">
            <Link
              to="/"
              className="text-white/50 transition-colors hover:text-[#c5a46d]"
            >
              Home
            </Link>

            <span className="text-[#c5a46d]">◆</span>

            <span className="text-[#c5a46d]">
              Banquet & Celebration Hall
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BanquetHallHero;
