import React, { useState } from "react";
import { License } from "@/types/root-types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { licenseDetailsSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputField from "@/components/form-fields/form-input-field";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { Form } from "@/components/ui/form";
import { updateLicenseDetails } from "@/services/client-actions/licenseActions";
import { toast } from "sonner";

function EditLicenseDetailsForm({
  license,
  setEditLearner,
}: {
  license: License | null;
  setEditLearner: (value: number | undefined) => void;
}) {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof licenseDetailsSchema>>({
    resolver: zodResolver(licenseDetailsSchema),
    defaultValues: {
      learner_license_no: license?.learner_license_no,
      learner_app_no: license?.learner_app_no,
      driving_license_no: license?.driving_license_no,
      dl_app_no: license?.dl_app_no,
      notes: license?.notes,
    },
  });

  const submitHandler = async (data: z.infer<typeof licenseDetailsSchema>) => {
    try {
      if (!license) {
        toast.error("License not found.");
        return;
      }
      const result = await updateLicenseDetails(
        license.student_id,
        data,
        setLoading,
      );

      if (!result.success) {
        toast.error(result.message);
        return;
      }
      toast.success(result.message);
      setEditLearner(undefined);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <div className="flex flex-col gap-6">
          <FormInputField
            control={form.control}
            name="learner_app_no"
            label="Learner application no"
            placeholder="Enter learner application no"
            inputType="text"
          />
          <FormInputField
            control={form.control}
            name="learner_license_no"
            label="Learner license no"
            placeholder="Enter learner license no"
            inputType="text"
          />
          <FormInputField
            control={form.control}
            name="dl_app_no"
            label="DL application no"
            placeholder="Enter DL application no"
            inputType="text"
          />
          <FormInputField
            control={form.control}
            name="driving_license_no"
            label="Driving license no"
            placeholder="Enter driving license no"
            inputType="text"
          />
          <FormTextareaField
            control={form.control}
            name="notes"
            label="Remarks"
            placeholder="Enter remarks notes"
          />
          <div className="flex items-center gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={() => setEditLearner(undefined)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader className="animate-spin" /> Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default EditLicenseDetailsForm;
