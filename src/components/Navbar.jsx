import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Hotel & Rooms", path: "/rooms" },
  { name: "Restaurant", path: "/restaurant" },
  { name: "Marriage Garden", path: "/marriage-garden" },
  { name: "Banquet Hall", path: "/banquet-hall" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`${
        isHome
          ? "absolute bg-black/30"
          : "relative bg-[#173c31]"
      } inset-x-0 top-0 z-50 w-full text-white transition-colors duration-300`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* Hotel Branding */}
        <Link
          to="/"
          aria-label="Hotel Vrindavan homepage"
          className="flex shrink-0 flex-col"
        >
          <span className="font-heading text-[20px] leading-tight tracking-[0.1em] sm:text-[23px]">
            HOTEL VRINDAVAN
          </span>

          <span className="mt-[5px] text-[8px] font-medium tracking-[0.25em] text-[#c5a46d] sm:text-[9px]">
            JABALPUR · MADHYA PRADESH
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative whitespace-nowrap py-2 text-[13px] tracking-[0.02em] transition-colors duration-300 ${
                  isActive
                    ? "text-[#c5a46d]"
                    : "text-white/85 hover:text-[#c5a46d]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-line"
                      className="absolute -bottom-[9px] left-0 h-px w-full bg-[#c5a46d]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Call Us Button - Desktop */}
        <Link
          to="/contact"
          className="hidden shrink-0 items-center gap-2 rounded-full border border-[#c5a46d]/70 px-5 py-[11px] text-[13px] text-[#c5a46d] transition-all duration-300 hover:bg-[#c5a46d] hover:text-[#173c31] xl:inline-flex"
        >
          <Phone size={14} strokeWidth={1.6} />
          <span>Call Us</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-[#c5a46d] xl:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 82px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-y-auto border-t border-white/10 bg-[#173c31]"
          >
            <div className="flex min-h-full flex-col px-6 py-6 sm:px-10">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.04,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      className={({ isActive }) =>
                        `flex items-center justify-between border-b border-white/10 py-4 font-heading text-[20px] transition-colors ${
                          isActive
                            ? "text-[#c5a46d]"
                            : "text-white/90 hover:text-[#c5a46d]"
                        }`
                      }
                    >
                      {link.name}

                      <span className="text-sm text-[#c5a46d]">↗</span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Contact CTA */}
              <div className="mt-auto pt-8">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-full border border-[#c5a46d] px-5 py-3.5 text-sm text-[#c5a46d] transition-colors duration-300 hover:bg-[#c5a46d] hover:text-[#173c31]"
                >
                  <Phone size={15} />
                  Call Us
                </Link>

                <p className="mt-5 text-center text-[9px] tracking-[0.25em] text-white/45">
                  JABALPUR · MADHYA PRADESH
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;