import Image from "next/image";

export default function EventsPage() {
  const images = [
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
  ];

  return (
    <main className="bg-black min-h-screen px-6 py-24 text-white">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-serif mb-16 text-center">
          Events <span className="text-yellow-400">& Weddings</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden group">
              <Image
                src={src}
                alt="Event photography"
                width={600}
                height={800}
                className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
