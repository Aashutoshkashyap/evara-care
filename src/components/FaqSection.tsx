"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the monthly subscription work?",
      answer: "Your monthly subscription covers our ongoing care coordination, 24/7 support hotline, health record management, and access to our network. You simply pay the subscription, and we handle all the logistics. Actual medical bills (like doctor fees or pharmacy costs) are billed transparently as they occur.",
    },
    {
      question: "Can my parents request care directly if I am busy?",
      answer: "Yes! While you can request services via your diaspora dashboard, your parents can also call our local care hotline directly at any time. We will arrange their care and immediately notify you on your dashboard so you're always in the loop.",
    },
    {
      question: "What types of healthcare services do you coordinate?",
      answer: "We offer comprehensive coordination: from routine doctor home visits, specialist referrals, and lab tests at home, to pharmacy deliveries and emergency ambulance transport. If it's a medical need, we find a way to fulfill it.",
    },
    {
      question: "How do you keep me updated on my family's health while I'm abroad?",
      answer: "Every time a service is completed, a detailed report (including doctor's notes, lab results, and prescriptions) is uploaded directly to your secure Avora Care dashboard. You'll receive real-time notifications on your phone.",
    },
    {
      question: "Is emergency support included in the plans?",
      answer: "Yes, our Family Premium and Total Wellness plans include 24/7 priority access to emergency coordination. We can instantly dispatch an ambulance and notify the nearest hospital to expect your family member.",
    },
    {
      question: "How do I pay for the actual medical bills (doctors, medicines)?",
      answer: "You can load funds into your Avora Care Wallet or link a credit card. When a doctor visits or medicine is delivered, we transparently deduct the exact cost of the service. No hidden markups.",
    },
  ];

  return (
    <section id="faq" className="max-w-3xl mx-auto px-8 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#020924] mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-[15px]">
          Everything you need to know about Avora Care.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-xl overflow-hidden transition-colors ${
              openIndex === index ? "border-[#020924]/30 bg-[#020924]/5" : "border-gray-200 bg-white"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <span className={`font-semibold text-[15px] pr-4 ${openIndex === index ? "text-[#020924]" : "text-[#111]"}`}>
                {faq.question}
              </span>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-[#020924]" : "text-gray-400"
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
