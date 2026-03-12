"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Us", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:h-20">
        <a
          href="#"
          className="text-xs font-medium tracking-[0.2em] text-foreground md:text-sm"
        >
          UNPROMPTABLE ASSETS
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://www.unpromptable.dev/ai-readiness-diagnostic"
          className="hidden bg-foreground px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-gold md:inline-flex"
        >
          Take the Diagnostic
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative h-5 w-6 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute left-0 block h-[2px] w-full bg-foreground transition-all duration-300 ${
              menuOpen ? "top-[9px] rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-[9px] block h-[2px] w-full bg-foreground transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-[2px] w-full bg-foreground transition-all duration-300 ${
              menuOpen ? "top-[9px] -rotate-45" : "top-[18px]"
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80" : "max-h-0 border-t-0"
        }`}
      >
        <div className="px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.unpromptable.dev/ai-readiness-diagnostic"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block bg-foreground py-3 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-gold"
          >
            Take the Diagnostic
          </a>
        </div>
      </div>
    </nav>
  );
}
