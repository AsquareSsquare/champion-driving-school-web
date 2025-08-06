import React from "react";
import useLearner from "@/hooks/use-learner";
import { Loader } from "lucide-react";
import EditLearnerDetailsForm from "@/components/forms/edit-learner-details-form";

function EditLearner({
  learnerId,
  setEditLearner,
}: {
  learnerId: number;
  setEditLearner: (value: number | undefined) => void;
}) {
  const { loading, learner } = useLearner(learnerId);
  if (loading)
    return (
      <div className="h-96 flex items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  return (
    <>
      {learner && (
        <EditLearnerDetailsForm
          learner={learner}
          setEditLearner={setEditLearner}
        />
      )}
    </>
  );
}

export default EditLearner;
