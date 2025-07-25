import React from "react";
import { BadgeCheck } from "lucide-react";
import { additionalServices, licenceServices } from "@/constants/data";
import LicenceServiceCard from "@/components/common/LicenceServiceCard";
import AdditionalServiceCard from "@/components/common/AdditionalServiceCard";

function OtherServices() {
  return (
    <div className="mt-32">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-4xl font-bold">
          Other Services We Offer
        </h1>
        <p className="text-center max-w-4xl text-lg text-muted-foreground">
          Beyond driving lessons, we provide comprehensive vehicle and licensing
          services to meet all your transportation needs.
        </p>
      </div>
      <div className="mt-20">
        <div className="text-2xl font-bold text-gray-700 flex items-center gap-2">
          <BadgeCheck className="text-green-500" />{" "}
          <h3>Driving License Services</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {licenceServices.map((service, index) => (
            <LicenceServiceCard licenceService={service} key={index} />
          ))}
        </div>
      </div>
      <div className="mt-20">
        <div className="text-2xl font-bold text-gray-700 flex items-center gap-2">
          <BadgeCheck className="text-green-500" /> <h3>Additional Services</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {additionalServices.map((service, index) => (
            <AdditionalServiceCard additionalService={service} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OtherServices;
