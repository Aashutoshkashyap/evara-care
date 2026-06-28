import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
           <div className="w-4 h-4 bg-[#0f766e] rounded-full opacity-80 -mr-3"></div>
           <span className="font-bold text-2xl tracking-tight text-gray-900 z-10">Avoracare</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#about" className="hover:text-black transition-colors">About Us</Link>
          <Link href="#services" className="hover:text-black transition-colors">Services</Link>
          <Link href="#pricing" className="hover:text-black transition-colors">Pricing</Link>
          <Link href="#faq" className="hover:text-black transition-colors">FAQ</Link>
          <Link href="#contact" className="hover:text-black transition-colors">Contact</Link>
        </div>

        {/* Icons / Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block border border-gray-200 text-gray-700 px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors">
            Log In
          </button>
          <button className="bg-[#0f766e] hover:bg-[#115e59] text-white px-5 py-2 rounded-full font-bold text-sm transition-colors shadow-sm">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
