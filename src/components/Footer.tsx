import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-20 pb-16 w-full border-t border-gray-100 mt-auto">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between gap-12">
        
        {/* Column 1: Logo & Legal */}
        <div className="flex flex-col max-w-[200px] mb-8 md:mb-0">
          <Link href="/" className="flex items-center gap-2 mb-16">
            <div className="w-4 h-4 bg-[#0f766e] rounded-full opacity-80 -mr-3"></div>
            <span className="font-bold text-2xl tracking-tight text-gray-900 z-10">Evara</span>
          </Link>
          <div className="mt-auto">
            <p className="text-gray-400 text-[11px] mb-2 font-medium">
              © 2026 Evara Care. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-[11px] font-medium">
              <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a> | <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            </p>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="flex flex-col">
          <h4 className="font-bold text-sm text-gray-900 mb-6">Services</h4>
          <ul className="space-y-4 text-[12px] font-medium text-gray-400">
            <li><a href="#services" className="hover:text-gray-800 transition-colors">Doctor Consultations</a></li>
            <li><a href="#services" className="hover:text-gray-800 transition-colors">Pharmacy Delivery</a></li>
            <li><a href="#services" className="hover:text-gray-800 transition-colors">At-Home Lab Tests</a></li>
            <li><a href="#services" className="hover:text-gray-800 transition-colors">Emergency Transport</a></li>
            <li><a href="#pricing" className="hover:text-gray-800 transition-colors">Care Plans & Pricing</a></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="flex flex-col">
          <h4 className="font-bold text-sm text-gray-900 mb-6">Company</h4>
          <ul className="space-y-4 text-[12px] font-medium text-gray-400">
            <li><a href="#about" className="hover:text-gray-800 transition-colors">About Evara</a></li>
            <li><a href="#contact" className="hover:text-gray-800 transition-colors">Contact Us</a></li>
            <li><a href="#faq" className="hover:text-gray-800 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-800 transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div className="flex flex-col">
          <h4 className="font-bold text-sm text-gray-900 mb-6">Support</h4>
          <ul className="space-y-4 text-[12px] font-medium text-gray-400">
            <li><a href="#" className="hover:text-gray-800 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-800 transition-colors">Care Hotline</a></li>
            <li><a href="#" className="hover:text-gray-800 transition-colors">Partner Hospitals</a></li>
            <li><a href="#" className="hover:text-gray-800 transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Column 5: Get in touch & Socials */}
        <div className="flex flex-col max-w-[200px]">
          <h4 className="font-bold text-sm text-gray-900 mb-6">Get in touch</h4>
          <p className="text-gray-400 text-[12px] font-medium leading-relaxed mb-8">
            Questions about coordinating<br />care for your family back home?<br />We&apos;re here to help.
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <a href="#" aria-label="Facebook" className="text-gray-800 hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-800 hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-800 hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
