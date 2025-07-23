import React from "react";
import { branches } from "@/constants/data";
import BranchCard from "@/components/core/BranchCard";

function Branch() {
  return (
    <section id="branches" className="min-h-screen bg-muted flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 xl:px-0 py-32">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl font-bold">Our Locations</h1>
          <p className="text-center max-w-4xl text-lg text-muted-foreground">
            Conveniently located to serve you better
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
          {branches.map((branch, index) => (
            <BranchCard branch={branch} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Branch;
