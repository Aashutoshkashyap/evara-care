import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic Care",
      price: "$10",
      period: "/month",
      description: "Essential care coordination for one parent.",
      features: [
        "Parent profile",
        "Medicine reminder setup",
        "Appointment reminders",
        "Prescription storage",
        "Basic care timeline",
        "Monthly summary",
        "Basic support",
      ],
      ctaText: "Start Basic Plan",
      isPopular: false,
      color: "bg-white text-gray-900 border-gray-200",
    },
    {
      name: "Family Premium",
      price: "$25",
      period: "/month",
      description: "Complete peace of mind for up to two parents.",
      features: [
        "Everything in Basic",
        "Appointment booking support",
        "Medicine refill tracking",
        "Clinic update coordination",
        "Care coordinator support",
        "Lab test coordination request",
        "Family notifications",
        "Monthly care report",
      ],
      ctaText: "Start Premium Plan",
      isPopular: true,
      color: "bg-[#020924] text-white border-[#020924] transform scale-105 shadow-2xl z-10 relative",
    },
    {
      name: "Total Wellness",
      price: "$50",
      period: "/month",
      description: "White-glove healthcare for the whole family.",
      features: [
        "Everything in Plus",
        "Dedicated care coordinator",
        "Regular check-ins",
        "Priority support",
        "Doctor follow-up coordination",
        "Hospital visit planning",
        "Medicine purchase coordination",
        "Detailed monthly health summary",
        "Emergency partner coordination if available",
      ],
      ctaText: "Contact Sales",
      isPopular: false,
      color: "bg-white text-gray-900 border-gray-200",
    },
  ];

  return (
    <section id="pricing" className="w-full bg-[#f8fafc] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="text-[#020924] font-bold tracking-widest text-sm uppercase mb-3 block">
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111] mb-6">
            Care Plans Built for Distance
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose a monthly subscription plan that fits your family's needs. We manage the care, you simply cover the subscription and direct medical costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-3xl border p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 ${plan.color}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#020924] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap tracking-wide uppercase">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <p className={`text-sm mb-6 h-10 ${plan.isPopular ? 'text-blue-200' : 'text-gray-500'}`}>{plan.description}</p>
              
              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className={`text-base font-medium mb-1 ${plan.isPopular ? 'text-blue-200' : 'text-gray-500'}`}>{plan.period}</span>
              </div>
              
              <button className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg mb-8 ${plan.isPopular ? 'bg-[#020924] text-white hover:bg-[#020924]' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                {plan.ctaText}
              </button>

              <div className="space-y-4">
                <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${plan.isPopular ? 'text-blue-200' : 'text-gray-400'}`}>What's included</p>
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full flex-shrink-0 ${plan.isPopular ? 'bg-white/20 text-white' : 'bg-blue-50 text-[#020924]'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={`text-sm font-medium leading-tight ${plan.isPopular ? 'text-gray-100' : 'text-gray-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
