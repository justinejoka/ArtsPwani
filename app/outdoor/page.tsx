import Image from "next/image";

export default function OutdoorPage() {
  const images = [
    "/images/Outdor.jpeg",
    "/images/outdoor.jpeg",
    "/images/outdoor1.jpeg",
    "/images/outdoor2.jpeg",
    "/images/outdoor3.jpeg",
    "/images/outdoor4.jpeg",
  ];

  return (
    <main className="bg-white min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Outdoor <span className="text-yellow-500">Photography</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden group">
              <Image
                src={src}
                alt="Outdoor photography"
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
