import React from "react";
import CustomConfirmation from "@/components/custom-comp/custom-confrimation";
import { Trash2 } from "lucide-react";
import { deleteLearner } from "@/services/client-actions/learnerActions";
import { toast } from "sonner";
import { reFetchLearners } from "@/services/server-actions/refetchActions";

function DeleteLearner({
  learnerId,
  setDelete,
}: {
  learnerId: number;
  setDelete: (value: number | undefined) => void;
}) {
  const [loading, setLoading] = React.useState(false);
  const handleClose = () => {
    setDelete(undefined);
  };
  const handleDelete = async () => {
    try {
      const result = await deleteLearner(learnerId, setLoading);
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      await reFetchLearners();
      toast.success(result.message);
      setDelete(undefined);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CustomConfirmation
      icon={Trash2}
      iconBgClass="bg-destructive/40 rounded-lg"
      iconClass="text-destructive"
      actionBtnBgClass="bg-destructive hover:bg-destructive/90"
      actionBtnText="Delete"
      actionBtnLoadingText="Deleting..."
      text="Are you sure you want to delete this learner?"
      confirmation="Be careful, all associated data will be deleted. you will not able to retrive the data!"
      isLoading={loading}
      handleClose={handleClose}
      handleAction={handleDelete}
    />
  );
}

export default DeleteLearner;
