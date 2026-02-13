'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface GalleryImage {
  title: string;
  img: string;
}

export default function Gallery() {
  const images: GalleryImage[] = [
    { title: 'Wedding', img: '/images/wedding1.jpeg' },
    { title: 'Portrait', img: '/images/Outdor.jpeg' },
    { title: 'Events', img: '/images/studio2.jpeg' },
    { title: 'Lifestyle', img: '/images/outdoor.jpeg' },
    { title: 'Nature', img: '/images/studio.jpeg' },
    { title: 'Urban', img: '/images/event.jpeg' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    fade: false,
    cssEase: 'linear',
  };

  return (
    <section className="bg-black py-10">
      <div className="max-w-5xl mx-auto px-4">
        <Slider {...settings}>
          {images.map((image, idx) => (
            <div
              key={idx}
              className="w-full rounded-xl overflow-hidden"
            >
              {/* Set explicit width/height instead of fill */}
              <Image
                src={image.img}
                alt={image.title}
                width={1200}
                height={700}
                className="w-full h-[450px] md:h-[500px] object-cover rounded-xl"
                priority={idx === 0}
              />

              <div className="absolute bottom-3 left-3 z-10">
                <h2 className="text-white text-xs tracking-[0.2em] uppercase font-light">
                  {image.title}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .slick-slide {
          display: flex !important;
          justify-content: center;
        }
      `}</style>
    </section>
  );
}
