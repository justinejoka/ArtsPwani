"use client";

export default function QuoteSection() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      
      {/* Soft Radial Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,0,0.06),transparent_65%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Decorative Line */}
        <div className="flex justify-center mb-10">
          <div className="w-16 h-[2px] bg-yellow-500"></div>
        </div>

        {/* Large Faded Quote Mark */}
        <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[140px] md:text-[160px] font-serif text-black/5 select-none">
          “
        </span>

        {/* Main Quote */}
        <h2 className="relative text-3xl md:text-4xl font-serif text-black leading-relaxed tracking-wide">
          Photography is the art of freezing time
          <span className="block mt-6 font-light italic text-yellow-500">
            capturing emotions, stories, and beauty
          </span>
          <span className="block mt-4">
            that words cannot fully express.
          </span>
        </h2>

        {/* Signature */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="w-10 h-[1px] bg-black/30"></div>
          <p className="text-xs tracking-[0.4em] text-black/60 uppercase">
            ArtsPwani Studio Philosophy
          </p>
        </div>

      </div>
    </section>
  );
}
