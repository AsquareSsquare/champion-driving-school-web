"use client";
import { useState } from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addBranchSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputField from "@/components/form-fields/form-input-field";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createBranch } from "@/services/client-actions/branceActions";
import { Loader } from "lucide-react";

function AddBranchForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof addBranchSchema>>({
    resolver: zodResolver(addBranchSchema),
    defaultValues: {
      name: "",
      address: "",
      contact_number: "",
    },
  });

  const onSuccess = () => {
    toast.success("Branch created successfully.");
    form.reset();
  };

  const onFailure = () => {
    toast.error("Error creating branch");
  };

  const submitHandler = async (branchData: z.infer<typeof addBranchSchema>) => {
    try {
      await createBranch(branchData, setLoading, onSuccess, onFailure);
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
            label="Branch name"
            placeholder="Enter branch name"
            inputType="text"
          />
          <FormTextareaField
            control={form.control}
            name="address"
            label="Branch address"
            placeholder="Enter branch address"
            inputClassName="field-sizing-content resize-none max-h-29.5 min-h-0 py-1.75"
          />
          <FormInputField
            control={form.control}
            name="contact_number"
            label="Branch contact number"
            placeholder="Enter branch contact number"
            inputType="tel"
          />

          <Button type="submit" disabled={loading}>
            {loading ? <Loader className="animate-spin" /> : "Add branch"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default AddBranchForm;
