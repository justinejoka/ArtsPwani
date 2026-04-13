"use client";

const videos = [
  { title: "Yatch Rides", id: "6ktrEy-_qK0" },
  { title: "Creek Views", id: "6ktrEy-_qK0" },
  { title: "Love Tales", id: "Rvg0xJZjAmc" },
  { title: "Wedding Ceremony", id: "ZWQ2mgnuRZQ" },
];

export default function VideosPage() {
  return (
    <section className="min-h-screen bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-white mb-12">
          Videos
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              {/* Video Container */}
              <div className="relative w-full h-80 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${video.id}`}
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Title */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}