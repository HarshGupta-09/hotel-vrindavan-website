import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Rooms", path: "/rooms" },
  { name: "Restaurant", path: "/restaurant" },
  { name: "Marriage Garden", path: "/marriage-garden" },
  { name: "Banquet Hall", path: "/banquet-hall" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full border-b border-white/15 bg-[#142e27]/80 text-white backdrop-blur-md">
      <nav
        className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          to="/"
          className="group flex shrink-0 flex-col leading-none"
          aria-label="Hotel Vrindavan home"
        >
          <span className="font-heading text-xl tracking-[0.12em] sm:text-2xl">
            HOTEL <span className="text-[#c5a46d]">VRINDAVAN</span>
          </span>

          <span className="mt-1 text-[8px] tracking-[0.35em] text-white/65 sm:text-[9px]">
            COMFORT · LUXURY · HOSPITALITY
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
                `relative py-2 text-[11px] tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-[#d5b779]"
                    : "text-white/75 hover:text-[#d5b779]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute -bottom-0.5 left-0 h-px w-full bg-[#c5a46d]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop Booking CTA */}
        <Link
          to="/contact"
          className="hidden shrink-0 items-center gap-2 border border-[#c5a46d] px-4 py-2.5 text-[10px] tracking-[0.12em] text-[#d5b779] transition-all duration-300 hover:bg-[#c5a46d] hover:text-[#142e27] xl:inline-flex"
        >
          BOOK YOUR STAY
          <ArrowUpRight size={14} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-[#d5b779] xl:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 76px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-y-auto border-t border-white/10 bg-[#142e27]"
          >
            <div className="flex min-h-full flex-col px-6 py-8 sm:px-10">
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.045,
                      duration: 0.25,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      className={({ isActive }) =>
                        `flex items-center justify-between border-b border-white/10 py-4 font-heading text-xl transition-colors ${
                          isActive
                            ? "text-[#d5b779]"
                            : "text-white/80 hover:text-[#d5b779]"
                        }`
                      }
                    >
                      {link.name}
                      <ArrowUpRight size={16} className="opacity-60" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 bg-[#c5a46d] px-5 py-4 text-xs tracking-[0.15em] text-[#142e27] transition-colors hover:bg-[#d8bd8a]"
                >
                  BOOK YOUR STAY
                  <ArrowUpRight size={16} />
                </Link>

                <p className="mt-6 text-center text-[10px] tracking-[0.2em] text-white/40">
                  COMFORT · LUXURY · HOSPITALITY
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