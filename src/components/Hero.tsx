export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-[600px] md:min-h-[700px] bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1781040300902-95b8de830048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D')",
        backgroundColor: "#f3f4f6",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="max-w-7xl mx-auto w-full px-8 relative z-10 flex justify-end">
        
        {/* Floating Box on the Right */}
        <div className="bg-white/95 backdrop-blur-md p-10 md:p-12 rounded-2xl shadow-2xl w-full max-w-[480px]">
          <p className="text-[#0f766e] font-bold tracking-widest text-sm uppercase mb-3">
            Evara Family Care
          </p>
          <h1 className="text-4xl md:text-[42px] font-bold text-[#111] mb-5 leading-[1.15]">
            Distance Shouldn&apos;t <br/> Compromise Their Care
          </h1>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
            Coordinate your parents&apos; healthcare from anywhere in the world. We handle the local doctor visits, pharmacy deliveries, and emergencies — so you can have peace of mind.
          </p>
          <button className="bg-[#0f766e] hover:bg-[#115e59] text-white px-10 py-4 rounded-full font-bold transition-colors shadow-lg">
            START CARING TODAY
          </button>
        </div>

      </div>
    </section>
  );
}
