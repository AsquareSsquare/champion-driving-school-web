import React from "react";
import { AboutCard as AboutCardProps } from "@/types/root-types";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

function AboutCard({ about }: { about: AboutCardProps }) {
  const t = useTranslations();
  return (
    <div className="p-6 rounded-xl bg-muted shadow-md border text-center cursor-pointer group hover:-translate-y-1 transition-transform duration-200">
      <div
        className={cn(
          "w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",
          about.gradient,
          about.hoverGradient,
        )}
      >
        <about.icon
          className={cn(
            "h-8 w-8 group-hover:scale-110 transition-all duration-300",
            about.iconColor,
          )}
        />
      </div>
      <p className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-300">
        {t(`about.${about.title}`)}
      </p>
      <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
        {t(`about.${about.description}`)}
      </p>
    </div>
  );
}

export default AboutCard;
