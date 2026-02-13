"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const YELLOW = "#F5C400";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      {/* Glass background */}
      <div className="bg-white/70 backdrop-blur-xl border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/images/logo.PNG"
              alt="Photography Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            <Link
              href="/"
              className={`relative transition ${isActive("/")
                  ? "text-black"
                  : "text-black/70 hover:text-black"
                }`}
            >
              Home
              {isActive("/") && (
                <span
                  className="absolute -bottom-1 left-0 h-[2px] w-full"
                  style={{ backgroundColor: YELLOW }}
                />
              )}
            </Link>

            {/* Portfolio Dropdown */}
            <div className="relative group">
              <span
                className={`cursor-pointer transition ${pathname.startsWith("/portfolio")
                    ? "text-black"
                    : "text-black/70 group-hover:text-black"
                  }`}
              >
                Gallery
              </span>

              {/* underline */}
              {pathname.startsWith("/portfolio") && (
                <span
                  className="absolute -bottom-1 left-0 h-[2px] w-full"
                  style={{ backgroundColor: YELLOW }}
                />
              )}

              {/* Dropdown */}
              <div className="absolute left-0 top-8 w-48 rounded-xl bg-white shadow-xl border border-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {[
                  { href: "/studio", label: "Studio" },
                  { href: "/events", label: "Events" },
                  { href: "/outdoor", label: "Outdoor" },
                  { href: "/videos", label: "Videos" },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-5 py-3 text-sm text-black/80 hover:bg-black/5 hover:text-black"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className={`relative transition ${isActive("/about")
                  ? "text-black"
                  : "text-black/70 hover:text-black"
                }`}
            >
              About
              {isActive("/about") && (
                <span
                  className="absolute -bottom-1 left-0 h-[2px] w-full"
                  style={{ backgroundColor: YELLOW }}
                />
              )}
            </Link>

            <Link
              href="/contact"
              className={`relative transition ${isActive("/contact")
                  ? "text-black"
                  : "text-black/70 hover:text-black"
                }`}
            >
              Contact
              {isActive("/contact") && (
                <span
                  className="absolute -bottom-1 left-0 h-[2px] w-full"
                  style={{ backgroundColor: YELLOW }}
                />
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-black/10">
          <div className="flex flex-col px-6 py-6 space-y-6 text-base tracking-wide">
            {[
              { href: "/", label: "Home" },
              { href: "/studio", label: "Studio" },
              { href: "/events", label: "Events" },
              { href: "/outdoor", label: "Outdoor" },
              { href: "/videos", label: "Videos" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`transition ${isActive(href)
                    ? "text-black font-medium"
                    : "text-black/70 hover:text-black"
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
