import React from "react";
import { courses } from "@/constants/data";
import CourseCard from "@/components/core/CourseCard";
import OtherServices from "@/components/core/OtherServices";

function Course() {
  return (
    <section id="courses" className="min-h-screen flex items-center bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 xl:px-0 py-32">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl font-bold">Our Courses</h1>
          <p className="text-center max-w-4xl text-lg text-muted-foreground">
            Choose the perfect course for your needs
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
