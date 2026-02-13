"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#FAF9F7]">
      <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT: Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight text-black">
            Capturing Life’s <br /> Precious Moments
          </h1>

          <p className="mt-6 max-w-md text-black/70 text-base leading-relaxed">
            We believe photography is more than an image — it is a story,
            an emotion, a moment preserved forever.
          </p>

          <Link
            href="/portfolio"
            className="inline-block mt-10 border border-black px-8 py-3 text-sm tracking-wide text-black transition hover:bg-black hover:text-white"
          >
            VIEW PORTFOLIO
          </Link>
        </div>

        {/* RIGHT: Image */}
        <div className="relative">
          <div className="overflow-hidden">
            <img
              src="/images/hero.jpeg"
              alt="Photography hero image"
              className="w-full h-[480px] object-contain transition duration-700 hover:scale-105"
            />
          </div>

          {/* subtle decorative line (artistic touch) */}
          <span className="absolute -bottom-6 -left-6 h-24 w-24 border border-black/10" />
        </div>

      </div>
    </section>
  );
}
