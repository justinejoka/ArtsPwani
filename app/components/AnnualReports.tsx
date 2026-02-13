"use client";

import Link from "next/link";

export default function SelectedWorks() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-black">
            Selected Works
          </h2>
          <div className="w-16 h-[2px] mt-4 bg-[#F5C400]" />
        </div>

        {/* Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <Link href="/portfolio/events" className="group relative overflow-hidden">
            <img
              src="/images/wedding1.jpeg"
              alt="Wedding Photography"
              className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-serif">Summer Love</h3>
              <p className="text-sm text-white/80 mt-2">Wedding Story</p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/portfolio/studio" className="group relative overflow-hidden">
            <img
              src="/images/studio.jpeg"
              alt="Studio Photography"
              className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-serif">Timeless Portraits</h3>
              <p className="text-sm text-white/80 mt-2">Studio Collection</p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
