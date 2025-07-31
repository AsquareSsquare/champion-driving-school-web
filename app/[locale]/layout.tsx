import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Function to generate metadata based on locale
function createMetadata(locale: string): Metadata {
  const isBengali = locale === 'bn';
  
  const baseMetadata = {
    authors: [{ name: "Champion Driving School" }],
    creator: "Champion Driving School",
    publisher: "Champion Driving School",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "https://www.championdrivingschool.in",
      languages: {
        "en-US": "/en",
        bn: "/bn",
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };

  if (isBengali) {
    return {
      ...baseMetadata,
      title: "চ্যাম্পিয়ন ড্রাইভিং স্কুল - ময়না ও জলচক | বিশেষজ্ঞ গাড়ি ও বাইক প্রশিক্ষণ",
      description: "চ্যাম্পিয়ন ড্রাইভিং স্কুল ময়না ও জলচকে বিশেষজ্ঞ গাড়ি ও বাইক ড্রাইভিং প্রশিক্ষণ প্রদান করে। সার্টিফায়েড প্রশিক্ষকদের সাথে শিখুন, ৯৯% পাসের হার। আজই আপনার ড্রাইভিং ক্লাস বুক করুন!",
      keywords: [
        "চ্যাম্পিয়ন ড্রাইভিং স্কুল",
        "ড্রাইভিং স্কুল ময়না",
        "ড্রাইভিং স্কুল জলচক",
        "গাড়ি ড্রাইভিং ক্লাস",
        "বাইক ড্রাইভিং ক্লাস",
        "ড্রাইভিং প্রশিক্ষক",
        "ড্রাইভিং লাইসেন্স প্রশিক্ষণ",
        "নিরাপদ ড্রাইভিং কোর্স",
        "গাড়ি চালানো শিখুন",
        "ড্রাইভিং টেস্ট প্রস্তুতি",
        "পূর্ব মেদিনীপুর ড্রাইভিং স্কুল",
        "পশ্চিমবঙ্গ ড্রাইভিং ক্লাস",
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
        "জলচকে মোটরসাইকেলের জন্য সেরা ড্রাইভিং প্রশিক্ষক",
        "বাংলা ড্রাইভিং স্কুল",
        "বাংলা গাড়ি চালানো শিখুন",
        "বাংলা মোটরসাইকেল প্রশিক্ষণ",
        "বাংলা ড্রাইভিং লাইসেন্স",
        "বাংলা ড্রাইভিং ক্লাস",
        "বাংলা ড্রাইভিং প্রশিক্ষক"
      ],
      openGraph: {
        type: "website",
        locale: "bn_BD",
        url: "https://www.championdrivingschool.in",
        title: "চ্যাম্পিয়ন ড্রাইভিং স্কুল - ময়না ও জলচকে বিশেষজ্ঞ গাড়ি ও বাইক প্রশিক্ষণ",
        description: "সার্টিফায়েড প্রশিক্ষকদের সাথে পেশাদার ড্রাইভিং ক্লাস। ৯৯% পাসের হার। আজই আপনার ড্রাইভিং কোর্স বুক করুন!",
        siteName: "চ্যাম্পিয়ন ড্রাইভিং স্কুল",
        images: [
          {
            url: "/images/hero_image.jpg",
            width: 1200,
            height: 630,
            alt: "চ্যাম্পিয়ন ড্রাইভিং স্কুল - পেশাদার ড্রাইভিং প্রশিক্ষণ",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "চ্যাম্পিয়ন ড্রাইভিং স্কুল - বিশেষজ্ঞ গাড়ি ও বাইক প্রশিক্ষণ",
        description: "সার্টিফায়েড প্রশিক্ষকদের সাথে পেশাদার ড্রাইভিং ক্লাস। ৯৯% পাসের হার।",
        images: ["/images/hero_image.jpg"],
      },
    };
  }

  // English metadata (default)
  return {
    ...baseMetadata,
    title: "Champion Driving School - Moyna & Jalchak | Expert Car & Bike Training",
    description:
      "Champion Driving School offers expert car and bike driving training in Moyna and Jalchak. Learn with certified trainers, 99% pass rate. Book your driving lessons today!",
    keywords: [
      "Champion Driving School",
      "driving school Moyna",
      "driving school Jalchak",
      "car driving lessons",
      "bike driving lessons",
      "driving instructor",
      "driving license training",
      "defensive driving course",
      "learn to drive",
      "driving test preparation",
      "Purba Medinipur driving school",
      "West Bengal driving lessons",
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
      type: "website",
      locale: "en_US",
      url: "https://www.championdrivingschool.in",
      title: "Champion Driving School - Expert Car & Bike Training in Moyna & Jalchak",
      description: "Professional driving lessons with certified instructors. 99% pass rate. Book your driving course today!",
      siteName: "Champion Driving School",
      images: [
        {
          url: "/images/hero_image.jpg",
          width: 1200,
          height: 630,
          alt: "Champion Driving School - Professional driving training",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Champion Driving School - Expert Car & Bike Training",
      description: "Professional driving lessons with certified instructors. 99% pass rate.",
      images: ["/images/hero_image.jpg"],
    },
  };
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return createMetadata(locale);
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DrivingSchool",
              "name": locale === 'bn' ? "চ্যাম্পিয়ন ড্রাইভিং স্কুল" : "Champion Driving School",
              "description": locale === 'bn' 
                ? "ময়না ও জলচকে সার্টিফায়েড প্রশিক্ষকদের সাথে পেশাদার ড্রাইভিং ক্লাস"
                : "Professional driving lessons with certified instructors in Moyna and Jalchak",
              "url": "https://www.championdrivingschool.in",
              "logo": "https://www.championdrivingschool.in/favicon.ico",
              "image": "https://www.championdrivingschool.in/images/hero_image.jpg",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Moyna - Jalchak Road",
                  "addressLocality": "Moyna",
                  "addressRegion": "West Bengal",
                  "postalCode": "721155",
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
              "telephone": "+91-8768015877",
              "email": "info@championdrivingschool.in",
              "openingHours": "Mo-Su 06:00-20:00",
              "priceRange": "₹₹",
              "serviceType": [
                "Car Driving Lessons",
                "Bike Driving Lessons",
                "License Test Preparation",
                "Defensive Driving Course"
              ],
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Moyna"
                },
                {
                  "@type": "City",
                  "name": "Jalchak"
                },
                {
                  "@type": "City",
                  "name": "Purba Medinipur"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/championdrivingschool",
                "https://www.instagram.com/championdrivingschool"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Toaster richColors />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
