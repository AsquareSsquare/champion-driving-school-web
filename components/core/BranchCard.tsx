import React from "react";
import { Branch } from "@/types/root-types";
import { Clock, MapPin, Phone } from "lucide-react";

function BranchCard({ branch }: { branch: Branch }) {
  return (
    <div className="p-6 bg-white rounded-xl border hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
      <h1 className="text-xl font-bold text-gray-900 mb-4">{branch.title}</h1>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
          <span className="text-gray-700">{branch.address}</span>
        </div>

        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-emerald-600" />
          <span className="text-gray-700">{branch.phone}</span>
        </div>

        <div className="flex items-center space-x-3">
          <Clock className="h-5 w-5 text-amber-600" />
          <span className="text-gray-700">{branch.timings}</span>
        </div>
      </div>
      <div className="mt-6 h-[280px] w-full xs:w-[350px] aspect-square rounded-xl overflow-hidden">
        <iframe
          src={branch.location}
          width="350"
          height="280"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default BranchCard;
