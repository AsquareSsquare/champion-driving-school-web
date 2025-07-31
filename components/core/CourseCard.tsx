import React from "react";
import { Course } from "@/types/root-types";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, IndianRupee, Star } from "lucide-react";
import CTAButton from "@/components/common/CTAButton";
import { useTranslations } from "next-intl";

function CourseCard({ course }: { course: Course }) {
  const t = useTranslations();

  return (
    <div className="relative p-6 rounded-xl bg-muted shadow-md border cursor-pointer hover:-translate-y-1 transition-transform duration-200">
      {course.popular && (
        <Badge className="absolute -top-2.5">
          <Star /> {t("course.most_popular")}
        </Badge>
      )}
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-xl font-bold text-gray-900 text-center">
          {course.title}
        </h1>
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock size={25} className="text-blue-500" />
          <span className="font-bold">{course.days}</span>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm font-bold">{t("course.offers")}</p>
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
        btnText={t("course.enroll_now")}
        to="contact"
        icon={false}
        btnClassName="w-full mt-6"
      />
    </div>
  );
}

export default CourseCard;
