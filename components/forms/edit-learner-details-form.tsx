import React, { useState } from "react";
import { Learner } from "@/types/server-types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { editLearnerSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/form-fields/form-input-field";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import FormCalenderField from "@/components/form-fields/form-calender-field";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { updateLearnerDetails } from "@/services/client-actions/learnerActions";
import { toast } from "sonner";
import { reFetchLearners } from "@/services/server-actions/refetchActions";

function EditLearnerDetailsForm({
  learner,
  setEditLearner,
}: {
  learner: Learner;
  setEditLearner: (value: number | undefined) => void;
}) {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof editLearnerSchema>>({
    resolver: zodResolver(editLearnerSchema),
    defaultValues: {
      name: learner.name,
      email: learner.email,
      address: learner.address,
      blood_group: learner.blood_group,
      dateOfBirth: new Date(learner.date_of_birth),
      phone: learner.phone,
    },
  });

  const submitHandler = async (data: z.infer<typeof editLearnerSchema>) => {
    try {
      const result = await updateLearnerDetails(learner.id, data, setLoading);
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      await reFetchLearners();
      toast.success(result.message);
      setEditLearner(undefined);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <div className="flex flex-col gap-6">
          <FormInputField
            control={form.control}
            name="name"
            label="Full name"
            placeholder="Enter your full name"
            inputType="text"
          />
          <FormInputField
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter learner email"
            inputType="email"
          />
          <FormInputField
            control={form.control}
            name="phone"
            label="Phone"
            placeholder="Enter your phone number"
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

export default EditLearnerDetailsForm;
