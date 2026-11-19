
import {
  BedDouble,
  Bath,
  Tv,
  Snowflake,
  Wifi,
  ConciergeBell,
  Flame,
  Phone,
  Navigation,
} from "lucide-react";

const roomHighlights = [
  "13 AC ROOMS",
  "DOUBLE BED",
  "GROUND FLOOR",
  "PARKING & CCTV",
];

const roomAmenities = [
  {
    name: "Double Bed",
    icon: BedDouble,
  },
  {
    name: "Air Conditioning",
    icon: Snowflake,
  },
  {
    name: "Attached Bathroom",
    icon: Bath,
  },
  {
    name: "Wi-Fi",
    icon: Wifi,
  },
  {
    name: "Television",
    icon: Tv,
  },
  {
    name: "Room Service",
    icon: ConciergeBell,
  },
  {
    name: "Hot Water",
    icon: Flame,
  },
];

function RoomOverview() {
  return (
    <section className="w-full bg-[#f7f4ed]">

      {/* Room Highlights Strip */}
      <div className="border-y border-[#173c31]/10">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 sm:grid-cols-4">
          {roomHighlights.map((item, index) => (
            <div
              key={item}
              className={`flex min-h-[48px] items-center justify-center gap-2 px-3 py-3 text-center ${
                index !== 3
                  ? "sm:border-r border-[#173c31]/10"
                  : ""
              } ${
                index < 2
                  ? "border-b border-[#173c31]/10 sm:border-b-0"
                  : ""
              }`}
            >
              <span className="text-[9px] text-[#c5a46d]">
                ◆
              </span>

              <span className="text-[9px] font-medium tracking-[0.12em] text-[#53615b] sm:text-[10px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Room Overview */}
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-0 lg:py-28">

        {/* Left: Room Image */}
        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">

          {/* Decorative Border */}
          <div className="absolute -bottom-3 -right-3 h-full w-full border border-[#c5a46d]/50" />

          {/* Main Image */}
          <div className="relative aspect-[1.25/1] overflow-hidden bg-[#e6e0d5]">
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85"
              alt="Comfortable double-bed air-conditioned room at Hotel Vrindavan"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Room Details */}
        <div className="relative z-10">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#c5a46d]" />

            <span className="text-[9px] font-semibold tracking-[0.28em] text-[#b58c50] sm:text-[10px]">
              ACCOMMODATION
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[32px] leading-[1.12] text-[#173c31] sm:text-[38px] lg:text-[36px] xl:text-[40px]">
            Thirteen Rooms,{" "}
            <span className="font-heading italic text-[#c5a46d]">
              One
            </span>
            <br className="hidden sm:block" /> Standard of Comfort
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[470px] text-[13px] leading-[1.8] text-[#68716c] sm:text-[14px]">
            Every room at Hotel Vrindavan is a double-bed
            air-conditioned room, kept clean and ready for a
            restful night. With all rooms on the ground floor,
            there are no lifts to wait for and no stairs to
            climb — check in and settle straight in.
          </p>

          {/* Amenities */}
          <div className="mt-7 grid max-w-[450px] grid-cols-2 gap-x-5 gap-y-4 sm:gap-x-8">

            {roomAmenities.map((amenity) => {
              const Icon = amenity.icon;

              return (
                <div
                  key={amenity.name}
                  className="flex items-center gap-2.5"
                >
                  <Icon
                    size={14}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#b58c50]"
                  />

                  <span className="text-[11px] text-[#53615b] sm:text-[12px]">
                    {amenity.name}
                  </span>
                </div>
              );
            })}

          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">

            {/* Call Button */}
         <a
  href="tel:+910000000000"
  className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-[#173c31] px-6 py-3 !text-white text-[9px] font-semibold tracking-[0.12em] transition-all duration-300 hover:bg-[#c5a46d] hover:!text-[#173c31] sm:text-[10px]"
>
  <Phone
    size={13}
    strokeWidth={1.7}
    className="text-white transition-colors duration-300"
  />
  <span>CALL FOR AVAILABILITY</span>
</a>

            {/* Directions Button */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hotel+Vrindavan+Jabalpur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full border border-[#173c31]/25 px-6 py-3 text-[9px] font-semibold tracking-[0.12em] text-[#173c31] transition-all duration-300 hover:border-[#173c31] hover:bg-[#173c31] hover:text-white sm:text-[10px]"
            >
              <Navigation size={13} strokeWidth={1.7} />
              GET DIRECTIONS
            </a>

          </div>

          {/* Pricing Note */}
          <p className="mt-5 text-[9px] leading-relaxed tracking-[0.08em] text-[#9b9c94]">
            ROOM RATES ARE NOT YET PUBLISHED — PLEASE CALL FOR
            CURRENT PRICING.
          </p>

        </div>
      </div>
    </section>
  );
}

export default RoomOverview;
