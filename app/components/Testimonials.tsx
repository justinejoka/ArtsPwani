"use client";

import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="bg-[#FAF9F7] py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE COMPOSITION */}
        <div className="grid grid-cols-2 gap-6 md:order-1">

          {/* Large vertical image */}
          <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl">
            <img
              src="/images/weddings/_MG_1053.JPG"
              alt="Wedding photography"
              className="w-full h-full object-cover transition duration-700 hover:scale-105"
              style={{ aspectRatio: "3 / 4" }} // keeps image proportional
            />
          </div>

          {/* Top small image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/studio/studio3.jpeg"
              alt="Studio portrait"
              className="w-full h-full object-cover transition duration-700 hover:scale-105"
              style={{ aspectRatio: "4 / 3" }}
            />
          </div>

          {/* Bottom small image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/outdoor/Outdor.jpeg"
              alt="Outdoor photography"
              className="w-full h-full object-cover transition duration-700 hover:scale-105"
              style={{ aspectRatio: "4 / 3" }}
            />
          </div>

        </div>

        {/* RIGHT TEXT BLOCK */}
        <div className="md:order-2">
          <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight">
            Explore <br /> Our Gallery
          </h2>

          <p className="mt-6 text-black/70 max-w-sm leading-relaxed">
            From intimate studio portraits to emotional wedding stories and
            breathtaking outdoor moments, discover our curated collections.
          </p>

          <Link
            href="/gallery"
            className="inline-block mt-8 text-sm tracking-wide border-b border-black hover:text-[#F5C400] transition"
          >
            VIEW ALL WORK →
          </Link>
        </div>

      </div>
    </section>
  );
}
