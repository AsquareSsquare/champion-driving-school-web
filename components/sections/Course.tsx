import React from "react";
import { courses } from "@/constants/data";
import CourseCard from "@/components/core/CourseCard";
import OtherServices from "@/components/core/OtherServices";
import { getTranslations } from "next-intl/server";

async function Course() {
  const t = await getTranslations();

  return (
    <section id="courses" className="min-h-screen flex items-center bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 xl:px-0 py-32">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl font-bold">
            {t("course.our_courses")}
          </h1>
          <p className="text-center max-w-4xl text-lg text-muted-foreground">
            {t("course.courses_descriptions")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <OtherServices />
      </div>
    </section>
  );
}

export default Course;
