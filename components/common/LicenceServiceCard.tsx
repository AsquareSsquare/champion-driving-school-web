import React from "react";
import { LicenceService } from "@/types/root-types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

function LicenceServiceCard({
  licenceService,
}: {
  licenceService: LicenceService;
}) {
  return (
    <div className="p-6 rounded-xl bg-muted shadow-md border cursor-pointer hover:-translate-y-1 transition-transform duration-200 group">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-md bg-primary backdrop-blur-md group-hover:scale-105 transition-transform duration-200">
          <Image
            src={licenceService.icon}
            alt="cartype"
            width={30}
            height={30}
            className="text-white"
          />
        </div>
        <Badge>{licenceService.tag}</Badge>
      </div>
      <div className="mt-3 space-y-2">
        <h4 className="text-lg font-bold">{licenceService.title}</h4>
        <p className="text-sm text-gray-600">{licenceService.description}</p>
      </div>
    </div>
  );
}

export default LicenceServiceCard;
