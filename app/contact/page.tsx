"use client";

import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#FAF9F7] min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-serif text-black tracking-wide">
          Contact <span className="text-yellow-500">Us</span>
        </h1>

        <p className="mt-4 text-sm text-black/60">
          Let’s create something beautiful together.
        </p>

        {/* Contact Info */}
        <div className="mt-14 space-y-8">

          {/* Phone */}
          <div className="flex items-center justify-center gap-4 text-black">
            <Phone size={20} className="text-yellow-500" />
            <span className="text-lg tracking-wide">+254 700 000 000</span>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center gap-4 text-black">
            <Mail size={20} className="text-yellow-500" />
            <span className="text-lg tracking-wide">your@email.com</span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-4 text-black">
            <MapPin size={20} className="text-yellow-500" />
            <span className="text-lg tracking-wide">Nairobi, Kenya</span>
          </div>

        </div>

        {/* Social Media */}
        <div className="mt-14 flex justify-center gap-10">

          <a
            href="#"
            className="text-black hover:text-yellow-500 transition"
            target="_blank"
          >
            <Instagram size={24} />
          </a>

          <a
            href="#"
            className="text-black hover:text-yellow-500 transition"
            target="_blank"
          >
            <Facebook size={24} />
          </a>

          <a
            href="#"
            className="text-black hover:text-yellow-500 transition"
            target="_blank"
          >
            <Youtube size={24} />
          </a>

        </div>

      </div>
    </main>
  );
}
