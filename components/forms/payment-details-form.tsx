import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { paymentDetailsSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/form-fields/form-input-field";
import { Button } from "@/components/ui/button";
import FormCalenderField from "@/components/form-fields/form-calender-field";
import FormTextareaField from "@/components/form-fields/form-textarea-field";

function PaymentDetailsForm() {
  const form = useForm<z.infer<typeof paymentDetailsSchema>>({
    resolver: zodResolver(paymentDetailsSchema),
    defaultValues: {
      amount_paid: "",
      payment_date: undefined,
      payment_method: "",
      notes: "",
    },
  });
  return (
    <Form {...form}>
      <form>
        <div className="flex flex-col gap-6">
          <FormInputField
            control={form.control}
            name="amount_paid"
            label="Learner application no"
            placeholder="Enter learner application no"
            inputType="number"
          />
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 xs:gap-8">
            <FormCalenderField
              control={form.control}
              name="payment_date"
              label="Date of Birth"
            />
            <FormInputField
              control={form.control}
              name="payment_method"
              label="Blood group"
              placeholder="Enter your Blood group"
            />
          </div>
          <FormTextareaField
            control={form.control}
            name="notes"
            label="Notes"
            placeholder="Enter notes(optional)"
          />

          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
}

export default PaymentDetailsForm;
