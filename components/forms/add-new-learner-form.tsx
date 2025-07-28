"use client";

import { useState } from "react";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { addLearnerSteps } from "@/constants/data";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addLearnerSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputField from "@/components/form-fields/form-input-field";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import FormCalenderField from "@/components/form-fields/form-calender-field";
import { Button } from "@/components/ui/button";

function AddNewLearnerForm() {
  const [step, setStep] = useState(0);
  const form = useForm<z.infer<typeof addLearnerSchema>>({
    resolver: zodResolver(addLearnerSchema),
    defaultValues: {
      name: "",
      address: "",
      dateOfBirth: undefined,
      blood_group: "",
      gender: "",
      phone: "",
      aadhar: "",
      voter: "",
      learner_application_no: "",
      learner_license_no: "",
      dl_application_no: "",
      driving_license_no: "",
      driving_license_renewal: "",
      remarks: "",
    },
  });
  const submitHandler = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <div className="w-full space-y-10">
      <Stepper value={step} className="items-start gap-4">
        {addLearnerSteps.map((step, index) => (
          <StepperItem key={step.step} step={step.step} className="flex-1">
            <StepperTrigger className="w-full flex-col items-start gap-1 rounded">
              <StepperIndicator asChild className="bg-border h-1 w-full">
                <span className="sr-only">{step.title}</span>
              </StepperIndicator>
              <div className="space-y-0.5">
                <StepperTitle>{step.title}</StepperTitle>
              </div>
            </StepperTrigger>
          </StepperItem>
        ))}
      </Stepper>

      <Form {...form}>
        <form>
          <div className="flex flex-col gap-6">
            <FormInputField
              control={form.control}
              name="name"
              label="Full name"
              placeholder="Enter your full name"
              inputType="text"
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
              name="aadhar"
              label="Aadhar number"
              placeholder="Enter your aadhar number"
            />
            <FormInputField
              control={form.control}
              name="voter"
              label="Voter number"
              placeholder="Enter your voter number"
            />
            <FormInputField
              control={form.control}
              name="learner_application_no"
              label="Learner application number"
              placeholder="Enter Learner application number"
            />
            <FormInputField
              control={form.control}
              name="learner_license_no"
              label="Learner license number"
              placeholder="Enter Learner license number"
            />
            <Button type="button" onClick={submitHandler}>
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default AddNewLearnerForm;
