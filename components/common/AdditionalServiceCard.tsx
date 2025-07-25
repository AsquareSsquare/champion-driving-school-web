import React from "react";
import { AdditionalService } from "@/types/root-types";

function AdditionalServiceCard({
  additionalService,
}: {
  additionalService: AdditionalService;
}) {
  return (
    <div className="p-6 rounded-xl bg-muted shadow-md border cursor-pointer hover:-translate-y-1 transition-transform duration-200 group">
      <div className="h-11 w-11 flex items-center justify-center rounded-md bg-primary backdrop-blur-md group-hover:scale-105 transition-transform duration-200">
        <additionalService.icon className="text-white" />
      </div>
      <div className="mt-3 space-y-2">
        <h4 className="text-lg font-bold">{additionalService.title}</h4>
        <p className="text-sm text-gray-600">{additionalService.description}</p>
      </div>
    </div>
  );
}

export default AdditionalServiceCard;
