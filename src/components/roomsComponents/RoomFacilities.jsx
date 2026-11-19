
import {
  ParkingSquare,
  Cctv,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";
import { motion } from "motion/react";

const facilities = [
  {
    id: 1,
    title: "Parking",
    description: "Ample on-site parking for guests.",
    icon: ParkingSquare,
  },
  {
    id: 2,
    title: "CCTV Surveillance",
    description: "Monitored premises for your peace of mind.",
    icon: Cctv,
  },
  {
    id: 3,
    title: "Security",
    description: "A safe and secure environment throughout.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Reception",
    description: "A front desk ready to assist with your needs.",
    icon: PhoneCall,
  },
];

function RoomFacilities() {
  return (
    <section className="w-full bg-[#193e32] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[900px]">

        {/* Section Heading */}
        <motion.div
          className="mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-7 bg-[#c5a46d]" />

            <span className="text-[8px] font-semibold tracking-[0.3em] text-[#c5a46d] sm:text-[9px]">
              HOTEL FACILITIES
            </span>
          </div>

          <h2 className="font-heading text-[26px] leading-tight text-[#f7f4ed] sm:text-[31px]">
            Everything Close at{" "}
            <span className="italic text-[#c5a46d]">Hand</span>
          </h2>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 border border-[#c5a46d]/20 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <motion.div
                key={facility.id}
                className="group min-h-[145px] border-b border-[#c5a46d]/20 p-5 transition-colors duration-300 hover:bg-[#285344] sm:border-r sm:last:border-r-0 sm:[&:nth-child(2)]:border-r-0 sm:[&:nth-child(3)]:border-b-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(3)]:border-r"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >
                {/* Icon */}
                <div className="mb-4 flex h-8 w-8 items-center justify-center border border-[#c5a46d]/40 text-[#c5a46d] transition-all duration-300 group-hover:border-[#c5a46d] group-hover:bg-[#c5a46d] group-hover:text-[#193e32]">
                  <Icon size={14} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="mb-2 font-heading text-[13px] text-[#f3eee4]">
                  {facility.title}
                </h3>

                {/* Description */}
                <p className="max-w-[190px] text-[10px] leading-[1.6] text-white/50">
                  {facility.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default RoomFacilities;
