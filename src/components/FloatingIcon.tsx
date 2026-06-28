import { Stethoscope, Pill, HeartPulse, Cross, Syringe, Activity, ShieldCheck, Thermometer } from "lucide-react";

export type IconName = "stethoscope" | "pill" | "heart" | "first-aid" | "syringe" | "activity" | "shield" | "thermometer";

interface FloatingIconProps {
  name: IconName;
  className?: string;
  color?: "teal" | "orange" | "blue" | "pink";
}

export default function FloatingIcon({ name, className = "", color = "teal" }: FloatingIconProps) {
  const Icon = {
    stethoscope: Stethoscope,
    pill: Pill,
    heart: HeartPulse,
    "first-aid": Cross,
    syringe: Syringe,
    activity: Activity,
    shield: ShieldCheck,
    thermometer: Thermometer
  }[name];

  const colorStyles = {
    teal: "text-primary bg-primary/10 drop-shadow-[0_20px_20px_rgba(0,0,128,0.2)]",
    orange: "text-secondary bg-secondary/10 drop-shadow-[0_20px_20px_rgba(249,115,22,0.2)]",
    blue: "text-blue-500 bg-blue-500/10 drop-shadow-[0_20px_20px_rgba(59,130,246,0.2)]",
    pink: "text-pink-500 bg-pink-500/10 drop-shadow-[0_20px_20px_rgba(236,72,153,0.2)]",
  };

  return (
    <div className={`flex items-center justify-center rounded-full ${colorStyles[color]} ${className}`}>
      <Icon className="w-1/2 h-1/2" strokeWidth={1.5} />
    </div>
  );
}
