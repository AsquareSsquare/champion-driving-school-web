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

export const metadata: Metadata = {
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
    "West Bengal driving lessons"
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

export default async function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Champion Driving School - Home",
            "description": "Professional driving lessons with certified instructors in Moyna and Jalchak",
            "url": "https://www.championdrivingschool.in",
            "mainEntity": {
              "@type": "DrivingSchool",
              "name": "Champion Driving School",
              "description": "Professional driving lessons with certified instructors in Moyna and Jalchak",
              "url": "https://www.championdrivingschool.in",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Moyna - Jalchak Road",
                  "addressLocality": "Moyna",
                  "addressRegion": "West Bengal",
                  "postalCode": "721629",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Jalchak Main Road",
                  "addressLocality": "Jalchak",
                  "addressRegion": "West Bengal",
                  "postalCode": "721629",
                  "addressCountry": "IN"
                }
              ],
              "telephone": "+91-9876543210",
              "openingHours": "Mo-Su 06:00-20:00",
              "serviceType": [
                "Car Driving Lessons",
                "Bike Driving Lessons",
                "License Test Preparation",
                "Defensive Driving Course"
              ]
            }
          })
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
