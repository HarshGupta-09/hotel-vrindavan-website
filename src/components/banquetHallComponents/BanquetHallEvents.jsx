
import {
  Cake,
  Heart,
  Gem,
  Briefcase,
  Users,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const events = [
  { name: "Birthday Parties", icon: Cake },
  { name: "Anniversaries", icon: Heart },
  { name: "Engagement Ceremonies", icon: Gem },
  { name: "Corporate Events", icon: Briefcase },
  { name: "Family Functions", icon: Users },
  { name: "Celebrations of Every Kind", icon: Sparkles },
];

function BanquetHallEvents() {
  return (
    <section className="bg-[#eae3d8] px-5 py-20 sm:px-8 sm:py-24 lg:py-24">
      <div className="mx-auto max-w-[1008px]">

        {/* Section Heading */}
        <motion.div
          className="mb-10 text-center sm:mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#c5a46d]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#b18b50]">
              Event Types
            </span>

            <span className="h-px w-7 bg-[#c5a46d]" />
          </div>

          <h2 className="font-heading text-[27px] font-normal leading-tight text-[#173c31] sm:text-[32px] md:text-[34px]">
            Every Occasion{" "}
            <span className="italic text-[#c5a46d]">
              Welcomed
            </span>
          </h2>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 border-l border-t border-[#173c31]/20 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.div
                key={event.name}
                className="group flex min-h-[130px] flex-col items-start justify-center border-b border-r border-[#173c31]/20 px-6 py-6 transition-colors duration-300 ease-in-out hover:bg-[#f8f5ef] sm:min-h-[133px] sm:px-7"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                {/* Icon Box */}
                <div className="mb-5 flex h-9 w-9 items-center justify-center border border-[#c5a46d]/50 transition-all duration-300 group-hover:border-[#c5a46d] group-hover:bg-[#c5a46d]/10">
                  <Icon
                    size={15}
                    strokeWidth={1.4}
                    className="text-[#b18b50]"
                  />
                </div>

                {/* Event Name */}
                <h3 className="font-heading text-[16px] font-normal text-[#173c31] sm:text-[17px]">
                  {event.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default BanquetHallEvents;
