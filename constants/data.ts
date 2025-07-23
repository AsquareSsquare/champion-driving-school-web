import {
  AboutCard,
  Branch,
  Contact,
  Course,
  Language,
} from "@/types/root-types";
import { Clock, Mail, MapPin, Phone, Shield, Users } from "lucide-react";

export const languageCode: Language[] = [
  {
    label: "English",
    code: "en",
  },
  {
    label: "Bengali",
    code: "bn",
  },
];

export const navItems = [
  "home",
  "about",
  "branches",
  "courses",
  // "gallery",
  "contact",
];

export const abouts: AboutCard[] = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Modern vehicles with advanced safety features and comprehensive insurance coverage for peace of mind.",
    gradient: "from-blue-100 to-indigo-100",
    hoverGradient: "group-hover:from-blue-200 group-hover:to-indigo-200",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Certified professionals with years of experience and a passion for teaching safe driving habits.",
    gradient: "from-emerald-100 to-green-100",
    hoverGradient: "group-hover:from-emerald-200 group-hover:to-green-200",
    iconColor: "text-emerald-600",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description:
      "Book lessons at your convenience with our easy online scheduling system and flexible timing.",
    gradient: "from-purple-100 to-violet-100",
    hoverGradient: "group-hover:from-purple-200 group-hover:to-violet-200",
    iconColor: "text-purple-600",
  },
];

export const branches: Branch[] = [
  {
    title: "Jalchak branch",
    location:
      "beside Tvs and hero showroom, Jalchak, Gokul Chak, West Bengal 721155",
    phone: "+91 8768015877",
    timings: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM",
    features: [
      "Modern vehicles",
      "Experienced instructors",
      "Theory classroom",
    ],
  },
  {
    title: "Moyna branch",
    location: "7Q2G+7W7, Moyna, Road, Mundumari, Garmayna, West Bengal 721629",
    phone: "+91 8768015877",
    timings: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM",
    features: [
      "Dual-control cars",
      "Simulation training",
      "Test route practice",
    ],
  },
];

export const courses: Course[] = [
  {
    title: "Car Driving Course",
    days: "22 days",
    price: "8000",
    offers: [
      "Complete car driving training",
      "Theory and practical classes",
      "Highway and city driving",
      "Parking techniques",
      "Traffic rules and safety",
      "License test preparation",
    ],
    popular: false,
  },
  {
    title: "Car + Bike Driving Course",
    days: "22 days",
    price: "9000",
    offers: [
      "Complete car driving training",
      "Complete bike driving training",
      "Theory for both vehicles",
      "Separate practical sessions",
      "Traffic rules for both",
      "Dual license preparation",
    ],
    popular: true,
  },
];

export const contactOptions: Contact[] = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8768015877",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@driveacademy.com",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Main Street, Your City, State 12345",
    gradient: "from-purple-500" + " to-violet-500",
  },
];
