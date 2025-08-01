import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { z } from "zod";

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

export interface LearnerDetailsRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  date_of_birth: string;
  blood_group: string;
  gender: string;
  id_card: string;
  license_types: string[];
  total_fees: number;
  branch_id: number;
}

export interface LicenseDetailsRequest {
  student_id: number;
  learner_app_no?: string;
  learner_license_no?: string;
  dl_app_no?: string;
  driving_license_no?: string;
  notes?: string;
}

export interface PaymentDetailsRequest {
  student_id: number;
  amount_paid: number;
  payment_date: string;
  payment_method: string;
  notes: string;
}

export interface CustomModalProps<T> {
  isOpen: T;
  setIsOpen: (value: T) => void;
  header: ReactNode;
  children: ReactNode;
  className?: string;
  height?: string;
}

export interface MarkAttendancePayload {
  student_id: number;
  date: string;
  status: string;
  notes: string;
  class_number: number;
}
