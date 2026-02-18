"use client";

import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";

const YELLOW = "#F5C400";

export default function Hero() {
  return (
    <section className="relative bg-[#FAF9F7]">
      <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT: Text */}
        <div className="space-y-8">

          {/* Brand Label */}
          <div className="flex items-center gap-3 group">

            <div className="relative flex items-center justify-center 
                  w-11 h-11 rounded-full 
                  bg-[#F5C400]/10">

              {/* Glow Pulse */}
              <span className="absolute inset-0 rounded-full 
                     bg-[#F5C400] opacity-20 
                     animate-cameraGlow"></span>

              {/* Camera Icon */}
              <Camera className="w-5 h-5 text-[#F5C400] 
                       animate-cameraFloat
                       transition-transform duration-500 
                       group-hover:scale-110 group-hover:rotate-6" />
            </div>

            <span className="text-sm tracking-[0.3em] uppercase text-black/60">
              Visual Storytelling
            </span>

          </div>


          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight text-black">
            Capturing Life’s <br />
            <span className="relative inline-block">
              Precious Moments
              <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-[#F5C400]
                       animate-[expandLine_1.2s_ease_forwards_0.5s]"></span>
            </span>
          </h1>

          {/* Paragraph */}
          <p className="max-w-md text-black/70 text-base leading-relaxed">
            We believe photography is more than an image it is a story,
            an emotion, a moment preserved forever.
          </p>

          {/* Button */}
          <Link
            href="/gallery"
            className="group relative inline-flex items-center gap-3 
               px-8 py-3 rounded-full 
               bg-black text-white text-sm tracking-wider
               transition-all duration-300 ease-out
               hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(245,196,0,0.35)]"
          >
            <span className="relative z-10">VIEW GALLERY</span>

            <ArrowRight className="w-4 h-4 relative z-10 
                           transition-transform duration-300 
                           group-hover:translate-x-1" />

            {/* Yellow Glow Layer */}
            <span className="absolute inset-0 rounded-full 
                     bg-[#F5C400] opacity-0 
                     group-hover:opacity-10 
                     transition duration-300"></span>
          </Link>

        </div>

        {/* RIGHT: Image */}
        <div className="relative">
          <div className="relative flex justify-center">
            <div className="w-[90%] overflow-hidden rounded-2xl shadow-xl border border-gray-200 
                  sm:h-[300px] md:h-[450px] lg:h-[450px]">
              <video
                src="https://8zx5xld4et71gee1.public.blob.vercel-storage.com/CREEK.mp4"
                poster="/images/poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>




          {/* subtle decorative line (artistic touch) */}
          <span className="absolute -bottom-6 -left-6 h-24 w-24 border border-black/10" />
        </div>

      </div>
    </section>
  );
}
