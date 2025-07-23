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
          <span className="text-gray-700">{branch.location}</span>
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
      <div className="mt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
        <div className="grid grid-cols-1 gap-2">
          {branch.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BranchCard;
