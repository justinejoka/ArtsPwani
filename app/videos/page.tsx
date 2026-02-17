"use client";

const videos = [
  {
    title: "Wedding Ceremony",
    src: "https://8zx5xld4et71gee1.public.blob.vercel-storage.com/C%26J_TRAILER.mp4",
  },
  {
    title: "Creek Views",
    src: "https://8zx5xld4et71gee1.public.blob.vercel-storage.com/CREEK.mp4",
  },
  {
    title: "Love Tales",
    src: "https://8zx5xld4et71gee1.public.blob.vercel-storage.com/Erick%26maggy%20trailermp4.mp4",
  },
   {
    title: "Yatch Rides",
    src: "https://8zx5xld4et71gee1.public.blob.vercel-storage.com/Yatch_1.mp4",
  },
];

export default function VideosPage() {
  return (
    <section className="min-h-screen bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Videos
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Fixed Video Height */}
              <div className="h-80 w-full overflow-hidden">
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

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