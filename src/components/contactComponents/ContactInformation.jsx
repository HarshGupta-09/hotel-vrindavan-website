
import {
  Phone,
  MapPin,
  Check,
  Navigation,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    description: (
      <>
        +91 90000 00000
        <br />
        Fastest way to reach us for rooms, food or events.
      </>
    ),
    linkText: "Call Now",
    href: "tel:+919000000000",
    external: false,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: (
      <>
        Hotel Vrindavan
        <br />
        Jabalpur, Madhya Pradesh, India
        <br />
        <span className="italic text-[#99948b]">
          [Exact Address Placeholder]
        </span>
      </>
    ),
    linkText: "Get Directions",
    href: "https://www.google.com/maps/search/?api=1&query=Hotel+Vrindavan+Jabalpur",
    external: true,
  },
  {
    icon: ArrowUpRight,
    title: "Follow Us",
    description: (
      <>
        Instagram & Facebook
        <br />
        Social links coming soon.
      </>
    ),
    linkText: "Instagram",
    href: "https://www.instagram.com/",
    external: true,
  },
];

const hotelServices = [
  "Hotel & Accommodation — 13 double-bed AC rooms",
  "Pure Vegetarian Restaurant — dine-in, takeaway & room service",
  "Marriage Garden — approximately 1,000 guests",
  "Banquet & Celebration Hall — 500+ guests",
];

function ContactInformation() {
  return (
    <section className="bg-[#f8f5ef] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

      <div className="mx-auto max-w-[880px]">

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="flex min-h-[190px] flex-col border border-[#e4dfd6] bg-white/50 p-5 sm:p-6"
              >
                {/* Icon */}
                <div className="mb-4 flex h-8 w-8 items-center justify-center border border-[#e6d7bc] text-[#b18b50]">
                  <Icon size={14} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-[15px] text-[#173c31]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[9px] leading-[1.9] text-[#77746d]">
                  {card.description}
                </p>

                {/* Link */}
                <a
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noreferrer" : undefined}
                  className="mt-auto inline-flex w-fit items-center gap-1 border-b border-[#c5a46d] pb-1 pt-4 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#173c31] transition-colors duration-300 hover:text-[#b18b50]"
                >
                  {card.title === "Follow Us" && (
                    <ArrowUpRight size={10} />
                  )}
                  {card.linkText}
                  <ArrowUpRight size={10} />
                </a>
              </motion.div>
            );
          })}

        </div>

        {/* Business Information + Map */}
        <div className="mt-14 grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:mt-16 lg:gap-16">

          {/* Left: Business Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            {/* Section Label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-[#c5a46d]" />

              <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#b18b50]">
                Business Information
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-[25px] font-normal leading-tight text-[#173c31] sm:text-[29px]">
              Four Services,{" "}
              <span className="italic text-[#c5a46d]">
                One Phone Call
              </span>
            </h2>

            {/* Services */}
            <div className="mt-5 space-y-3">
              {hotelServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-2"
                >
                  <Check
                    size={12}
                    strokeWidth={1.8}
                    className="mt-[2px] shrink-0 text-[#b18b50]"
                  />

                  <p className="text-[10px] leading-[1.6] text-[#65635d] sm:text-[11px]">
                    {service}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Important Note */}
            <div className="mt-6 border-l border-[#c5a46d] pl-3">
              <p className="text-[8px] leading-[1.8] text-[#99948b]">
                Note: We do not take online bookings — room reservations
                and event enquiries are handled directly over the phone.
              </p>
            </div>

          </motion.div>

          {/* Right: Location Map */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            {/* Map */}
            <div className="relative aspect-[1.25/1] w-full overflow-hidden border border-[#e4dfd6] bg-[#eae3d8]">

              <iframe
                title="Hotel Vrindavan Location - Jabalpur"
                src="https://maps.google.com/maps?q=Jabalpur%2C%20Madhya%20Pradesh%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Location Label */}
              <div className="absolute bottom-0 left-0 bg-[#173c31] px-4 py-3">
                <p className="font-heading text-[10px] italic text-[#c5a46d]">
                  Hotel Vrindavan · Jabalpur
                </p>
                <p className="mt-1 text-[7px] uppercase tracking-[0.12em] text-white/65">
                  Exact location pin to be updated
                </p>
              </div>

            </div>

            {/* Directions CTA */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hotel+Vrindavan+Jabalpur"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-[34px] items-center justify-center gap-2 rounded-full bg-[#1c4035] px-6 py-3 text-[8px] font-semibold uppercase tracking-[0.13em] !text-white transition-all duration-300 hover:bg-[#c5a46d] hover:!text-[#173c31]"
            >
              <Navigation size={11} />
              Get Directions
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default ContactInformation;
