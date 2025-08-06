import React from "react";
import useLicense from "@/hooks/use-license";
import { Loader } from "lucide-react";
import EditLicenseDetailsForm from "@/components/forms/edit-license-details-form";

function EditLicense({
  learnerId,
  setEditLearner,
}: {
  learnerId: number;
  setEditLearner: (value: number | undefined) => void;
}) {
  const { loading, license } = useLicense(learnerId);
  if (loading)
    return (
      <div className="h-96 flex items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  return (
    <EditLicenseDetailsForm license={license} setEditLearner={setEditLearner} />
  );
}

export default EditLicense;
