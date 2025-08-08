import React from "react";
import { Trash2 } from "lucide-react";
import CustomConfirmation from "@/components/custom-comp/custom-confrimation";
import { deleteStaff } from "@/services/client-actions/staffActions";
import { toast } from "sonner";
import { reFetchStaffs } from "@/services/server-actions/refetchActions";

function DeleteStaff({
  staffId,
  setDelete,
}: {
  staffId: number;
  setDelete: (value: number | undefined) => void;
}) {
  const [loading, setLoading] = React.useState(false);
  const handleClose = () => {
    setDelete(undefined);
  };
  const handleDelete = async () => {
    try {
      setLoading(true);
      const result = await deleteStaff(staffId);
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      await reFetchStaffs();
      toast.success(result.message);
      setDelete(undefined);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
      text="Are you sure you want to delete this staff?"
      confirmation="Be careful, all associated data will be deleted. you will not able to retrive the data!"
      isLoading={loading}
      handleClose={handleClose}
      handleAction={handleDelete}
    />
  );
}

export default DeleteStaff;
