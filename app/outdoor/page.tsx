"use client";

import Image from "next/image";

export default function OutdoorPage() {
  const images = [
    "/images/outdoor/Outdor.jpeg",
    "/images/outdoor/outdoor.jpeg",
    "/images/outdoor/outdoor1.jpeg",
    "/images/outdoor/_DSC0061.jpg",
    "/images/outdoor/_DSC0060.jpg",
    "/images/outdoor/_DSC0076.jpg",
    "/images/outdoor/_DSC0136.jpg",
    "/images/outdoor/_DSC0179.jpg",
    "/images/outdoor/_DSC0197.jpg",
    "/images/outdoor/_DSC0198.jpg",
    "/images/outdoor/_DSC0202.jpg",
    "/images/outdoor/_DSC0216.jpg",
    "/images/outdoor/_DSC0227.jpg",
    "/images/outdoor/_DSC0287.jpg",
    "/images/outdoor/_DSC0407.JPG",
    "/images/outdoor/_DSC0755.jpg",
     "/images/outdoor/_DSC0756.jpg",
     "/images/outdoor/_DSC1821.jpg",
     "/images/outdoor/_DSC1827.jpg",
     "/images/outdoor/DSC_0093.jpg",
     "/images/outdoor/DSC_0382.jpg",
     "/images/outdoor/DSC_0404.jpg",
     "/images/outdoor/DSC_0535.jpg",
     "/images/outdoor/DSC03438.jpg",
     "/images/outdoor/DSC03557.jpg",
     "/images/outdoor/DSC03558.jpg",
     "/images/outdoor/IMG_5271.jpg",
     "/images/outdoor/IMG_5275.jpg",
  ];

  return (
    <main className="bg-white min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Outdoor <span className="text-yellow-500">Photography</span>
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
                alt={`Outdoor Work ${index + 1}`}
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
