import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import navItems from "../data/navigation";

// Shared link styles for desktop and mobile menus
const linkClassName =
  "block rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-primary";

const SiteNavbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu after choosing a link
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark/90 backdrop-blur">
      <Navbar
        fluid
        rounded={false}
        className="mx-auto max-w-6xl bg-transparent! px-4"
      >
        <NavbarBrand href="#home">
          <span className="self-center whitespace-nowrap text-xl font-bold text-white">
            Ahmed Elbehy
          </span>
        </NavbarBrand>

        <div className="flex items-center gap-2 md:order-2">
          <LanguageSwitcher />
          {/* Plain button: Flowbite's NavbarToggle keeps its own state and conflicts with ours */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            className="inline-flex items-center rounded-lg p-2 text-gray-300 hover:text-primary md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        <NavbarCollapse className="md:order-1">
          {navItems.map((item) => (
            <NavbarLink
              key={item.id}
              href={item.href}
              className={linkClassName}
              onClick={closeMenu}
            >
              {t(`nav.${item.id}`)}
            </NavbarLink>
          ))}
        </NavbarCollapse>

        {/* Mobile menu */}
        <motion.div
          id="mobile-menu"
          initial={false}
          animate={menuOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto", opacity: 1 },
            closed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="w-full overflow-hidden md:hidden"
        >
          <ul className="flex flex-col gap-1 border-t border-white/10 pt-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={linkClassName}
                  onClick={closeMenu}
                >
                  {t(`nav.${item.id}`)}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </Navbar>
    </header>
  );
};

export default SiteNavbar;
