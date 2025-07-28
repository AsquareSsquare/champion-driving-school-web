"use client";
import { Label } from "@/components/ui/label";
import { courseSelectItems } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/form-fields/form-input-field";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import MultipleSelector, {
  MultiSelectOption,
} from "@/components/ui/multiselect";
import { useState } from "react";

function ContactForm() {
  const [courses, setCourses] = useState<MultiSelectOption[]>([]);
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    },
  });
  return (
    <Form {...form}>
      <form className="space-y-6">
        <h2 className="text-xl font-bold text-white">Book your lesson</h2>
        <div className="grid grid-cols-2 gap-6">
          <FormInputField
            control={form.control}
            name="firstName"
            label="First Name"
            inputType="text"
            placeholder="Enter First Name"
            labelClassName="text-white"
            inputClassName="text-white bg-slate-700/50 border border-slate-600/50"
          />
          <FormInputField
            control={form.control}
            name="lastName"
            label="Last Name"
            inputType="text"
            placeholder="Enter Last Name"
            labelClassName="text-white"
            inputClassName="text-white bg-slate-700/50 border border-slate-600/50"
          />
        </div>
        <FormInputField
          control={form.control}
          name="email"
          label="Email"
          inputType="email"
          placeholder="Enter your email"
          labelClassName="text-white"
          inputClassName="text-white bg-slate-700/50 border border-slate-600/50"
        />
        <FormInputField
          control={form.control}
          name="phone"
          label="Phone"
          inputType="text"
          placeholder="Enter Phone Number"
          labelClassName="text-white"
          inputClassName="text-white bg-slate-700/50 border border-slate-600/50"
        />
        <div className="space-y-3">
          <Label className="text-white">Select courses</Label>
          <MultipleSelector
            commandProps={{
              label: "Select license type",
            }}
            inputProps={{
              className: "text-white",
            }}
            className="border-slate-600/50 bg-slate-700/50"
            badgeClassName="bg-primary text-white border-transparent hover:bg-primary/90 transition-opacity duration-300"
            crossIconClassName="text-gray-200"
            selectListClassName="bg-slate-700"
            itemClassName="text-white data-[selected=true]:bg-slate-600 data-[selected=true]:text-gray-200"
            value={courses}
            onChange={(value) => setCourses(value)}
            defaultOptions={courseSelectItems}
            placeholder="Select license type"
            hideClearAllButton
            hidePlaceholderWhenSelected
            emptyIndicator={
              <p className="text-center text-sm text-white">No results found</p>
            }
          />
        </div>
        <FormTextareaField
          control={form.control}
          name="message"
          label="Message"
          placeholder="Enter your Message (Optional)"
          labelClassName="text-white"
          inputClassName="bg-slate-700/50 border border-slate-600/50 field-sizing-content resize-none max-h-29.5 min-h-0 py-1.75 text-white"
        />

        <Button className="w-full">Book your lesson</Button>
      </form>
    </Form>
  );
}

export default ContactForm;
