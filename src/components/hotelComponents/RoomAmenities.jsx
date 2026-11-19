
import {
  BedDouble,
  Snowflake,
  Bath,
  Wifi,
  Tv,
  ConciergeBell,
  ShowerHead,
  Phone,
} from "lucide-react";

const amenities = [
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
    icon: ShowerHead,
  },
  {
    name: "Reception Assistance",
    description: "Help with anything you need, at any hour of your stay.",
    icon: Phone,
  },
];

function RoomAmenities() {
  return (
    <section className="w-full bg-[#eee8dd] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">

      <div className="mx-auto max-w-[1100px]">

        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-14">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c5a46d]" />

            <span className="text-[9px] font-semibold tracking-[0.28em] text-[#b58c50] sm:text-[10px]">
              IN EVERY ROOM
            </span>

            <span className="h-px w-8 bg-[#c5a46d]" />
          </div>

          <h2 className="font-heading text-[30px] leading-tight text-[#173c31] sm:text-[36px] lg:text-[38px]">
            Amenities That{" "}
            <span className="italic text-[#c5a46d]">
              Care
            </span>{" "}
            for You
          </h2>

        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">

          {amenities.map((amenity) => {
            const Icon = amenity.icon;

            return (
              <div
                key={amenity.name}
                className="
                  group flex min-h-[123px] cursor-default flex-col
                  items-start justify-start
                  bg-white/70 p-6
                  transition-all duration-300 ease-in-out
                  hover:bg-transparent
                  focus-within:bg-transparent
                "
              >

                {/* Icon Box */}
                <div
                  className="
                    mb-4 flex h-[39px] w-[39px]
                    items-center justify-center
                    border border-[#c5a46d]/50
                    bg-transparent
                    transition-all duration-300
                    group-hover:border-[#c5a46d]
                    group-hover:bg-[#c5a46d]
                  "
                >
                  <Icon
                    size={16}
                    strokeWidth={1.4}
                    className="text-[#b58c50] transition-colors duration-300 group-hover:text-[#173c31]"
                  />
                </div>

                {/* Amenity Name */}
                <h3 className="font-heading text-[15px] text-[#173c31]">
                  {amenity.name}
                </h3>

                {/* Optional Description */}
                {amenity.description && (
                  <p className="mt-2 max-w-[210px] text-[11px] leading-[1.7] text-[#68716c]">
                    {amenity.description}
                  </p>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default RoomAmenities;
