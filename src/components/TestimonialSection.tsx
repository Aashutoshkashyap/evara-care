"use client";

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
    <section className="w-full bg-[#eef0f3] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6 md:gap-8 mt-12 md:mt-0">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm relative mt-4">
              <span className="text-[120px] text-gray-300 font-serif leading-none absolute -top-8 -left-6 z-0 drop-shadow-md">&ldquo;</span>
              <div className="relative z-10">
                <p className="text-gray-600 text-[11px] leading-relaxed mb-6 font-medium">
                  Sodales ut etiam sit amet nisl. Semper feugiat nibh sed pulvinar proin gravida facilisi morbi tempus.
                </p>
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="James" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-[#0f766e] text-xs">James Brown</p>
                    <p className="text-primary text-[10px]">CEO Caring Family · @YourMedApp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <p className="text-gray-600 text-[11px] leading-relaxed mb-6 font-medium">
                Eget mauris pharetra et ultrices neque omare. Leo integer malesuada nunc sit vel. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Morbi non arcu risus quis varius. Tincidunt augue interdum velit euismod. Semper feugiat nibh sed pulvinar proin gravida.
              </p>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Victoria" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-[#0f766e] text-xs">Victoria Wotton</p>
                  <p className="text-primary text-[10px]">Fermentum Odio Co.</p>
                </div>
              </div>
            </div>

            {/* Card 3 with speech bubble tail */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm relative">
                <h3 className="font-bold text-[#0f766e] text-lg mb-2 text-center">I was very impressed!</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed mb-4 text-center font-medium">
                  Diam maecenas ultricies mi eget. In nulla posuere sollicitudin aliquam. Adipiscing enim eu turpis egestas pretium aenean. Vitae ultricies leo integer malesuada nunc vel.
                </p>
                <p className="font-bold text-[#0f766e] text-[11px] text-center">Wilkins Micawber</p>
                
                {/* Speech tail */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[20px] border-transparent border-t-white"></div>
              </div>
              
              {/* Avatars below tail */}
              <div className="flex justify-center gap-2 mt-8">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" className="w-12 h-12 rounded-full object-cover border-4 border-[#eef0f3] shadow-sm" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" className="w-16 h-16 rounded-full object-cover border-4 border-[#eef0f3] shadow-md -mt-2" />
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" className="w-12 h-12 rounded-full object-cover border-4 border-[#eef0f3] shadow-sm" />
              </div>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm relative mt-12 text-center">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80" alt="Hindley" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md absolute -top-10 left-1/2 -translate-x-1/2" />
              <div className="mt-8 flex justify-center mb-3"><Stars /></div>
              <h3 className="font-bold text-[#0f766e] text-lg mb-2">I really appreciate!!</h3>
              <p className="text-gray-500 text-[11px] leading-relaxed mb-4 font-medium">
                Congue mauris rhoncus dese&shy;ne&shy;an vel elit. Morbi non arcu risus quis varius. Tincidunt augue interdum velit euismod.
              </p>
              <p className="font-bold text-[#0f766e] text-xs">Hindley Earnshaw</p>
              <p className="text-primary text-[10px]">@Hindley.Es</p>
              <span className="text-[100px] text-[#2c3e50] font-serif leading-none absolute -bottom-10 right-4 drop-shadow-md">&rdquo;</span>
            </div>

            {/* Card 5 (Linda Burns - Now reduced with center-top avatar) */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm relative mt-10 text-center">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" alt="Customer" className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md absolute -top-8 left-1/2 -translate-x-1/2" />
              <div className="mt-6 flex justify-center mb-3"><Stars /></div>
              <p className="text-gray-500 text-[11px] leading-relaxed mb-4 font-medium">
                &ldquo;Morbi non arcu risus quis varius. Tincidunt augue interdum velit euismod. Sed imperdiet nisl ac sem ullamcorper, sed vestibulum lorem convallis.&rdquo;
              </p>
              <p className="text-gray-400 text-[12px] italic signature-font font-serif">Linda Burns</p>
            </div>

            {/* Card 5b (New Testimony to balance) */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex justify-start mb-3"><Stars count={5} /></div>
              <p className="text-gray-600 text-[11px] leading-relaxed mb-6 font-medium">
                &ldquo;The 24/7 care coordination has been incredible. Having a dedicated team has given our family complete peace of mind during emergencies.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Arthur" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-[#0f766e] text-xs">Arthur Pendelton</p>
                  <p className="text-primary text-[10px]">Patient</p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm relative mt-10 text-center">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80" alt="Isabella" className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md absolute -top-8 left-1/2 -translate-x-1/2" />
              <div className="mt-6 flex justify-center mb-3"><Stars /></div>
              <p className="text-gray-500 text-[11px] leading-relaxed mb-4 font-medium">
                &ldquo;Sodales ut etiam sit amet nisl. Semper feugiat nibh sed pulvinar proin amet nula morbi eu non gravida.&rdquo;
              </p>
              <p className="text-gray-400 text-[14px] italic signature-font font-serif">Isabella Lester</p>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6 md:gap-8 mt-12 md:mt-0">
            {/* Card 7 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm relative mt-12 text-center">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" alt="User" className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md absolute -top-8 left-1/2 -translate-x-1/2" />
              <h3 className="font-bold text-[#0f766e] text-base mb-2 mt-6">Good Job!</h3>
              <div className="flex justify-center mb-3"><Stars /></div>
              <p className="text-gray-500 text-[11px] leading-relaxed font-medium">
                Semper feugiat nibh sed pulvinar proin gravida facilisi morbi tempus iacu&shy;lis pharetra convallis.
              </p>
            </div>

            {/* Card 8 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm relative mt-6">
              <span className="text-[60px] text-gray-300 font-serif leading-none absolute top-4 left-4">&ldquo;</span>
              <p className="text-gray-600 text-[11px] leading-relaxed mt-4 mb-4 font-medium relative z-10 font-bold">
                Cras fermentum odio eu feugiat pretium nibh nulla a sit.
              </p>
              <p className="text-gray-500 text-[10px] leading-relaxed mb-6 font-medium relative z-10">
                Consequat sit amet nulla facilisi morbi tempus iaculis. Nullam vehicula ipsum a arcu cursus. Pretium vulputate sapien nec sagittis aliquam.
              </p>
              <div className="flex items-center justify-end gap-3 relative z-10">
                <p className="font-bold text-[#0f766e] text-[10px]">Henry Vane - <span className="text-primary font-normal">Fermentum Co.</span></p>
              </div>
              <span className="text-[60px] text-[#2c3e50] font-serif leading-none absolute top-4 right-4">&rdquo;</span>
            </div>

            {/* Card 9 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <p className="text-gray-600 text-[11px] leading-relaxed mb-6 font-medium">
                &ldquo;Enim lobortis scelerisque fermentum dui faucibus. Sodales ut etiam sit amet nisl. Semper feugiat nibh sed pulvinar proin gravida facilisi morbi.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" alt="Basil" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-[#0f766e] text-xs">Basil Hallward</p>
                  <p className="text-primary text-[10px]">Co-Founder Gravida.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
