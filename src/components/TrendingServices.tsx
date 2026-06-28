import { Star, Plus } from "lucide-react";

const services = [
  {
    id: 1,
    title: "General Checkup",
    price: "$ 120",
    rating: 5,
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Vitamins & Meds",
    price: "$ 150",
    rating: 5,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "First Aid Kit",
    price: "$ 250",
    rating: 5,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "Dental Kit",
    price: "$ 90",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80",
  },
];

export default function TrendingServices() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trending Products</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-sm text-balance">
        There are many variations of passages of lorem ipsum available, but the majority have suffered.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        {services.map((service) => (
          <div key={service.id} className="group cursor-pointer">
            <div className="bg-[#f8f9fa] rounded-xl mb-5 aspect-[4/5] flex items-center justify-center p-8 relative">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-contain mix-blend-multiply drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h4 className="font-bold text-gray-900 text-[15px] mb-1.5">{service.title}</h4>
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  fill={i < Math.floor(service.rating) ? "#f97316" : "transparent"} 
                  className={i < Math.floor(service.rating) ? "text-[#f97316] border-none" : "text-gray-300"} 
                  strokeWidth={i < Math.floor(service.rating) ? 0 : 2}
                />
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="font-bold text-lg text-gray-900">{service.price}</span>
              <button className="text-secondary p-1 rounded-full transition-transform hover:scale-110">
                <Plus size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots (decorative) */}
      <div className="flex justify-center gap-2 mt-12">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-secondary outline outline-1 outline-offset-2 outline-secondary"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </section>
  );
}

