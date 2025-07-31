import NavBar from "@/components/core/NavBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Branch from "@/components/sections/Branch";
import Course from "@/components/sections/Course";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Instructors from "@/components/sections/Instructors";
import Gallery from "@/components/sections/Gallery";
import type { Metadata } from "next";

// Function to generate metadata based on locale
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isBengali = locale === 'bn';

  if (isBengali) {
    return {
      title: "চ্যাম্পিয়ন ড্রাইভিং স্কুল - ময়না ও জলচকে বিশেষজ্ঞ গাড়ি ও বাইক প্রশিক্ষণ",
      description: "ময়না ও জলচকে সার্টিফায়েড প্রশিক্ষকদের সাথে পেশাদার ড্রাইভিং ক্লাস। ৯৯% পাসের হার। আজই আপনার ড্রাইভিং কোর্স বুক করুন!",
      keywords: [
        "চ্যাম্পিয়ন ড্রাইভিং স্কুল",
        "ময়নায় ড্রাইভিং ক্লাস",
        "জলচকে ড্রাইভিং ক্লাস",
        "গাড়ি ড্রাইভিং প্রশিক্ষণ",
        "বাইক ড্রাইভিং প্রশিক্ষণ",
        "ড্রাইভিং লাইসেন্স কোর্স",
        "নিরাপদ ড্রাইভিং",
        "ড্রাইভিং প্রশিক্ষক",
        "পূর্ব মেদিনীপুর ড্রাইভিং স্কুল",
        "পশ্চিমবঙ্গ ড্রাইভিং ক্লাস",
        "তমলুকে ড্রাইভিং স্কুল",
        "জলচকে সেরা ড্রাইভিং প্রশিক্ষক",
        "ময়নায় নতুনদের জন্য সেরা ড্রাইভিং স্কুল",
        "তমলুকে সেরা গাড়ি ড্রাইভিং ক্লাস",
        "জলচকে সেরা মোটরসাইকেল প্রশিক্ষণ",
        "ময়নায় সাশ্রয়ী ড্রাইভিং ক্লাস",
        "তমলুকে সাশ্রয়ী মোটরসাইকেল ড্রাইভিং ক্লাস",
        "নিমতৌড়িতে বাজেট-বান্ধব ড্রাইভিং স্কুল",
        "তমলুকে কম খরচে ড্রাইভিং লাইসেন্স প্রশিক্ষণ",
        "নিমতৌড়ির কাছে সেরা প্রশিক্ষকদের সাথে ড্রাইভিং স্কুল",
        "ময়নায় মোটরসাইকেল প্রশিক্ষণের জন্য সেরা ড্রাইভিং স্কুল",
        "তমলুকে সেরা মোটরসাইকেল ড্রাইভিং ক্লাস",
        "ময়নায় সাশ্রয়ী মোটরসাইকেল লাইসেন্স",
        "জলচকে সেরা গাড়ি ও বাইক ড্রাইভিং ক্লাস",
        "পূর্ব মেদিনীপুরে সেরা মোটরসাইকেল প্রশিক্ষণ",
        "ময়নায় সেরা নিরাপদ ড্রাইভিং কোর্স",
        "তমলুকে সেরা গাড়ি ড্রাইভিং টেস্ট প্রস্তুতি",
        "জলচকে মোটরসাইকেলের জন্য সেরা ড্রাইভিং প্রশিক্ষক"
      ],
      openGraph: {
        title: "চ্যাম্পিয়ন ড্রাইভিং স্কুল - বিশেষজ্ঞ গাড়ি ও বাইক প্রশিক্ষণ",
        description: "সার্টিফায়েড প্রশিক্ষকদের সাথে পেশাদার ড্রাইভিং ক্লাস। ৯৯% পাসের হার। আজই আপনার ড্রাইভিং কোর্স বুক করুন!",
        url: "https://www.championdrivingschool.in",
        siteName: "চ্যাম্পিয়ন ড্রাইভিং স্কুল",
        images: [
          {
            url: "/images/hero_image.jpg",
            width: 1200,
            height: 630,
            alt: "চ্যাম্পিয়ন ড্রাইভিং স্কুল - পেশাদার ড্রাইভিং প্রশিক্ষণ সুবিধা",
          },
        ],
        locale: "bn_BD",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "চ্যাম্পিয়ন ড্রাইভিং স্কুল - বিশেষজ্ঞ গাড়ি ও বাইক প্রশিক্ষণ",
        description: "সার্টিফায়েড প্রশিক্ষকদের সাথে পেশাদার ড্রাইভিং ক্লাস। ৯৯% পাসের হার।",
        images: ["/images/hero_image.jpg"],
      },
      alternates: {
        canonical: "https://www.championdrivingschool.in",
      },
    };
  }

  // English metadata (default)
  return {
    title: "Champion Driving School - Expert Car & Bike Training in Moyna & Jalchak",
    description: "Professional driving lessons with certified instructors in Moyna and Jalchak. 99% pass rate. Book your driving course today!",
    keywords: [
      "Champion Driving School",
      "driving lessons Moyna",
      "driving lessons Jalchak",
      "car driving training",
      "bike driving training",
      "driving license course",
      "defensive driving",
      "driving instructor",
      "Purba Medinipur driving school",
      "West Bengal driving lessons",
      "driving school in Tamluk",
      "best driving instructors in Jalchak",
      "best driving school for beginners in Moyna",
      "best car driving lessons in Tamluk",
      "best motorcycle training in Jalchak",
      "affordable driving lessons in Moyna",
      "affordable motorcycle driving lessons in Tamluk",
      "budget-friendly driving school in Nimtouri",
      "low-cost driving license training Tamluk",
      "driving school near Nimtouri with best instructors",
      "best driving school for motorcycle training in Moyna",
      "best motorcycle driving lessons Tamluk",
      "affordable motorcycle license in Moyna",
      "best car and bike driving lessons Jalchak",
      "best motorcycle training in Purba Medinipur",
      "best defensive driving course in Moyna",
      "best car driving test preparation Tamluk",
      "best driving instructors for motorcycles in Jalchak"
    ],
    openGraph: {
      title: "Champion Driving School - Expert Car & Bike Training",
      description: "Professional driving lessons with certified instructors. 99% pass rate. Book your driving course today!",
      url: "https://www.championdrivingschool.in",
      siteName: "Champion Driving School",
      images: [
        {
          url: "/images/hero_image.jpg",
          width: 1200,
          height: 630,
          alt: "Champion Driving School - Professional driving training facility",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Champion Driving School - Expert Car & Bike Training",
      description: "Professional driving lessons with certified instructors. 99% pass rate.",
      images: ["/images/hero_image.jpg"],
    },
    alternates: {
      canonical: "https://www.championdrivingschool.in",
    },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isBengali = locale === 'bn';

  // Generate structured data based on locale
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": isBengali ? "চ্যাম্পিয়ন ড্রাইভিং স্কুল - হোম" : "Champion Driving School - Home",
    "description": isBengali 
      ? "ময়না ও জলচকে সার্টিফায়েড প্রশিক্ষকদের সাথে পেশাদার ড্রাইভিং ক্লাস"
      : "Professional driving lessons with certified instructors in Moyna and Jalchak",
    "url": "https://www.championdrivingschool.in",
    "mainEntity": {
      "@type": "DrivingSchool",
      "name": isBengali ? "চ্যাম্পিয়ন ড্রাইভিং স্কুল" : "Champion Driving School",
      "description": isBengali 
        ? "ময়না ও জলচকে সার্টিফায়েড প্রশিক্ষকদের সাথে পেশাদার ড্রাইভিং ক্লাস"
        : "Professional driving lessons with certified instructors in Moyna and Jalchak",
      "url": "https://www.championdrivingschool.in",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": isBengali ? "ময়না - জলচক রোড" : "Moyna - Jalchak Road",
          "addressLocality": isBengali ? "ময়না" : "Moyna",
          "addressRegion": isBengali ? "পশ্চিমবঙ্গ" : "West Bengal",
          "postalCode": "721629",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": isBengali ? "জলচক মেইন রোড" : "Jalchak Main Road",
          "addressLocality": isBengali ? "জলচক" : "Jalchak",
          "addressRegion": isBengali ? "পশ্চিমবঙ্গ" : "West Bengal",
          "postalCode": "721629",
          "addressCountry": "IN"
        }
      ],
      "telephone": "+91-8768015877",
      "openingHours": "Mo-Su 06:00-20:00",
      "serviceType": isBengali ? [
        "গাড়ি ড্রাইভিং ক্লাস",
        "বাইক ড্রাইভিং ক্লাস",
        "লাইসেন্স টেস্ট প্রস্তুতি",
        "নিরাপদ ড্রাইভিং কোর্স"
      ] : [
        "Car Driving Lessons",
        "Bike Driving Lessons",
        "License Test Preparation",
        "Defensive Driving Course"
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <NavBar />
      <Hero />
      <About />
      <Branch />
      <Course />
      <Instructors />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
