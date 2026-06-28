import React from 'react';

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-white py-24">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="border border-gray-200 bg-gray-50 text-gray-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm inline-block">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111] mb-8 leading-tight">
            Bridging the Distance for <br className="hidden md:block" />
            <span className="text-[#020924]">Families Abroad</span>
          </h2>
        </div>
        
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed md:text-xl">
          <p>
            <strong className="text-gray-900 font-semibold">Avora Care</strong> is a healthcare coordination platform built to help Nepali families living abroad take care of their parents, relatives, and loved ones back home in Nepal.
          </p>
          
          <p>
            The core purpose of Avora Care is to solve a very common problem faced by Nepali diaspora families: they want to support their parents' healthcare needs in Nepal, but they are not physically present to coordinate appointments, medicine, lab tests, follow-ups, hospital visits, and regular health updates.
          </p>
          
          <p>
            Avora Care is designed as a family healthcare coordination platform, not just a doctor booking app, medicine delivery app, or elderly care service. It combines software, care coordination, partner clinics, reminders, family updates, and human support to create trust between the family abroad and the care recipient in Nepal.
          </p>
          
          <div className="bg-[#020924]/5 border-l-4 border-[#020924] p-6 mt-8 rounded-r-xl">
            <h3 className="font-bold text-gray-900 text-lg mb-2">In simple terms:</h3>
            <p className="text-gray-800 font-medium italic">
              "Avora Care helps families care for their loved ones in Nepal, even when they are abroad."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
