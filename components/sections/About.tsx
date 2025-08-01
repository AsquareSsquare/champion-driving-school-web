import React from "react";
import { abouts } from "@/constants/data";
import AboutCard from "@/components/core/AboutCard";
import { getTranslations } from "next-intl/server";

async function About() {
  const t = await getTranslations();

  return (
    <section id="about" className="min-h-screen flex items-center bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 xl:px-0 py-32">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl font-bold">{t("about.title")}</h1>
          <p className="text-center max-w-4xl text-lg text-muted-foreground">
            {t("about.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {abouts.map((item, index) => (
            <AboutCard key={index} about={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
