import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { licenseDetailsSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/form-fields/form-input-field";
import { Button } from "@/components/ui/button";
import FormTextareaField from "@/components/form-fields/form-textarea-field";

function LicenseDetailsForm() {
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
  return (
    <Form {...form}>
      <form>
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
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
}

export default LicenseDetailsForm;
