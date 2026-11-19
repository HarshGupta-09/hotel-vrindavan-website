
import {
  Cake,
  Heart,
  Gem,
  Briefcase,
  Users,
  Sparkles,
} from "lucide-react";

const eventTypes = [
  { name: "Birthday Parties", icon: Cake },
  { name: "Anniversaries", icon: Heart },
  { name: "Engagement Ceremonies", icon: Gem },
  { name: "Corporate Events", icon: Briefcase },
  { name: "Family Functions", icon: Users },
  { name: "Celebrations of Every Kind", icon: Sparkles },
];

function BanquetHallOverview() {
  return (
    <section className="bg-[#193d32] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1010px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">

        {/* Left: Guest Capacity */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="font-heading text-[68px] font-normal leading-none tracking-tight text-[#c5a46d] sm:text-[82px] lg:text-[88px]">
            500+
          </h2>

          <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/65">
            Guest Capacity · One Large Hall
          </p>
        </div>

        {/* Right: Hall Information */}
        <div>
          {/* Section Label */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-[#c5a46d]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#c5a46d]">
              The Hall
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[27px] font-normal leading-tight text-[#f5f0e8] sm:text-[32px]">
            One Hall, a{" "}
            <span className="italic text-[#c5a46d]">
              Thousand
            </span>{" "}
            Memories
          </h2>

          {/* Description */}
          <p className="mt-4 text-[12px] leading-[1.8] text-white/70 sm:text-[13px]">
            Our elegant banquet hall comfortably hosts 500+ guests for
            celebrations of every kind — with decoration, catering and
            event-related facilities available under the same roof.
          </p>

          {/* Event Categories */}
          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((event) => {
              const Icon = event.icon;

              return (
                <div
                  key={event.name}
                  className="flex min-h-[34px] items-center gap-2 border border-white/15 bg-white/[0.04] px-3 py-2 transition-colors duration-300 hover:border-[#c5a46d]/50 hover:bg-white/[0.08]"
                >
                  <Icon
                    size={12}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#c5a46d]"
                  />

                  <span className="text-[10px] text-white/80">
                    {event.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BanquetHallOverview;
