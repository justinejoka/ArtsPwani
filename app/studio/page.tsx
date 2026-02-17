"use client";

import Image from "next/image";

export default function StudioPage() {
  const images = [
    "/images/studio/studio1.jpeg",
    "/images/studio/studio2.jpeg",
    "/images/studio/_DSC0920-1.jpg",
    "/images/studio/20230522165645__DSC0111.jpg",
    "/images/studio/studio5.jpeg",
    "/images/studio/studio3.jpeg",
     "/images/studio/_DSC01072.jpg",
  ];

  return (
    <main className="bg-white min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-serif text-black mb-16 text-center">
          Studio <span className="text-yellow-500">Work</span>
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
              style={{ aspectRatio: "4 / 5" }} // keeps all cards proportional
            >
              <Image
                src={src}
                alt={`Studio Work ${index + 1}`}
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                priority={index === 0} // load first image faster
              />

              {/* Optional subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500 rounded-2xl" />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
