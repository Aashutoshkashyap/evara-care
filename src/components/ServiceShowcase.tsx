const categories = ["All", "Doctors", "Pharmacy", "Care"];

const items = [
  { id: 1, title: "Blood Test Kit", price: "$ 240", image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80" },
  { id: 2, title: "Vitamins Pack", price: "$ 220", image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=400&q=80" },
  { id: 3, title: "Stethoscope", price: "$ 285", image: "https://images.unsplash.com/photo-1584982751601-97d8cb0f6669?auto=format&fit=crop&w=400&q=80" },
  { id: 4, title: "Thermometer", price: "$ 234", image: "https://images.unsplash.com/photo-1628177142898-93e46e623636?auto=format&fit=crop&w=400&q=80" },
  { id: 5, title: "First Aid Kit", price: "$ 140", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80" },
  { id: 6, title: "Health Monitor", price: "$ 440", image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80" },
];

export default function ServiceShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      {/* Header with watermark */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative">
        <div className="relative">
          <h2 className="text-3xl font-bold text-gray-900 tracking-widest z-10 relative uppercase">PRODUCT</h2>
          <span className="absolute top-1/2 -translate-y-1/2 left-24 text-7xl md:text-8xl font-black text-gray-100/60 -z-10 tracking-[0.2em] pointer-events-none select-none uppercase">
            PRODUCT
          </span>
        </div>
        
        <div className="flex items-center gap-6 mt-6 md:mt-0 z-10">
          <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
             <span className="text-sm font-bold text-secondary cursor-pointer">All</span>
          </div>
          {categories.slice(1).map((cat) => (
            <span key={cat} className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Featured Left Item */}
        <div className="lg:col-span-4 flex flex-col group cursor-pointer h-full">
          <div className="bg-[#eef2f5] mb-4 flex-1 min-h-[400px] flex items-center justify-center p-12 overflow-hidden relative">
             <img 
               src="https://images.unsplash.com/photo-1628177142898-93e46e623636?auto=format&fit=crop&w=600&q=80" 
               alt="Featured Service"
               className="w-full h-auto object-contain drop-shadow-2xl mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
             />
          </div>
        </div>

        {/* Right Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              <div className="bg-[#f8f9fa] mb-4 aspect-[4/3] flex items-center justify-center p-6 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-[80%] h-[80%] object-contain drop-shadow-lg mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-center px-1">
                <h4 className="font-semibold text-gray-800 text-[13px] tracking-wide">{item.title}</h4>
                <span className="font-bold text-secondary text-sm">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
