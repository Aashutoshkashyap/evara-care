export default function InspirationCollection() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#182350] mb-3">
          Inspiration Collection
        </h2>
        <p className="text-gray-500 text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* 3-Image Staggered Grid — matches reference exactly */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">
        {/* Image 1 — Left: rounded-2xl, shorter */}
        <div className="overflow-hidden rounded-2xl bg-[#f5f5f5]">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=600&q=80"
            alt="Health checkup equipment"
            className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Image 2 — Center: NO rounding, tallest */}
        <div className="overflow-hidden bg-[#f5f5f5]">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80"
            alt="Modern clinic interior"
            className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Image 3 — Right: rounded-2xl, shortest */}
        <div className="overflow-hidden rounded-2xl bg-[#e8e8e8]">
          <img
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80"
            alt="Medical equipment"
            className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
