import React from 'react';
import { CheckCircle2, Info, CalendarCheck, FileText, Pill, Activity, FlaskConical, Bell, LayoutList, PieChart, Stethoscope } from 'lucide-react';

export default function HowItWorks() {
  const services = [
    {
      id: "10.1",
      title: "Medicine Reminder Service",
      desc: "MediReach helps set up medicine schedules for parents or relatives.",
      icon: <Pill className="text-[#020924] w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      includes: [
        "Medicine name", "Dosage & Timing", "Duration", "Before/after food instruction",
        "Reminder notification", "Confirmation from parent", "Update to payer if needed"
      ],
      extra: "Works through: App notification, SMS, WhatsApp, Viber, Messenger, Phone call support (Premium)."
    },
    {
      id: "10.2",
      title: "Appointment Reminder Service",
      desc: "MediReach helps families track upcoming medical appointments.",
      icon: <CalendarCheck className="text-[#020924] w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      includes: [
        "Doctor name", "Hospital or clinic", "Date and time", "Department",
        "Required documents", "Reminder before appointment", "Visit confirmation", "Follow-up update"
      ]
    },
    {
      id: "10.3",
      title: "Appointment Booking Support",
      desc: "The payer or care recipient can request appointment booking support. Especially useful when the payer is abroad and cannot coordinate locally.",
      icon: <Stethoscope className="text-[#020924] w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      includes: [
        "Clinics", "Hospitals", "Doctors", "Diagnostic centers"
      ]
    },
    {
      id: "10.4",
      title: "Prescription Management",
      desc: "MediReach allows prescriptions to be uploaded and stored, creating a basic care history for the family.",
      icon: <FileText className="text-[#020924] w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80",
      includes: [
        "Prescription image or PDF", "Doctor notes", "Medicine instructions", 
        "Follow-up date", "Lab test requirements", "Next appointment details"
      ]
    },
    {
      id: "10.5",
      title: "Medicine Refill Coordination",
      desc: "MediReach can remind families when medicines may need to be refilled.",
      icon: <Activity className="text-[#020924] w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
      includes: [
        "Refill date", "Pharmacy coordination", "Refill confirmation", 
        "Delivery coordination through partners", "Update to payer"
      ]
    },
    {
      id: "10.6",
      title: "Clinic Visit Coordination",
      desc: "For selected plans, MediReach can help coordinate clinic or hospital visits. In future premium plans, this expands to physical assistance.",
      icon: <Activity className="text-[#020924] w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      includes: [
        "Appointment preparation", "Reminder call", "Visit status update", 
        "Prescription collection", "Follow-up note", "Family update after visit"
      ]
    },
    {
      id: "10.7",
      title: "Lab Test Coordination",
      desc: "MediReach can help coordinate diagnostic tests through partner labs.",
      icon: <FlaskConical className="text-[#020924] w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      includes: [
        "Lab test booking", "Sample collection coordination", "Report upload", 
        "Report notification to family", "Doctor follow-up reminder"
      ]
    },
    {
      id: "10.8",
      title: "Care Update Timeline",
      desc: "The payer can view a timeline of care-related activities. This gives families abroad visibility and trust.",
      icon: <LayoutList className="text-[#020924] w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      timeline: [
        "June 10 — Medicine reminder confirmed",
        "June 12 — Doctor appointment booked",
        "June 14 — Clinic visit & Prescription uploaded",
        "June 15 — Lab test requested",
        "June 16 — Lab report uploaded",
        "June 17 — Follow-up reminder scheduled"
      ]
    },
    {
      id: "10.9",
      title: "Family Notifications",
      desc: "MediReach can send important updates to the payer via App, Email, SMS, WhatsApp, Viber, or Messenger.",
      icon: <Bell className="text-[#020924] w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
      includes: [
        "Appointment booked & completed", "Prescription uploaded", "Medicine missed & confirmed",
        "Lab report received", "Follow-up required", "Coordinator note added"
      ]
    },
    {
      id: "10.10",
      title: "Monthly Health Summary",
      desc: "For Plus and Premium plans, MediReach generates monthly family health summaries. A high-value trust feature.",
      icon: <PieChart className="text-[#020924] w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      includes: [
        "Appointments completed", "Medicines tracked", "Missed reminders",
        "Uploaded prescriptions", "Lab tests completed", "Doctor follow-ups",
        "Care coordinator notes", "Pending actions"
      ]
    }
  ];

  return (
    <section id="services" className="w-full bg-[#f9fafb] py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="border border-gray-200 bg-white text-gray-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
            Core Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111] mb-4">
            MediReach Core Services
          </h2>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            MediReach provides seamless, comprehensive care coordination to ensure your family's health is managed and monitored effectively.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300">
              {/* Image */}
              <div className="w-full h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#020924] shadow-sm">
                  {service.id}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#020924]/10 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {service.includes && (
                  <div className="mt-auto">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Includes</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-[#020924] mt-0.5 shrink-0" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.timeline && (
                  <div className="mt-auto">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Example Timeline</h4>
                    <ul className="space-y-3 relative before:absolute before:inset-0 before:ml-1.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                      {service.timeline.map((item, idx) => {
                        const [date, text] = item.split(" — ");
                        return (
                          <li key={idx} className="relative flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#020924] relative z-10 shrink-0"></div>
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-[#020924]">{date}</span>
                              <span className="text-sm text-gray-600 leading-tight">{text}</span>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}

                {service.extra && (
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <p className="text-xs text-gray-500 italic">{service.extra}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
