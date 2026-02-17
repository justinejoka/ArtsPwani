"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

/* ---------- Types ---------- */

type GalleryCardProps = {
  type: "image" | "video";
  src: string;
};

type GallerySection =
  | {
    title: string;
    items: string[];
    subcategories?: never;
    videos?: never;
  }
  | {
    title: string;
    subcategories: {
      title: string;
      items: string[];
    }[];
    items?: never;
    videos?: never;
  }
  | {
    title: string;
    videos: string[];
    items?: never;
    subcategories?: never;
  };

/* ---------- Data ---------- */

const galleryData: GallerySection[] = [
  {
    title: "Studio",
    items: [
      "/images/studio/studio1.jpeg",
      "/images/studio/studio2.jpeg",
      "/images/studio/_DSC0920-1.jpg",
      "/images/studio/20230522165645__DSC0111.jpg",
      "/images/studio/studio5.jpeg",
      "/images/studio/studio3.jpeg",
      "/images/studio/_DSC01072.jpg",
    ],
  },
  {
    title: "Outdoor",
    items: [
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
      "/images/outdoor/_DSC0407.jpg",
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
    ],
  },
  {
    title: "Events",
    subcategories: [
      {
        title: "Birthdays",
        items: [
          "/images/birthday/_DSC0076.jpg",
          "/images/birthday/_DSC0944.jpg",
          "/images/birthday/_DSC0984.jpg",
          "/images/birthday/_DSC0988.jpg",
        ],
      },
      {
        title: "Weddings",
        items: [
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
        ],
      },
      {
        title: "Corporate",
        items: [
          "/images/corporate/_DSC0733.jpg",
          "/images/corporate/_DSC0137.jpg",
          "/images/corporate/_DSC0147.jpg",
          "/images/corporate/_DSC0317.jpg",
          "/images/corporate/_DSC0372.jpg",
          "/images/corporate/_DSC0662.jpg",
          "/images/corporate/_DSC0022.jpg",
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

/* ---------- Main Component ---------- */

export default function Gallery() {
  return (
    <section className="bg-[#FAF9F7] py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {galleryData.map((section, index) => (
          <div key={index} className="space-y-10">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-black">
                {section.title}
              </h2>
              <div className="h-[2px] w-16 bg-[#F5C400]" />
            </div>

            {"items" in section && section.items && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {section.items.map((src, i) => (
                  <GalleryCard key={i} type="image" src={src} />
                ))}
              </div>
            )}

            {"subcategories" in section && section.subcategories && (
              <div className="space-y-14">
                {section.subcategories.map((sub, i) => (
                  <div key={i} className="space-y-6">
                    <h3 className="text-lg font-medium text-black/80">
                      {sub.title}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {sub.items.map((src, j) => (
                        <GalleryCard key={j} type="image" src={src} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {"videos" in section && section.videos && (
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

/* ---------- Reusable Card ---------- */

function GalleryCard({ type, src }: GalleryCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
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
          sizes="(max-width: 768px) 50vw,
                 (max-width: 1200px) 33vw,
                 25vw"
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
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Play className="w-12 h-12 text-white/80 animate-pulse" />
            </div>
          )}
        </>
      )}

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
    </div>
  );
}
