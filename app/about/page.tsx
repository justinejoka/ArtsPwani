"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-black">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-black/70 z-10" />

        <Image
          src="/images/event.jpeg" 
          alt="Behind the scenes photography"
          fill
          className="object-cover"
        />

        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            Capturing Moments. <span className="text-yellow-400">Creating Stories.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Professional photography & cinematic storytelling for weddings, corporate events, drone visuals and outdoor sessions.
          </p>
        </div>
      </section>


      {/* ================= ABOUT STORY ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="text-4xl font-light mb-6">
            About <span className="text-yellow-500">ArtsPwani</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are a creative photography and videography studio passionate about turning real-life moments into timeless visuals. 
            From intimate weddings to large corporate events, we focus on storytelling through light, movement, and emotion.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With cutting-edge equipment, drone technology, and a refined artistic approach, we deliver high-quality imagery 
            that reflects your brand, personality, and unique story.
          </p>
        </div>

        <div className="relative h-[450px]">
          <Image
            src="/images/wedding2.jpeg"
            alt="Photographer at work"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-light">
            What We <span className="text-yellow-400">Offer</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Premium photography & video services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          
          {[
            {
              title: "Drone Photography & Video",
              desc: "Cinematic aerial shots for events, real estate, and outdoor visuals."
            },
            {
              title: "Corporate Events",
              desc: "Professional coverage for conferences, launches & branding events."
            },
            {
              title: "Weddings",
              desc: "Elegant storytelling that captures emotion and timeless love."
            },
            {
              title: "Outdoor & Studio",
              desc: "Creative portraits in natural light or controlled studio settings."
            },
          ].map((service, index) => (
            <div key={index} className="border border-white/10 p-8 rounded-2xl hover:border-yellow-400 transition duration-300">
              <h3 className="text-xl font-medium mb-4 text-yellow-400">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-light mb-12">
          Why Choose <span className="text-yellow-500">Us?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-gray-600">
          <div>
            <h4 className="text-xl text-black mb-4">Artistic Vision</h4>
            <p>We blend creativity with technical precision to deliver visually stunning work.</p>
          </div>

          <div>
            <h4 className="text-xl text-black mb-4">Professional Quality</h4>
            <p>High-end cameras, drones, lighting, and post-production excellence.</p>
          </div>

          <div>
            <h4 className="text-xl text-black mb-4">Client Experience</h4>
            <p>We prioritize communication, comfort, and delivering beyond expectations.</p>
          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-yellow-400 text-black py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-medium">
          Let’s Create Something Beautiful Together
        </h2>
        <Link
          href="/contact"
          className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Book a Session
        </Link>
      </section>

    </main>
  );
}
