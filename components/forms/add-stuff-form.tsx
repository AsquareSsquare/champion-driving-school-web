"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addStuffSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/form-fields/form-input-field";
import FormSelectField from "@/components/form-fields/form-select-field";
import { userRole } from "@/constants/data";
import { Button } from "@/components/ui/button";

function AddStuffForm() {
  const form = useForm<z.infer<typeof addStuffSchema>>({
    resolver: zodResolver(addStuffSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      role: "staff",
    },
  });

  const submitHandler = (data: z.infer<typeof addStuffSchema>) => {
    console.log(data);
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

          <Button type="submit">Add staff</Button>
        </div>
      </form>
    </Form>
  );
}

export default AddStuffForm;
