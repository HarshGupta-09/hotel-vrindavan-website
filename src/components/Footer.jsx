
import { Link } from "react-router-dom";
import { MapPin, Phone, Navigation } from "lucide-react";

const exploreLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Hotel & Rooms", path: "/rooms" },
  { name: "Restaurant", path: "/restaurant" },
  { name: "Marriage Garden", path: "/marriage-garden" },
  { name: "Banquet Hall", path: "/banquet-hall" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  { name: "Hotel & Accommodation", path: "/rooms" },
  { name: "Pure Vegetarian Restaurant", path: "/restaurant" },
  { name: "Marriage Garden", path: "/marriage-garden" },
  { name: "Banquet & Celebration Hall", path: "/banquet-hall" },
];

// Real details aane par yahan update kar dena
const contact = {
  address: "Hotel Vrindavan, Jabalpur, Madhya Pradesh, India",
  addressNote: "[Exact Address Placeholder]",
  phoneLabel: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  mapsHref: "/contact",
};

// lucide-react ke naye versions me brand icons nahi hain, isliye inline SVG
function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socials = [
  { name: "Instagram", href: "#", icon: InstagramIcon },
  { name: "Facebook", href: "#", icon: FacebookIcon },
];

const linkClass =
  "text-[13px] text-white/70! transition-colors duration-300 hover:text-[#c5a46d]!";

function Footer() {
  return (
    <footer className="bg-[#252b27] text-white">
      <div className="mx-auto max-w-[1240px] px-6 pb-8 pt-16 sm:px-10 lg:px-16 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.9fr_1fr_1fr_1.3fr] lg:gap-10">
          {/* ================= BRAND ================= */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-block leading-none"
              aria-label="Hotel Vrindavan home"
            >
              <span className="font-heading text-[30px] tracking-[0.06em] text-white sm:text-[34px]">
                HOTEL{" "}
                <span className="italic text-[#c5a46d]">VRINDAVAN</span>
              </span>
            </Link>

            <p className="mt-3 text-[9px] font-semibold tracking-[0.28em] text-[#c5a46d]">
              JABALPUR · MADHYA PRADESH
            </p>

            <p className="mt-7 max-w-[410px] text-[13px] leading-[1.85] text-white/65">
              A welcoming destination in Jabalpur for comfortable stays, pure
              vegetarian dining and unforgettable celebrations — trusted by
              guests for over a decade.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70! transition-colors duration-300 hover:border-[#c5a46d] hover:text-[#c5a46d]!"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ================= EXPLORE ================= */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.28em] text-[#c5a46d]">
              EXPLORE
            </h3>
            <ul className="mt-6 space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.28em] text-[#c5a46d]">
              OUR SERVICES
            </h3>
            <ul className="mt-6 space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.28em] text-[#c5a46d]">
              CONTACT
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin
                  size={14}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-[#c5a46d]"
                />
                <div>
                  <p className="text-[13px] leading-[1.6] text-white/75">
                    {contact.address}
                  </p>
                  <p className="mt-1.5 text-[10px] text-white/40">
                    {contact.addressNote}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={14}
                  strokeWidth={1.6}
                  className="shrink-0 text-[#c5a46d]"
                />
                <a href={contact.phoneHref} className={linkClass}>
                  {contact.phoneLabel}
                </a>
              </div>
            </div>

            <Link
              to={contact.mapsHref}
              className="mt-7 inline-flex min-h-[36px] items-center gap-2.5 rounded-full border border-white/25 px-5 text-[9px] font-semibold tracking-[0.14em] text-[#d5b779]! transition-colors duration-300 hover:border-[#c5a46d] hover:bg-[#c5a46d] hover:text-[#173c31]!"
            >
              <Navigation size={12} />
              GET DIRECTIONS
            </Link>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <p>
            © {new Date().getFullYear()} Hotel Vrindavan, Jabalpur. All rights
            reserved.
          </p>

          <p>
            Hotel · Pure Veg Restaurant · Marriage Garden · Banquet Hall
          </p>

          {/* Developer Signature */}
          <p className="text-[10px] text-white/50">
            Designed & Developed by{" "}
            <span className="font-semibold tracking-wide text-[#c5a46d]">
              Harsh Gupta
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
