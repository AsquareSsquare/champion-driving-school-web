import { LucideIcon } from "lucide-react";

export interface Language {
  label: string;
  code: string;
}

export interface AboutCard {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  hoverGradient: string;
  iconColor: string;
}

export interface Branch {
  title: string;
  location: string;
  phone: string;
  timings: string;
  features: string[];
}

export interface Course {
  title: string;
  days: string;
  price: string;
  offers: string[];
  popular: boolean;
}

export interface Contact {
  icon: LucideIcon;
  label: string;
  value: string;
  gradient: string;
}
