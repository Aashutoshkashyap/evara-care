import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic Care",
      price: "$49",
      period: "/month",
      description: "Essential care coordination for one parent.",
      features: [
        "1 Monthly Doctor Consult",
        "Prescription refill tracking",
        "Basic health dashboard access",
        "Email support (24hr response)",
      ],
      ctaText: "Start Basic Plan",
      isPopular: false,
      color: "bg-gray-100 text-gray-900",
    },
    {
      name: "Family Premium",
      price: "$129",
      period: "/month",
      description: "Complete peace of mind for up to two parents.",
      features: [
        "Unlimited Telehealth Consults",
        "Free monthly medicine delivery",
        "At-home lab test coordination",
        "Real-time vitals dashboard",
        "Priority 24/7 care hotline",
      ],
      ctaText: "Start Premium Plan",
      isPopular: true,
      color: "bg-[#e0f2fe] text-[#0369a1]",
    },
    {
      name: "Total Wellness",
      price: "$249",
      period: "/month",
      description: "White-glove healthcare for the whole family.",
      features: [
        "Everything in Premium",
        "Dedicated personal Care Manager",
        "Emergency ambulance coverage",
        "Specialist referral network access",
        "Annual comprehensive checkup",
      ],
      ctaText: "Contact Sales",
      isPopular: false,
      color: "bg-gray-100 text-gray-900",
    },
  ];

  return (
    <section id="pricing" className="w-full bg-white py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="border border-gray-200 bg-white text-gray-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm inline-block">
            Simple Subscriptions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111] mb-4">
            Care Plans Built for Distance
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Choose a monthly subscription plan that fits your family's needs. We manage the care, you simply cover the subscription and direct medical costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-[2rem] border ${plan.isPopular ? 'border-blue-200 shadow-xl' : 'border-gray-200 shadow-sm'} p-2 flex flex-col`}
            >
              <div className={`${plan.color} rounded-t-[1.5rem] rounded-b-xl p-8 pt-10 text-center relative overflow-hidden`}>
                {plan.isPopular && (
                  <div className="absolute top-4 right-4 bg-white text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1 mb-4">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-sm font-medium opacity-80 mb-1">{plan.period}</span>
                </div>
                <p className="text-xs opacity-90 font-medium px-4">{plan.description}</p>
                
                {/* Overlapping Button */}
                <button className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-[80%] py-3 rounded-full font-bold text-sm shadow-lg transition-transform hover:-translate-y-1 ${plan.isPopular ? 'bg-[#0f766e] text-white hover:bg-[#115e59]' : 'bg-[#0f766e] text-white hover:bg-[#115e59]'}`}>
                  {plan.ctaText}
                </button>
              </div>

              <div className="px-8 pt-12 pb-8 flex-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">What's included</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="mt-0.5 bg-green-100 p-1 rounded-full text-green-600 flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
