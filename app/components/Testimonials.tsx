"use client";

import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="bg-[#FAF9F7] py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT BLOCK */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight">
            Explore <br /> Our Gallery
          </h2>

          <p className="mt-6 text-black/70 max-w-sm leading-relaxed">
            From intimate studio portraits to emotional wedding stories and
            breathtaking outdoor moments — discover our curated collections.
          </p>

          <Link
            href="/portfolio"
            className="inline-block mt-8 text-sm tracking-wide border-b border-black hover:text-[#F5C400] transition"
          >
            VIEW ALL WORK →
          </Link>
        </div>

        {/* RIGHT IMAGE COMPOSITION */}
        <div className="grid grid-cols-2 gap-6">

          {/* Large vertical image */}
          <div className="col-span-1 row-span-2 overflow-hidden">
            <img
              src="/images/wedding3.jpeg"
              alt="Wedding photography"
              className="w-full h-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Top small image */}
          <div className="overflow-hidden">
            <img
              src="/images/studio.jpeg"
              alt="Studio portrait"
              className="w-full h-48 object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Bottom small image */}
          <div className="overflow-hidden">
            <img
              src="/images/Outdor.jpeg"
              alt="Outdoor photography"
              className="w-full h-48 object-cover transition duration-700 hover:scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
