import React from "react";
import { instructors } from "@/constants/data";
import InstructorCard from "@/components/common/InstructorCard";

function Instructors() {
  return (
    <section
      id="instructors"
      className="min-h-screen bg-muted flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6 xl:px-0 py-32">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl font-bold">
            Meet Our Expert Instructors
          </h1>
          <p className="text-center max-w-4xl text-lg text-muted-foreground">
            Learn from certified professionals with years of experience and
            thousands of successful students.
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
