"use client";

import Image from "next/image";
import { Play } from "lucide-react";

/* ---------- Types ---------- */

type GallerySection =
  | {
      title: string;
      items: string[];
    }
  | {
      title: string;
      subcategories: {
        title: string;
        items: string[];
      }[];
    }
  | {
      title: string;
      videos: string[];
    };

type GalleryCardProps = {
  type: "image" | "video";
  src: string;
};

/* ---------- Data ---------- */

const galleryData: GallerySection[] = [
  {
    title: "Studio",
    items: [
      "/images/studio/studio1.jpeg",
      "/images/studio/studio2.jpeg",
      "/images/studio/_DSC0920-1.jpg",
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
        ],
      },
    ],
  },
  {
    title: "Videos",
    videos: [
      "6ktrEy-_qK0",
      "6ktrEy-_qK0",
      "Rvg0xJZjAmc",
      "ZWQ2mgnuRZQ",
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
            
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-black">
              {section.title}
            </h2>

            {/* Images */}
            {"items" in section && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {section.items.map((src, i) => (
                  <GalleryCard key={i} type="image" src={src} />
                ))}
              </div>
            )}

            {/* Subcategories */}
            {"subcategories" in section && (
              <div className="space-y-10">
                {section.subcategories.map((sub, i) => (
                  <div key={i} className="space-y-6">
                    <h3 className="text-lg text-black/80">{sub.title}</h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {sub.items.map((src, j) => (
                        <GalleryCard key={j} type="image" src={src} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Videos */}
            {"videos" in section && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.videos.map((id, i) => (
                  <GalleryCard key={i} type="video" src={id} />
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Card ---------- */

function GalleryCard({ type, src }: GalleryCardProps) {
  return (
    <div
      className="relative group overflow-hidden rounded-2xl
                 border border-black/5 shadow-sm
                 aspect-[4/5] bg-black"
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
          {/* YouTube Embed */}
          <iframe
            src={`https://www.youtube.com/embed/${src}?autoplay=1&mute=1&controls=0&loop=1&playlist=${src}`}
            className="w-full h-full object-cover pointer-events-none"
            allow="autoplay; encrypted-media"
          ></iframe>

          {/* Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-12 h-12 text-white/80 opacity-70 group-hover:opacity-0 transition duration-300" />
          </div>
        </>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
    </div>
  );
}