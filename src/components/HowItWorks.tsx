import React from 'react';

export default function HowItWorks() {
  return (
    <section id="services" className="w-full bg-[#f9fafb] py-24">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="border border-gray-200 bg-white text-gray-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
            Core Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111] mb-4">
            Complete Family Care<br /> Coordination
          </h2>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            Avora Care manages everything from daily medicine reminders to hospital visits, keeping you fully informed while you live abroad.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 — Medication */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-end min-h-[380px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
              <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80" alt="Medication Management" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[240px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Medication Management</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                We manage prescriptions, send daily medicine reminders to your parents, and coordinate seamless refills directly with trusted partner pharmacies.
              </p>
            </div>
          </div>

          {/* Card 2 — Appointments */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-end min-h-[380px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" alt="Appointment Coordination" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[240px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Appointment Coordination</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                We book doctors' appointments, send timely reminders, and provide full coordination for clinic visits so you don't have to worry from afar.
              </p>
            </div>
          </div>

          {/* Card 3 — Lab Tests */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-end min-h-[380px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
              <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80" alt="Lab Tests" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[240px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Lab & Diagnostics</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                We coordinate diagnostic tests through trusted partner labs, including booking, sample collection, and uploading reports securely.
              </p>
            </div>
          </div>

          {/* Card 4 — Timeline (wide) */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col justify-end min-h-[340px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
              <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80" alt="Care Timeline" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[220px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Care Timeline & Real-Time Notifications</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-lg">
                Stay completely informed with a live timeline of care activities. Receive instant notifications via App, SMS, or WhatsApp whenever an appointment is completed, a prescription is uploaded, or a medicine is confirmed.
              </p>
            </div>
          </div>

          {/* Card 5 — Summaries */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col justify-end min-h-[340px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Health Summaries" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[220px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Monthly Summaries</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Build lasting trust with comprehensive monthly health reports tracking appointments, medicines, lab results, and care notes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
