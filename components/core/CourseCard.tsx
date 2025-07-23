import React from "react";
import { Course } from "@/types/root-types";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, IndianRupee } from "lucide-react";
import CTAButton from "@/components/common/CTAButton";

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="relative p-6 rounded-xl bg-muted shadow-md border cursor-pointer hover:-translate-y-1 transition-transform duration-200">
      {course.popular && (
        <Badge className="absolute -top-2.5">Most Popular</Badge>
      )}
      <h1 className="text-xl font-bold text-gray-900 mb-4 text-center">
        {course.title}
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="h-4 w-4 text-blue-500" />
          <span className="text-sm font-medium">{course.days}</span>
        </div>
        <div className="flex items-center space-x-1 text-green-500">
          <IndianRupee size={18} />
          <span className="text-lg font-bold">{course.price}</span>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm font-bold">Offers</p>
        <div className="space-y-2 mt-3">
          {course.offers.map((offer, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="text-green-500" size={15} />
              <span className="text-sm">{offer}</span>
            </div>
          ))}
        </div>
      </div>
      <CTAButton
        btnText="Enroll now"
        to="contact"
        icon={false}
        btnClassName="w-full mt-6"
      />
    </div>
  );
}

export default CourseCard;
