import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d2c4a] text-white pt-24 pb-12 w-full mt-auto relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0f766e]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Description (span 4) */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col pr-8">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 bg-[#0f766e] rounded-full"></div>
              <span className="font-bold text-3xl tracking-tight text-white">Avoracare</span>
            </Link>
            <p className="text-blue-100 text-[15px] leading-relaxed mb-8 max-w-sm">
              Your trusted partner in diaspora family care coordination. We bridge the distance so you can work abroad with complete peace of mind.
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0f766e] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="text-white fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0f766e] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="text-white fill-current"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0f766e] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="text-white fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Spacer for large screens */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Column 2: Services (span 2) */}
          <div className="md:col-span-4 lg:col-span-2 flex flex-col">
            <h4 className="font-bold text-lg text-white mb-6">Services</h4>
            <ul className="space-y-4 text-[15px] text-blue-100/80">
              <li><a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-all">Doctor Consults</a></li>
              <li><a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-all">Pharmacy Delivery</a></li>
              <li><a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-all">Lab Tests</a></li>
              <li><a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-all">Emergency</a></li>
            </ul>
          </div>

          {/* Column 3: Company (span 2) */}
          <div className="md:col-span-4 lg:col-span-2 flex flex-col">
            <h4 className="font-bold text-lg text-white mb-6">Company</h4>
            <ul className="space-y-4 text-[15px] text-blue-100/80">
              <li><a href="#about" className="hover:text-white hover:translate-x-1 inline-block transition-all">About Us</a></li>
              <li><a href="#pricing" className="hover:text-white hover:translate-x-1 inline-block transition-all">Pricing Plans</a></li>
              <li><a href="#faq" className="hover:text-white hover:translate-x-1 inline-block transition-all">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info (span 3) */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col">
            <h4 className="font-bold text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-[15px] text-blue-100/80">
              <li className="flex items-start gap-3">
                <span className="text-[#0f766e]">📍</span>
                <span>123 Care Avenue, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#0f766e]">📞</span>
                <span>+977 1-4234567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#0f766e]">✉️</span>
                <span>support@avoracare.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200/60 text-sm">
            © {new Date().getFullYear()} Avoracare. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-blue-200/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
