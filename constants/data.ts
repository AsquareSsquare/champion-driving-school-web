import {
  AboutCard,
  AdditionalService,
  Branch,
  Contact,
  Course,
  Instructor,
  Language,
  LicenceService,
} from "@/types/root-types";
import {
  Clock,
  FileText,
  Mail,
  MapPin,
  Phone,
  RefreshCcw,
  Shield,
  Users,
} from "lucide-react";
import { MultiSelectOption } from "@/components/ui/multiselect";

// PAGES
export const SIGN_IN_PAGE = "champion-driving-sign-in";
export const DASHBOARD_PAGE = "dashboard-87680";

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
  "instructors",
  "gallery",
  "contact",
];

export const addLearnerSteps = [
  {
    step: 1,
    title: "Learners details",
  },
  {
    step: 2,
    title: "License details",
  },
  {
    step: 3,
    title: "Payment details",
  },
];

export const userRole = [
  {
    label: "Staff",
    value: "staff",
  },
  {
    label: "Admin",
    value: "admin",
  },
];

export const bookingStatus = [
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Read",
    value: "read",
  },
  {
    label: "Replied",
    value: "replied",
  },
];

export const genders = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Other",
    value: "other",
  },
];

export const paymentTypes = [
  {
    label: "Cash",
    value: "cash",
  },
  {
    label: "UPI",
    value: "upi",
  },
];

export const attendanceStatus = [
  {
    label: "Present",
    value: "present",
  },
  {
    label: "Absent",
    value: "absent",
  },
];

export const abouts: AboutCard[] = [
  {
    icon: Shield,
    title: "safety_first",
    description: "safety_first_description",
    gradient: "from-blue-100 to-indigo-100",
    hoverGradient: "group-hover:from-blue-200 group-hover:to-indigo-200",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "expert_instructors",
    description: "expert_instructors_description",
    gradient: "from-emerald-100 to-green-100",
    hoverGradient: "group-hover:from-emerald-200 group-hover:to-green-200",
    iconColor: "text-emerald-600",
  },
  {
    icon: Clock,
    title: "flexible_schedule",
    description: "flexible_schedule_description",
    gradient: "from-purple-100 to-violet-100",
    hoverGradient: "group-hover:from-purple-200 group-hover:to-violet-200",
    iconColor: "text-purple-600",
  },
];

export const branches: Branch[] = [
  {
    title: "Jalchak branch",
    address:
      "Beside Tvs and hero showroom, Jalchak, Gokul Chak, West Bengal 721155",
    phone: "+91 8768015877",
    timings: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.8810822668797!2d87.6673028!3d22.2445903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02b785b3e4d665%3A0x232b67515b96a325!2sChampion%20driving%20training%20school!5e0!3m2!1sen!2sin!4v1753703509532!5m2!1sen!2sin",
  },
  {
    title: "Moyna branch",
    address: "7Q2G+7W7, Moyna, Road, Mundumari, Garmayna, West Bengal 721629",
    phone: "+91 8768015877",
    timings: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.721035877922!2d87.77473347552214!3d22.250660779722406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02bf313a9a41e9%3A0x6a2adea2a6fde0af!2sHoglabari%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1753704666985!5m2!1sen!2sin",
  },
];

export const courses: Course[] = [
  {
    title: "Car Driving Course",
    days: "22 days",
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

export const courseSelectItems: { id: string; label: string }[] = [
  {
    label: "MCWG",
    id: "MCWG",
  },
  {
    label: "MWNG",
    id: "MWNG",
  },
  {
    label: "LMV",
    id: "LMV",
  },
  {
    label: "LMV+MCWG",
    id: "LMV+MCWG",
  },
  {
    label: "COMMERCIAL",
    id: "COMMERCIAL",
  },
  {
    label: "DLR",
    id: "DLR",
  },
  {
    label: "ONLY DRIVING",
    id: "ONLY DRIVING",
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
    value:
      "Beside Tvs and hero showroom, Jalchak, Gokul Chak, West Bengal 721155",
    gradient: "from-purple-500" + " to-violet-500",
  },
];

export const licenceServices: LicenceService[] = [
  {
    title: "title_motorcycle_without_gear",
    description: "description_motorcycle_without_gear",
    icon: "/vehicles/scooter.svg",
    tag: "MCWOG",
  },
  {
    title: "title_motorcycle_with_gear",
    description: "description_motorcycle_with_gear",
    icon: "/vehicles/motorcycle.svg",
    tag: "MCWG",
  },
  {
    title: "title_light_motor_vehicle",
    description: "description_light_motor_vehicle",
    icon: "/vehicles/car.svg",
    tag: "LMV",
  },
  {
    title: "title_non_transport",
    description: "description_non_transport",
    icon: "/vehicles/three-wheel-car.svg",
    tag: "3W-NT",
  },
  {
    title: "title_tractor_non_transport",
    description: "description_tractor_license",
    icon: "/vehicles/tractor.svg",
    tag: "TRCTOR",
  },
];

export const additionalServices: AdditionalService[] = [
  {
    title: "title_vehicle_ownership_change",
    description: "description_vehicle_ownership_change",
    icon: RefreshCcw,
  },
  {
    title: "title_police_challan_assistance",
    description: "description_police_challan_assistance",
    icon: FileText,
  },
  {
    title: "title_vehicle_insurance_services",
    description: "description_vehicle_insurance_services",
    icon: Shield,
  },
];

export const instructors: Instructor[] = [
  {
    name: "Subal Chandra Shaoo",
    designation: "Car & Motorcycle Training",
    experience: "13+",
    taught: "500+",
    certificates: ["RTO Certified", "Safety Expert"],
    image: "/instructors/Subal-chandra-shaoo.jpeg",
  },
];

export const galleryImages = [
  "/gallery/img_1.jpg",
  "/gallery/img_2.jpg",
  "/gallery/img_3.jpg",
  "/gallery/img_4.jpg",
  "/gallery/img_5.jpeg",
  "/gallery/img_6.jpeg",
];
