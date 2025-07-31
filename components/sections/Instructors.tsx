import React from "react";
import { instructors } from "@/constants/data";
import InstructorCard from "@/components/common/InstructorCard";
import { getTranslations } from "next-intl/server";

async function Instructors() {
  const t = await getTranslations();

  return (
    <section
      id="instructors"
      className="min-h-screen bg-muted flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6 xl:px-0 py-32">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl font-bold">
            {t("instructors.title")}
          </h1>
          <p className="text-center max-w-4xl text-lg text-muted-foreground">
            {t("instructors.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
          {instructors.map((instructor, index) => (
            <InstructorCard instructor={instructor} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instructors;
