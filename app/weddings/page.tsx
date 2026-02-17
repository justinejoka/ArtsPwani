"use client";

import Image from "next/image";

export default function EventsPage() {
  const images = [

    "/images/weddings/_DSC0014.jpg",
    "/images/weddings/_DSC0019.jpg",
    "/images/weddings/_DSC0237.jpg",
    "/images/weddings/_DSC0025.jpg",
    "/images/weddings/_DSC0020.jpg",
    "/images/weddings/_DSC0012.jpg",
    "/images/weddings/_DSC0040.jpg",
    "/images/weddings/_DSC0409.jpg",
    "/images/weddings/_DSC0482.jpg",
    "/images/weddings/_DSC0484.jpg",
    "/images/weddings/_DSC0680.jpg",
    "/images/weddings/_DSC0683.jpg",
    "/images/weddings/_DSC0689.jpg",
    "/images/weddings/_DSC0735.jpg",
    "/images/weddings/_F_P1038.jpg",
    "/images/weddings/_F_P1044.jpg",
    "/images/weddings/_F_P1047.jpg",
    "/images/weddings/_MG_1053.JPG",
    "/images/weddings/20251216_221214.jpg",
    "/images/weddings/DSC01468.jpg",
    "/images/weddings/DSC01479.jpg",
    "/images/weddings/DSC01484.jpg",
    "/images/weddings/DSC03783.jpg",
    "/images/weddings/event1.jpeg",
    "/images/weddings/event2.jpeg",
    "/images/weddings/event3.jpeg",
    "/images/weddings/event4.jpeg",
    "/images/weddings/event5.jpeg",
    "/images/weddings/wedding3.jpeg",
    "/images/weddings/wedding1.jpeg",
    "/images/weddings/wedding2.jpeg",
    "/images/weddings/wedding3.jpeg",
    "/images/weddings/wedding4.jpeg",
  ];

  return (
    <main className="bg-black min-h-screen px-6 py-24 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-serif mb-16 text-center">
          Events <span className="text-yellow-400">: Weddings</span>
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
                alt={`Event Work ${index + 1}`}
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                priority={index === 0} // load first image faster
              />

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 rounded-2xl" />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
