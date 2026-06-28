import { Stethoscope, Pill, TestTube, Ambulance } from "lucide-react";

export default function FeaturesBar() {
  const features = [
    {
      icon: <Stethoscope size={40} className="text-[#182350]" strokeWidth={1.5} />,
      title: "Doctor Consultations",
      description: "Top local specialists",
    },
    {
      icon: <Pill size={40} className="text-[#182350]" strokeWidth={1.5} />,
      title: "Pharmacy Delivery",
      description: "Medicines to their door",
    },
    {
      icon: <TestTube size={40} className="text-[#182350]" strokeWidth={1.5} />,
      title: "At-Home Lab Tests",
      description: "Convenient diagnostics",
    },
    {
      icon: <Ambulance size={40} className="text-[#182350]" strokeWidth={1.5} />,
      title: "Emergency Transport",
      description: "24/7 rapid response",
    },
  ];

  return (
    <div className="w-full bg-[#f4f7f8] py-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-6 justify-center md:justify-start">
            <div>{feature.icon}</div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
