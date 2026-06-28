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
            Evara connects every dot in your family's healthcare journey. <br className="hidden md:block" />
            Find, book, and manage health services all in one centralized platform.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Top Row: 3 Cards */}
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-end min-h-[380px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" alt="Personalized Care" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[240px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Personalized Care</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Tailor healthcare plans for every family member. Keep track of vitals and specific medical needs effortlessly.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-end min-h-[380px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
              <img src="https://images.unsplash.com/photo-1551076805-e18690c5e561?auto=format&fit=crop&w=600&q=80" alt="Find Specialists" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[240px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Find Specialists</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Search and discover top-rated doctors and specialists in your area. Book appointments instantly.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-end min-h-[380px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
               <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80" alt="Track Progress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[240px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Track Progress</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Monitor recovery and wellness trends over time. Get insights and detailed analytics on your family's health journey.
              </p>
            </div>
          </div>

          {/* Bottom Row: 2 Wider Cards */}
          
          {/* Card 4 (Col span 2 on md) */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col justify-end min-h-[340px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
               <img src="https://images.unsplash.com/photo-1584308666744-24d5e4a8677c?auto=format&fit=crop&w=800&q=80" alt="Manage Prescriptions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[220px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Manage Prescriptions & Reminders</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-lg">
                Never miss a dose. Automatically import prescriptions and set up recurring reminders for the whole family. Seamlessly order refills directly to your door.
              </p>
            </div>
          </div>

          {/* Card 5 (Col span 1 on md) */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col justify-end min-h-[340px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[220px]">
                <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80" alt="Centralized Records" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-[220px]">
              <h3 className="font-bold text-[#111] text-lg mb-2">Centralized Records</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Keep all medical records, lab results, and vaccination histories in one secure, easily accessible place.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
