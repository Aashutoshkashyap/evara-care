import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FloatingIcon from "./FloatingIcon";

export default function FeaturedCategories() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Category 1 */}
      <div className="bg-[#fef2f2] rounded-2xl p-10 flex items-center justify-between group overflow-hidden relative min-h-[220px]">
        <div className="z-10 w-[55%]">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Health Checkup</h3>
          <p className="text-sm text-gray-600 mb-8 max-w-[200px] leading-relaxed">
            Discover advanced clinical care highlights.
          </p>
          <Link 
            href="#checkup" 
            className="inline-flex items-center text-secondary font-bold text-xs tracking-widest uppercase group-hover:gap-2 transition-all border-b border-secondary/30 pb-1"
          >
            BOOK NOW
          </Link>
        </div>
        <div className="absolute right-[-40px] bottom-[-20px] pointer-events-none">
          <FloatingIcon name="stethoscope" color="pink" className="w-[200px] h-[200px] bg-white group-hover:scale-110 transition-transform duration-500" />
        </div>
      </div>

      {/* Category 2 */}
      <div className="bg-[#f0f9ff] rounded-2xl p-10 flex items-center justify-between group overflow-hidden relative min-h-[220px]">
        <div className="z-10 w-[55%]">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Pharmacy</h3>
          <p className="text-sm text-gray-600 mb-8 max-w-[200px] leading-relaxed">
            Order medicines online with fast delivery.
          </p>
          <Link 
            href="#pharmacy" 
            className="inline-flex items-center text-secondary font-bold text-xs tracking-widest uppercase group-hover:gap-2 transition-all border-b border-secondary/30 pb-1"
          >
            ORDER NOW
          </Link>
        </div>
        <div className="absolute right-[-20px] bottom-[-20px] pointer-events-none">
          <FloatingIcon name="pill" color="blue" className="w-[180px] h-[180px] bg-white group-hover:scale-110 transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
}
