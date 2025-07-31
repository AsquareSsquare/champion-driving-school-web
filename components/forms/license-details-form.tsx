import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { licenseDetailsSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/form-fields/form-input-field";
import { Button } from "@/components/ui/button";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import { submitLicenseDetails } from "@/services/client-actions/licenseActions";
import { Loader } from "lucide-react";
import { toast } from "sonner";

function LicenseDetailsForm({
  learnerId,
  setStep,
}: {
  learnerId: number;
  setStep: (step: number) => void;
}) {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof licenseDetailsSchema>>({
    resolver: zodResolver(licenseDetailsSchema),
    defaultValues: {
      learner_license_no: "",
      learner_app_no: "",
      driving_license_no: "",
      dl_app_no: "",
      notes: "",
    },
  });

  const submitHandler = async (data: z.infer<typeof licenseDetailsSchema>) => {
    try {
      const result = await submitLicenseDetails(data, learnerId, setLoading);
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      toast.success(result.message);
      form.reset();
      setStep(3);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSkip = () => {
    form.reset();
    setStep(3);
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
          <div className="flex flex-col gap-6">
            <Button type="submit" disabled={loading}>
              {loading ? <Loader className="animate-spin" /> : "Submit"}
            </Button>
            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={handleSkip}
            >
              Skip
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default LicenseDetailsForm;
