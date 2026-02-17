"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronLeft, ChevronDown } from "lucide-react";

const YELLOW = "#F5C400";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="bg-white/70 backdrop-blur-xl border-b border-black/10">

        {/* ✅ UPDATED CONTAINER SYSTEM */}
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/logo.PNG"
              alt="Photography Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">

            {/* Home */}
            <Link
              href="/"
              className={`relative transition ${
                isActive("/") ? "text-black" : "text-black/70 hover:text-black"
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

            {/* Gallery Dropdown */}
            <div className="relative group">
              <span
                className={`cursor-pointer transition ${
                  pathname.startsWith("/studio") ||
                  pathname.startsWith("/outdoor") ||
                  pathname.startsWith("/videos") ||
                  pathname.startsWith("/birthdays") ||
                  pathname.startsWith("/weddings") ||
                  pathname.startsWith("/corporate")
                    ? "text-black"
                    : "text-black/70 group-hover:text-black"
                }`}
              >
                Gallery
              </span>

              {(pathname.startsWith("/studio") ||
                pathname.startsWith("/outdoor") ||
                pathname.startsWith("/videos") ||
                pathname.startsWith("/birthdays") ||
                pathname.startsWith("/weddings") ||
                pathname.startsWith("/corporate")) && (
                <span
                  className="absolute -bottom-1 left-0 h-[2px] w-full"
                  style={{ backgroundColor: YELLOW }}
                />
              )}

              {/* Main Dropdown */}
              <div className="absolute left-0 top-8 w-56 rounded-xl bg-white shadow-xl border border-black/10 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                <Link
                  href="/studio"
                  className="block px-5 py-3 text-sm text-black/80 hover:bg-black/5"
                >
                  Studio
                </Link>

                {/* Events Nested */}
                <div className="relative group/events">
                  <span className="flex items-center justify-between px-5 py-3 text-sm text-black/80 hover:bg-black/5 cursor-pointer">
                    Events
                    <ChevronLeft size={16} />
                  </span>

                  {/* Left Side Pop */}
                  <div className="absolute right-full top-0 mr-2 w-52 rounded-xl bg-white shadow-xl border border-black/10 
                  opacity-0 invisible translate-x-2
                  group-hover/events:opacity-100 group-hover/events:visible group-hover/events:translate-x-0
                  transition-all duration-200">

                    <Link
                      href="/birthdays"
                      className="block px-5 py-3 text-sm text-black/80 hover:bg-black/5"
                    >
                      Birthday
                    </Link>

                    <Link
                      href="/weddings"
                      className="block px-5 py-3 text-sm text-black/80 hover:bg-black/5"
                    >
                      Weddings
                    </Link>

                    <Link
                      href="/corporate"
                      className="block px-5 py-3 text-sm text-black/80 hover:bg-black/5"
                    >
                      Corporate
                    </Link>

                  </div>
                </div>

                <Link
                  href="/outdoor"
                  className="block px-5 py-3 text-sm text-black/80 hover:bg-black/5"
                >
                  Outdoor
                </Link>

                <Link
                  href="/videos"
                  className="block px-5 py-3 text-sm text-black/80 hover:bg-black/5"
                >
                  Videos
                </Link>

              </div>
            </div>

            {/* About */}
            <Link
              href="/about"
              className={`relative transition ${
                isActive("/about")
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

            {/* Contact */}
            <Link
              href="/contact"
              className={`relative transition ${
                isActive("/contact")
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

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-black/10">
          <div className="flex flex-col px-6 py-6 space-y-4 text-base">

            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/studio" onClick={() => setIsMenuOpen(false)}>Studio</Link>

            <div>
              <button
                onClick={() => setIsEventsOpen(!isEventsOpen)}
                className="flex items-center justify-between w-full"
              >
                Events
                <ChevronDown
                  size={18}
                  className={`transition ${isEventsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isEventsOpen && (
                <div className="ml-4 mt-2 flex flex-col space-y-2 text-sm">
                  <Link href="/birthdays" onClick={() => setIsMenuOpen(false)}>
                    Birthday
                  </Link>
                  <Link href="/weddings" onClick={() => setIsMenuOpen(false)}>
                    Weddings
                  </Link>
                  <Link href="/corporate" onClick={() => setIsMenuOpen(false)}>
                    Corporate
                  </Link>
                </div>
              )}
            </div>

            <Link href="/outdoor" onClick={() => setIsMenuOpen(false)}>Outdoor</Link>
            <Link href="/videos" onClick={() => setIsMenuOpen(false)}>Videos</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

          </div>
        </div>
      )}
    </nav>
  );
}
