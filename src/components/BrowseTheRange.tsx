export default function BrowseTheRange() {
  const categories = [
    {
      title: "Checkups",
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Pharmacy",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Wellness",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#182350] mb-3">
          Browse The Range
        </h2>
        <p className="text-gray-500 text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="group cursor-pointer text-center">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-[#182350]">{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
