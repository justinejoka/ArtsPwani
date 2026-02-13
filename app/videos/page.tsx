export default function VideosPage() {
  const videos = [
    "PxhWvLiHYwo",
    "Scxs7L0vhZ4",
  ];

  return (
    <main className="bg-black min-h-screen px-6 py-24 text-white">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Cinematic <span className="text-yellow-400">Films</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((id, index) => (
            <div key={index} className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                className="w-full h-full rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
