
import { Utensils, Landmark, Bell } from "lucide-react";

const diningOptions = [
  {
    id: 1,
    title: "Dine-In",
    description:
      "Settle into our warm, welcoming restaurant and enjoy your meal at a relaxed pace.",
    icon: Utensils,
  },
  {
    id: 2,
    title: "Takeaway",
    description:
      "Short on time? Call ahead and pick up your favourite vegetarian dishes.",
    icon: Landmark,
  },
  {
    id: 3,
    title: "Room Service",
    description:
      "Staying with us? Enjoy the same pure vegetarian food, delivered to your room.",
    icon: Bell,
  },
];

function DiningOptions() {
  return (
    <section className="relative overflow-hidden bg-[#19221f] px-5 py-20 text-[#f5f1e9] sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1210px]">

        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-14">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#c5a46d]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#c5a46d] sm:text-[10px]">
              How to Enjoy
            </span>

            <span className="h-px w-9 bg-[#c5a46d]" />
          </div>

          <h2 className="font-heading text-3xl font-normal leading-tight text-[#f5f1e9] sm:text-4xl lg:text-[38px]">
            Dine In, Take Away, or{" "}
            <span className="font-normal italic text-[#c5a46d]">
              In Your Room
            </span>
          </h2>
        </div>

        {/* Dining Options */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-7">
          {diningOptions.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.id}
                className="group border border-white/[0.12] bg-white/[0.025] px-7 py-8 transition-all duration-300 hover:border-[#c5a46d]/50 hover:bg-white/[0.06] sm:px-8 sm:py-8"
              >
                {/* Icon */}
                <div className="mb-6 flex h-11 w-11 items-center justify-center border border-[#c5a46d]/50 text-[#c5a46d] transition-all duration-300 group-hover:bg-[#c5a46d] group-hover:text-[#19221f]">
                  <Icon size={18} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="mb-3 font-heading text-xl font-normal text-[#f5f1e9]">
                  {option.title}
                </h3>

                {/* Description */}
                <p className="max-w-[340px] text-[13px] leading-[1.8] text-white/60">
                  {option.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default DiningOptions;
