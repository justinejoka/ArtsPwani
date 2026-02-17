"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const works = [
  {
    href: "/weddings",
    img: "/images/weddings/_DSC0680.jpg",
    title: "Summer Love",
    subtitle: "Wedding Story",
  },
  {
    href: "/studio",
    img: "/images/studio/20230522165645__DSC0111.jpg",
    title: "Timeless Portraits",
    subtitle: "Studio Collection",
  },
  {
    href: "/outdoor",
    img: "/images/outdoor/_DSC0755.jpg",
    title: "Nighty Moments",
    subtitle: "Outdoor Shoot",
  },
  {
    href: "/birthdays",
    img: "/images/birthday/_DSC0076.jpg",
    title: "Yatch Party",
    subtitle: "Birthday Story",
  },
];

export default function SelectedWorks() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-serif text-black">
            Selected Works
          </h2>
          <div className="w-16 h-[2px] mt-4 bg-[#F5C400]" />
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={2.2}   // middle slides fully visible, peek on first/last
          centeredSlides={false} // middle slides aligned
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {works.map((work, i) => (
            <SwiperSlide key={i}>
              <Link
                href={work.href}
                className="group relative rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Image wrapper to contain hover */}
                <div className="w-full h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-2xl">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl" />

                {/* Text */}
                <div className="absolute bottom-8 left-6 md:left-8 text-white">
                  <h3 className="text-2xl font-serif">{work.title}</h3>
                  <p className="text-sm text-white/80 mt-2">{work.subtitle}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
