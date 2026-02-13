'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function Partners() {
  const logos = [
    '/images/globalfund.png',
    '/images/Amreflogo.png',
    '/images/redcrosslogo.png',
    '/images/ministry-of-health-logo.png',
    '/images/kwale-logo.png',
    '/images/NationalTB Logo.png',
    
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,        // continuous
    speed: 6000,             // smoother & faster
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-10 px-4 sm:px-6 max-w-6xl mx-auto bg-white">
      <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
        Our Partners
      </h2>

      <Slider {...settings}>
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center justify-center px-4">
            <Image
              src={logo}
              alt="Partner Logo"
              width={120}     // reduced size
              height={50}
              className="object-contain hover:grayscale transition duration-300"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
