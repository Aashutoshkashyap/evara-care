import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import BeautifySection from "@/components/BeautifySection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <FeaturesBar />
      <BeautifySection />
      <HowItWorks />
      <PricingSection />
      <TestimonialSection />
      <FaqSection />
      <ContactForm />
    </div>
  );
}
