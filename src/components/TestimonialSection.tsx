import { Star } from "lucide-react";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} fill="#f59e0b" className="text-amber-400" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[#f8fafc] py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="text-center mb-16 relative z-10">
          <span className="text-[#020924] font-bold tracking-widest text-sm uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111] mb-6">
            Listen from our users
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start relative z-10">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6 pt-12">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm relative group hover:shadow-md transition-shadow">
              <span className="text-[100px] text-[#f1f5f9] font-serif leading-none absolute -top-4 -left-2 z-0 transition-transform group-hover:-translate-y-2">&ldquo;</span>
              <div className="relative z-10">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  "I live in Dubai and my parents are in Kathmandu. When my father needed an urgent cardiologist visit, Avora Care arranged everything within hours. I got the full report on my phone the same evening."
                </p>
                <div className="flex items-center gap-4">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Rajesh" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-[#111]">Rajesh Sharma</p>
                    <p className="text-gray-400 text-xs">Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Blue accent */}
            <div className="bg-[#020924] text-white rounded-3xl p-8 shadow-lg relative group hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start mb-6">
                <Stars count={5} />
                <span className="text-5xl text-white/20 font-serif leading-none absolute top-6 right-6">&rdquo;</span>
              </div>
              <p className="text-blue-50 text-sm leading-relaxed mb-6 font-medium">
                "The 24/7 care coordination has been incredible. Having a dedicated team manage my parents' health while I work in Seoul has given our family complete peace of mind."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Bikram" className="w-12 h-12 rounded-full object-cover border-2 border-white/20" />
                <div>
                  <p className="font-bold text-white">Bikram Rai</p>
                  <p className="text-blue-200 text-xs">Seoul, South Korea</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {/* Card 3 - Image breakout */}
            <div className="bg-white rounded-3xl p-8 shadow-sm relative mt-8 text-center group hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80" alt="Priya" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg absolute -top-10 left-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform" />
              <div className="mt-8 flex justify-center mb-4"><Stars /></div>
              <h3 className="font-bold text-[#111] text-lg mb-3">Exceptional service!</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "My father had a sudden fever at midnight. I called the Avora Care hotline from London and they had a doctor at his home within 90 minutes. The follow-up was thorough."
              </p>
              <p className="font-bold text-[#020924]">Priya Thapa</p>
              <p className="text-gray-400 text-xs">London, UK</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm group hover:shadow-md transition-shadow">
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "My mother needed regular lab tests. Avora Care sends a technician to her home every month, and the results go straight to my dashboard. It has made managing her condition so much easier."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Anita" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-[#111]">Anita Gurung</p>
                  <p className="text-gray-400 text-xs">Sydney, Australia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 pt-16">
            {/* Card 5 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm relative group hover:shadow-md transition-shadow">
              <span className="text-[100px] text-[#f1f5f9] font-serif leading-none absolute -top-4 left-4 z-0">&ldquo;</span>
              <p className="text-gray-900 font-bold text-sm leading-relaxed mt-6 mb-4 relative z-10">
                "The ambulance response saved my father's life."
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                "He had a cardiac episode at 2 AM. I called Avora Care from Canada and they dispatched an ambulance immediately. He was at the hospital within 20 minutes."
              </p>
              <div className="flex items-center justify-end gap-3 relative z-10">
                <p className="font-bold text-[#020924] text-xs">Dipesh Pandey <span className="text-gray-400 font-normal"> - Toronto, Canada</span></p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm group hover:shadow-md transition-shadow">
              <div className="flex justify-start mb-4"><Stars /></div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "As a single child working abroad, the guilt of leaving my elderly parents was overwhelming. Avora Care became my trusted partner on the ground."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" alt="Arun" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-[#111]">Arun Shrestha</p>
                  <p className="text-gray-400 text-xs">Doha, Qatar</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
