"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/form-fields/form-input-field";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import { submitContact } from "@/services/client-actions/contactActions";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useTranslations } from "next-intl";

function ContactForm() {
  // const [courses, setCourses] = useState<MultiSelectOption[]>([]);
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  const t = useTranslations();


  const handleOnSuccess = () => {
    toast.success("Your message has been submitted.");
    form.reset();
  };

  const handleOnFailure = () => {
    toast.error("Could not submit your message.");
  };

  const submitHandler = async (data: z.infer<typeof contactSchema>) => {
    try {
      await submitContact(data, setLoading, handleOnSuccess, handleOnFailure);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form
        className="space-y-6"
        role="form"
        aria-label="Book your driving lesson"
        onSubmit={form.handleSubmit(submitHandler)}
      >
        <h2 className="text-xl font-bold text-white">Book your lesson</h2>
        <FormInputField
          control={form.control}
          name="name"
          label={t("contact.label_first_name")}
          inputType="text"
          placeholder={t("contact.placeholder_first_name")}
          labelClassName="text-white"
          inputClassName="text-white bg-slate-700/50 border border-slate-600/50"
        />
        <FormInputField
          control={form.control}
          name="email"
          label={t("contact.label_email")}
          inputType="email"
          placeholder={t("contact.placeholder_email")}
          labelClassName="text-white"
          inputClassName="text-white bg-slate-700/50 border border-slate-600/50"
        />
        <FormInputField
          control={form.control}
          name="phone"
          label={t("contact.label_phone")}
          inputType="tel"
          placeholder={t("contact.placeholder_phone")}
          labelClassName="text-white"
          inputClassName="text-white bg-slate-700/50 border border-slate-600/50"
        />
        <FormInputField
          control={form.control}
          name="subject"
          label="Subject"
          placeholder="Enter Subject"
          inputType="text"
          labelClassName="text-white"
          inputClassName="text-white bg-slate-700/50 border border-slate-600/50"
        />
        {/*<div className="space-y-3">*/}
        {/*  <Label className="text-white">Select courses</Label>*/}
        {/*  <MultipleSelector*/}
        {/*    commandProps={{*/}
        {/*      label: "Select license type",*/}
        {/*    }}*/}
        {/*    inputProps={{*/}
        {/*      className: "text-white",*/}
        {/*      "aria-label": "Select driving course type",*/}
        {/*    }}*/}
        {/*    className="border-slate-600/50 bg-slate-700/50"*/}
        {/*    badgeClassName="bg-primary text-white border-transparent hover:bg-primary/90 transition-opacity duration-300"*/}
        {/*    crossIconClassName="text-gray-200"*/}
        {/*    selectListClassName="bg-slate-700"*/}
        {/*    itemClassName="text-white data-[selected=true]:bg-slate-600 data-[selected=true]:text-gray-200"*/}
        {/*    value={courses}*/}
        {/*    onChange={(value) => setCourses(value)}*/}
        {/*    defaultOptions={courseSelectItems}*/}
        {/*    placeholder="Select license type"*/}
        {/*    hideClearAllButton*/}
        {/*    hidePlaceholderWhenSelected*/}
        {/*    emptyIndicator={*/}
        {/*      <p className="text-center text-sm text-white">No results found</p>*/}
        {/*    }*/}
        {/*  />*/}
        {/*</div>*/}
        <FormTextareaField
          control={form.control}
          name="message"
          label={t("contact.label_message")}
          placeholder={t("contact.placeholder_message")}
          labelClassName="text-white"
          inputClassName="bg-slate-700/50 border border-slate-600/50 field-sizing-content resize-none max-h-29.5 min-h-0 py-1.75 text-white"
        />
        <Button
          type="submit"
          className="w-full"
          aria-label="Submit booking request"
          disabled={loading}
        >
          {loading ? <Loader className="animate-spin" /> : t("contact.button_book_now")}
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
