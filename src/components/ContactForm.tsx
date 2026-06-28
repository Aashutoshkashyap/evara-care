export default function ContactForm() {
  return (
    <section id="contact" className="w-full bg-white py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f766e] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Have questions about how Evara can help your family back home? Our team is ready to answer all your questions and help you get started.
          </p>
        </div>

        <div className="bg-[#f9fafb] p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-sm font-bold text-gray-700">First Name</label>
              <input type="text" id="firstName" placeholder="John" className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f766e] transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-sm font-bold text-gray-700">Last Name</label>
              <input type="text" id="lastName" placeholder="Doe" className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f766e] transition-all" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f766e] transition-all" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-bold text-gray-700">How can we help?</label>
              <textarea id="message" rows={4} placeholder="Tell us about your family's healthcare needs..." className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f766e] transition-all resize-none"></textarea>
            </div>
            <div className="md:col-span-2 mt-4">
              <button type="button" className="w-full bg-[#0f766e] hover:bg-[#115e59] text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-md">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
