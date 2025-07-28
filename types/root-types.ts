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
  address: string;
  phone: string;
  timings: string;
  location: string;
}

export interface Course {
  title: string;
  days: string;
  offers: string[];
  popular: boolean;
}

export interface Contact {
  icon: LucideIcon;
  label: string;
  value: string;
  gradient: string;
}

export interface LicenceService {
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface AdditionalService {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Instructor {
  name: string;
  designation: string;
  experience: string;
  taught: string;
  certificates: string[];
  image?: string;
}

export interface SideBarMenu {
  title: string;
  url: string;
  icon: LucideIcon;
}
