"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react"; // Make sure lucide-react is installed

const galleryData = [
  {
    title: "Studio",
    items: [
      "/images/studio1.jpeg",
      "/images/studio2.jpeg",
      "/images/studio3.jpeg",
      "/images/studio4.jpeg",
      "/images/studio5.jpeg",
      "/images/studio.jpeg",
    ],
  },
  {
    title: "Outdoor",
    items: [
      "/images/Outdor.jpeg",
      "/images/outdoor.jpeg",
      "/images/outdoor1.jpeg",
      "/images/outdoor2.jpeg",
      "/images/outdoor3.jpeg",
      "/images/outdoor4.jpeg",
    ],
  },
  {
    title: "Events",
    subcategories: [
      {
        title: "Birthdays",
        items: [
          "/images/event1.jpeg",
          "/images/event2.jpeg",
          "/images/event3.jpeg",
          "/images/event4.jpeg",
          "/images/event5.jpeg",
          "/images/wedding3.jpeg",
          "/images/wedding1.jpeg",
          "/images/wedding2.jpeg",
          "/images/wedding3.jpeg",
          "/images/wedding4.jpeg",
        ],
      },
      {
        title: "Weddings",
        items: [
          "/images/event1.jpeg",
          "/images/event2.jpeg",
          "/images/event3.jpeg",
          "/images/event4.jpeg",
          "/images/event5.jpeg",
          "/images/wedding3.jpeg",
          "/images/wedding1.jpeg",
          "/images/wedding2.jpeg",
          "/images/wedding3.jpeg",
          "/images/wedding4.jpeg",
        ],
      },
      {
        title: "Corporate",
        items: [
          "/images/event1.jpeg",
          "/images/event2.jpeg",
          "/images/event3.jpeg",
          "/images/event4.jpeg",
          "/images/event5.jpeg",
          "/images/wedding3.jpeg",
          "/images/wedding1.jpeg",
          "/images/wedding2.jpeg",
          "/images/wedding3.jpeg",
          "/images/wedding4.jpeg",
        ],
      },
    ],
  },
  {
    title: "Videos",
    videos: [
      "https://8zx5xld4et71gee1.public.blob.vercel-storage.com/Erick%26maggy%20trailermp4.mp4",
      "https://8zx5xld4et71gee1.public.blob.vercel-storage.com/Yatch_1.mp4",
      "https://8zx5xld4et71gee1.public.blob.vercel-storage.com/C%26J_TRAILER.mp44",
      "https://8zx5xld4et71gee1.public.blob.vercel-storage.com/CREEK.mp4",
    ],
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#FAF9F7] py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {galleryData.map((section, index) => (
          <div key={index} className="space-y-10">
            {/* Section Title */}
            <div className="flex items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-black">
                {section.title}
              </h2>
              <div className="h-[2px] w-16 bg-[#F5C400]" />
            </div>

            {/* Normal Image Sections */}
            {section.items && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {section.items.map((src, i) => (
                  <GalleryCard key={i} type="image" src={src} />
                ))}
              </div>
            )}

            {/* Events with Subcategories */}
            {section.subcategories && (
              <div className="space-y-14">
                {section.subcategories.map((sub, i) => (
                  <div key={i} className="space-y-6">
                    <h3 className="text-lg font-medium text-black/80">{sub.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {sub.items.map((src, j) => (
                        <GalleryCard key={j} type="image" src={src} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Video Section */}
            {section.videos && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.videos.map((src, i) => (
                  <GalleryCard key={i} type="video" src={src} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Reusable Card Component ---------- */

function GalleryCard({ type, src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="relative group overflow-hidden rounded-2xl
                 border border-black/5 shadow-sm
                 aspect-[4/5] bg-black cursor-pointer"
      onMouseEnter={type === "video" ? handleMouseEnter : undefined}
      onMouseLeave={type === "video" ? handleMouseLeave : undefined}
    >
      {type === "image" ? (
        <Image
          src={src}
          alt="Gallery"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <>
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Play Icon */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Play className="w-12 h-12 text-white/80 animate-pulse" />
            </div>
          )}
        </>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
    </div>
  );
}
