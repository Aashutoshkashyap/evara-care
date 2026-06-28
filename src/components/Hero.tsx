import React from "react";

export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-[600px] md:min-h-[700px] bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2000&q=80')",
        backgroundColor: "#f3f4f6", // fallback
      }}
    >
      {/* Optional overlay for better text readability if the background is too busy */}
      <div className="absolute inset-0 bg-white/20"></div>

      <div className="max-w-7xl mx-auto w-full px-8 relative z-10 flex justify-end">
        
        {/* Floating Box on the Right */}
        <div className="bg-[#e9f0f7]/95 backdrop-blur-sm p-10 md:p-12 rounded-2xl shadow-2xl w-full max-w-[450px]">
          <p className="text-[#0f766e] font-bold tracking-widest text-sm uppercase mb-3">
            Evara Family Care
          </p>
          <h1 className="text-4xl md:text-[42px] font-bold text-[#0f766e] mb-5 leading-[1.2] text-balance">
            Distance Shouldn't <br/> Compromise Their Care
          </h1>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
            Coordinate your parents' healthcare from anywhere in the world. We handle the local doctor visits, pharmacy deliveries, and emergencies, so you can have peace of mind.
          </p>
          <button className="bg-[#0f766e] hover:bg-[#115e59] text-white px-10 py-4 rounded-full font-bold transition-colors shadow-lg">
            START CARING TODAY
          </button>
        </div>

      </div>
    </section>
  );
}
