"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F7] text-black py-14 px-6 border-t border-black/10">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-serif">ArtsPwani</h3>
            <div className="w-10 h-[2px] bg-[#F5C400] mt-3 mb-4" />
            <p className="text-black/70 text-sm leading-relaxed max-w-xs">
              Capturing timeless stories through studio, event, and outdoor photography.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-black/60 hover:text-[#F5C400] transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-black/60 hover:text-[#F5C400] transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="text-black/60 hover:text-[#F5C400] transition"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li><Link href="/" className="hover:text-black transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-black transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-black transition">Contact</Link></li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase mb-4">
              Gallery
            </h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li><Link href="/studio" className="hover:text-black transition">Studio</Link></li>
              <li><Link href="/events" className="hover:text-black transition">Events</Link></li>
              <li><Link href="/outdoor" className="hover:text-black transition">Outdoor</Link></li>
              <li><Link href="/videos" className="hover:text-black transition">Videos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li>photo@artspwani.com</li>
              <li>+254 797 004 354</li>
              <li>Mombasa</li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-6 border-t border-black/10 text-center text-xs text-black/50">
          © {new Date().getFullYear()} ArtsPwani. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
