"use client";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addBranchSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputField from "@/components/form-fields/form-input-field";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import { Button } from "@/components/ui/button";

function AddBranchForm() {
  const form = useForm<z.infer<typeof addBranchSchema>>({
    resolver: zodResolver(addBranchSchema),
    defaultValues: {
      name: "",
      address: "",
      contact_number: "",
      timing: "",
    },
  });

  return (
    <Form {...form}>
      <form>
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
          />
          <FormInputField
            control={form.control}
            name="timing"
            label="Branch open times"
            placeholder="Enter branch open times"
          />

          <Button type="submit">Add branch</Button>
        </div>
      </form>
    </Form>
  );
}

export default AddBranchForm;
