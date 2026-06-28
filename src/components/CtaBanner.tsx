import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-8">
        <div className="bg-[#000080] rounded-[2rem] overflow-hidden relative shadow-xl">
          
          {/* Subtle background curved lines (using SVG) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg viewBox="0 0 1000 400" className="w-full h-full object-cover">
              <path d="M-100 200 C 200 50, 400 350, 1100 150" fill="none" stroke="white" strokeWidth="2" />
              <path d="M-100 300 C 300 150, 500 450, 1100 250" fill="none" stroke="white" strokeWidth="2" />
              <path d="M-100 100 C 150 -50, 300 250, 1100 50" fill="none" stroke="white" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative z-10 p-12 md:p-20 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Try the Avoracare app <br className="hidden md:block" /> for free for 14 days
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-md mb-10">
              The first step to a healthier family takes less than a minute.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* App Store Button */}
              <button className="bg-white hover:bg-gray-100 transition-colors text-[#000080] rounded-xl px-5 py-3 flex items-center gap-3 shadow-md min-w-[160px]">
                <svg viewBox="0 0 384 512" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[10px] leading-none opacity-80 font-semibold mb-0.5">Download on the</span>
                  <span className="text-sm font-bold leading-none">App Store</span>
                </div>
              </button>

              {/* Google Play Button */}
              <button className="bg-white hover:bg-gray-100 transition-colors text-[#000080] rounded-xl px-5 py-3 flex items-center gap-3 shadow-md min-w-[160px]">
                <svg viewBox="0 0 512 512" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4caf50" d="M36.1 29.8C33.7 32 32 35.8 32 41v430c0 5.2 1.7 9 4.1 11.2l1.3 1.2L249.2 271.6v-2.9L37.4 28.5l-1.3 1.3z"/>
                  <path fill="#ffeb3b" d="M331.4 353.4l-82.2-82.2v-2.6l82.2-82.2 2.6 1.4 97.4 55.4c27.8 15.8 27.8 41.5 0 57.3l-97.4 55.4-2.6 1.5z"/>
                  <path fill="#f44336" d="M334 352l-84.8-84.8L37.4 483.5c8.9 9.5 23.5 10 39.4 1 0 0 160-91.1 257.2-132.5z"/>
                  <path fill="#2196f3" d="M334 160.1l-257.2-132.5C60.9 18.5 46.3 19 37.4 28.5L249.2 240.2 334 160.1z"/>
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[10px] leading-none opacity-80 font-semibold mb-0.5">GET IT ON</span>
                  <span className="text-sm font-bold leading-none">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
