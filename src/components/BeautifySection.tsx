import React from 'react';

export default function BeautifySection() {
  return (
    <section id="about" className="w-full bg-[#eef2f8] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left — Text Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start">
          <span className="border border-[#020924]/20 bg-[#020924]/5 text-[#020924] text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm inline-block">
            About Avora Care
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-6 leading-snug">
            Bridging the Distance for<br/> Families Abroad
          </h2>
          
          <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed mb-8">
            <p>
              <strong className="text-gray-900 font-semibold">Avora Care</strong> is a healthcare coordination platform built to help Nepali families living abroad take care of their parents, relatives, and loved ones back home in Nepal.
            </p>
            <p>
              The core purpose of Avora Care is to solve a very common problem faced by Nepali diaspora families: they want to support their parents' healthcare needs in Nepal, but they are not physically present to coordinate appointments, medicine, lab tests, follow-ups, hospital visits, and regular health updates.
            </p>
            <p>
              Avora Care is designed as a family healthcare coordination platform, not just a doctor booking app, medicine delivery app, or elderly care service. It combines software, care coordination, partner clinics, reminders, family updates, and human support to create trust between the family abroad and the care recipient in Nepal.
            </p>
            <div className="bg-[#020924]/5 border-l-4 border-[#020924] p-5 mt-6 rounded-r-xl">
              <h3 className="font-bold text-gray-900 text-sm mb-1">In simple terms:</h3>
              <p className="text-gray-800 font-medium italic text-sm">
                "Avora Care helps families care for their loved ones in Nepal, even when they are abroad."
              </p>
            </div>
          </div>
        </div>

        {/* Right — Image with decorative circle */}
        <div className="w-full lg:w-[45%] relative flex justify-center items-center min-h-[500px]">
          {/* Decorative circle behind the image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-[#020924] rounded-full -z-0 translate-x-[20%]"></div>
          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80"
            alt="Caring for elderly family member"
            className="relative z-10 w-full max-w-[420px] h-[520px] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
