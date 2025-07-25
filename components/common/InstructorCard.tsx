import React from "react";
import Image from "next/image";
import { Instructor } from "@/types/root-types";
import { Award, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <div className="p-1 bg-white rounded-xl border hover:-translate-y-1 transition-transform duration-200 cursor-pointer group">
      <Image
        src={
          instructor.image ||
          "/instructors/profile_avatar_placeholder_large.png"
        }
        alt="instructorIMG"
        width={300}
        height={200}
        className="w-full rounded-xl"
      />
      <div className="p-5">
        <div className="flex flex-col items-center gap-1 group-hover:-translate-x-0.5 transition-transform duration-200">
          <h2 className="text-xl font-bold">{instructor.name}</h2>
          <p className="text-lg font-bold text-primary">
            {instructor.designation}
          </p>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1 text-sm text-gray-500">
              <Clock size={18} className="text-primary" /> Experience
            </p>
            <p className="text-lg font-bold">{instructor.experience}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1 text-sm text-gray-500">
              <Users size={18} className="text-red-400" /> Students taught
            </p>
            <p className="text-lg font-bold">{instructor.taught}</p>
          </div>
          <div className="mt-4">
            <p className="font-bold flex items-center gap-1">
              <Award size={22} className="text-green-600" /> Certificates:
            </p>
            <div className="flex items-center gap-1 flex-wrap pl-4 mt-2">
              {instructor.certificates.map((certificate, index) => (
                <Badge key={index} className="bg-green-600">
                  {certificate}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorCard;
