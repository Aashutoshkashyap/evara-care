export default function BeautifySection() {
  return (
    <section id="about" className="w-full bg-[#eef2f8] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left — Text Content */}
        <div className="w-full md:w-[40%] flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-5 leading-snug">
            Caring for Your Family,<br/> No Matter the Distance.
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-[400px]">
            Working abroad means you can&apos;t always be there in person. Avoracare is a dedicated family care coordination system. We bridge the gap by managing doctor appointments, delivering medicines, facilitating lab tests, and providing emergency support locally.
          </p>
          <button className="bg-[#0e142a] hover:bg-[#0e142a] text-white px-10 py-4 rounded-full font-bold tracking-wider text-sm transition-colors shadow-lg">
            LEARN MORE
          </button>
        </div>

        {/* Right — Image with decorative circle */}
        <div className="w-full md:w-[60%] relative flex justify-center items-center min-h-[500px]">
          {/* Decorative teal circle behind the image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-[#0e142a] rounded-full -z-0 translate-x-[30%]"></div>
          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80"
            alt="Caring for elderly family member"
            className="relative z-10 w-full max-w-[400px] h-[480px] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
