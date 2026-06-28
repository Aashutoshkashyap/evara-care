import { ArrowRight } from "lucide-react";

export default function PromoSection() {
  return (
    <section className="w-full bg-[#f4f7f8] py-16 md:py-24 my-16 overflow-hidden relative">
      {/* Decorative background grid/pattern on the right side */}
      <div className="absolute top-0 right-0 w-[40%] h-full opacity-30 bg-[linear-gradient(45deg,#e5e7eb_25%,transparent_25%,transparent_50%,#e5e7eb_50%,#e5e7eb_75%,transparent_75%,transparent_100%)] bg-[length:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* Floating white dot decoration */}
        <div className="absolute -top-10 left-1/3 w-10 h-10 bg-white/60 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm hidden md:flex">
           <div className="w-2 h-2 bg-white rounded-full shadow-md"></div>
        </div>

        {/* Left Text */}
        <div className="w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left z-10">
          <p className="text-gray-600 font-bold mb-4 text-sm tracking-wide">Complete Health Packages</p>
          <h2 className="text-4xl md:text-[42px] font-black text-gray-900 mb-10 uppercase tracking-tighter leading-tight">
            OFFER ENDS IN 1 DAY
          </h2>
          
          <button className="bg-[#182350] hover:bg-[#182350] text-white px-8 py-4 flex items-center gap-2 font-bold transition-colors text-sm rounded shadow-xl">
            Book Now <ArrowRight size={18} />
          </button>
          
          {/* Decorative Arrow SVG Sketch */}
          <div className="mt-8 ml-0 md:ml-20 opacity-80">
            <svg width="80" height="60" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 65C15 45 45 15 85 5" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4"/>
              <path d="M70 5L85 5L80 20" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[55%] relative mt-16 md:mt-0 flex justify-center items-center">
           {/* Decorative curved dashed line */}
           <div className="absolute inset-0 m-auto w-[120%] h-auto max-w-[650px] border border-gray-400 rounded-full scale-x-150 rotate-[-12deg] opacity-20 pointer-events-none -z-10" style={{ borderStyle: 'dashed' }}></div>
           
           <img 
             src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80" 
             alt="Health Packages"
             className="w-full max-w-[550px] h-auto object-contain drop-shadow-2xl mix-blend-multiply z-10 hover:scale-105 transition-transform duration-700"
           />
           
           {/* Dots */}
           <div className="absolute top-10 right-10 w-3 h-3 bg-secondary rounded-full"></div>
           <div className="absolute bottom-10 left-10 w-4 h-4 bg-white shadow-md rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-primary-light rounded-full"></div>
           </div>
        </div>
      </div>
    </section>
  );
}
