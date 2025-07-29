import React from "react";
import { branches } from "@/constants/data";
import BranchCard from "@/components/core/BranchCard";
import { useTranslations } from "next-intl";

function Branch() {
  const t = useTranslations();

  return (
    <section id="branches" className="min-h-screen bg-muted flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 xl:px-0 py-32">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl font-bold">
            {t("branch.locations")}
          </h1>
          <p className="text-center max-w-4xl text-lg text-muted-foreground">
            {t("branch.location_descriptions")}
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
