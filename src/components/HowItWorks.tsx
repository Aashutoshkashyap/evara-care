export default function HowItWorks() {
  return (
    <section id="services" className="w-full bg-[#f9fafb] py-24">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="border border-gray-200 bg-white text-gray-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111] mb-4">
            Seamless Care &<br /> Complete Coordination
          </h2>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            Evara connects every dot in your family&apos;s healthcare journey. <br className="hidden md:block" />
            Find, book, and manage health services all in one centralized platform.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 — Doctor Visits */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-end min-h-[380px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
              <img src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=600&q=80" alt="Doctor home visit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[240px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Doctor Home Visits</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Qualified physicians come directly to your parents&apos; home. No travel, no waiting rooms — just quality care at their doorstep.
              </p>
            </div>
          </div>

          {/* Card 2 — Specialist Network */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-end min-h-[380px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" alt="Medical specialists" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[240px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Specialist Referrals</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Access a curated network of cardiologists, neurologists, orthopedics and more. We book, coordinate, and report back to you.
              </p>
            </div>
          </div>

          {/* Card 3 — Lab Tests */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-end min-h-[380px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
              <img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=600&q=80" alt="Lab technician" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[240px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">At-Home Lab Tests</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Blood work, urine tests, glucose monitoring — all performed at home by certified technicians. Results sent directly to your dashboard.
              </p>
            </div>
          </div>

          {/* Card 4 — Pharmacy Delivery (wide) */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col justify-end min-h-[340px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
              <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80" alt="Pharmacy medicines" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[220px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Pharmacy Delivery & Prescription Management</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-lg">
                Never let your family run out of medication. We manage prescriptions, set up automatic refill reminders, and deliver medicines right to their doorstep.
              </p>
            </div>
          </div>

          {/* Card 5 — Emergency Ambulance */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col justify-end min-h-[340px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80" alt="Emergency medical response" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[220px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Emergency Response</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                24/7 emergency coordination with ambulance dispatch. One call from anywhere in the world and we mobilize immediately.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
