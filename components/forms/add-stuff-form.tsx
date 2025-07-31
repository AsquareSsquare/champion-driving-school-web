"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addStuffSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/form-fields/form-input-field";
import FormSelectField from "@/components/form-fields/form-select-field";
import { userRole } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { Branch } from "@/types/server-types";
import { getBranchSelectItems } from "@/lib/utils";
import { createStaff } from "@/services/client-actions/staffActions";
import { toast } from "sonner";
import { Loader } from "lucide-react";

function AddStuffForm({ branches }: { branches: Branch[] }) {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof addStuffSchema>>({
    resolver: zodResolver(addStuffSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      role: "staff",
      branch_id: "",
    },
  });

  const handleOnSuccess = () => {
    toast.success("Staff added successfully.");
    form.reset();
  };

  const handleOnFailure = () => {
    toast.error("Could not add stuff.");
  };

  const submitHandler = async (data: z.infer<typeof addStuffSchema>) => {
    try {
      await createStaff(data, setLoading, handleOnSuccess, handleOnFailure);
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
            label="Staff name"
            placeholder="Enter staff name"
            inputType="text"
          />
          <FormInputField
            control={form.control}
            name="username"
            label="Staff username"
            placeholder="Enter staff username"
            inputType="text"
          />
          <FormInputField
            control={form.control}
            name="password"
            label="Staff password"
            placeholder="Enter staff password"
            inputType="password"
          />
          <FormSelectField
            control={form.control}
            name="role"
            items={userRole}
            label="Select role"
            placeholder="Select user role"
          />

          <FormSelectField
            control={form.control}
            name="branch_id"
            items={getBranchSelectItems(branches)}
            placeholder="Select a branch"
            label="Select branch"
          />

          <Button type="submit">
            {loading ? <Loader className="animate-spin" /> : "Add staff"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default AddStuffForm;
