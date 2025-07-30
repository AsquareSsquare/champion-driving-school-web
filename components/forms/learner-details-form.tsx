"use client";
import { genders } from "@/constants/data";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { learnerDetailsSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputField from "@/components/form-fields/form-input-field";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import FormCalenderField from "@/components/form-fields/form-calender-field";
import { Button } from "@/components/ui/button";
import { Branch } from "@/types/server-types";
import FormSelectField from "@/components/form-fields/form-select-field";
import { getBranchSelectItems } from "@/lib/utils";

function LearnerDetailsForm({
  branches,
  setStep,
}: {
  branches: Branch[];
  setStep: () => void;
}) {
  const form = useForm<z.infer<typeof learnerDetailsSchema>>({
    resolver: zodResolver(learnerDetailsSchema),
    defaultValues: {
      branchId: "",
      name: "",
      address: "",
      dateOfBirth: undefined,
      blood_group: "",
      gender: "male",
      phone: "",
      id_card: "",
      total_fees: "",
    },
  });
  const submitHandler = (data: z.infer<typeof learnerDetailsSchema>) => {
    console.log(data);
    setStep();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <div className="flex flex-col gap-6">
          <FormSelectField
            control={form.control}
            name="branchId"
            items={getBranchSelectItems(branches)}
            placeholder="Select a branch"
            label="Select branch"
          />
          <FormInputField
            control={form.control}
            name="name"
            label="Full name"
            placeholder="Enter your full name"
            inputType="text"
          />
          <FormSelectField
            control={form.control}
            name="gender"
            items={genders}
            placeholder="Select student gender"
            label="Select gender"
          />
          <FormTextareaField
            control={form.control}
            name="address"
            label="Permanent address"
            placeholder="Enter your address"
            inputClassName="field-sizing-content resize-none max-h-29.5 min-h-0 py-1.75"
          />
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 xs:gap-8">
            <FormCalenderField
              control={form.control}
              name="dateOfBirth"
              label="Date of Birth"
            />
            <FormInputField
              control={form.control}
              name="blood_group"
              label="Blood group"
              placeholder="Enter your Blood group"
            />
          </div>
          <FormInputField
            control={form.control}
            name="phone"
            label="Phone"
            placeholder="Enter your phone number"
          />
          <FormInputField
            control={form.control}
            name="id_card"
            label="Learner ID card"
            placeholder="Enter learner ID card number"
          />

          {/*TODO: License type multiselect*/}
          <FormInputField
            control={form.control}
            name="total_fees"
            label="Total fees"
            placeholder="Enter total fees"
            inputType="number"
          />

          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
}

export default LearnerDetailsForm;
