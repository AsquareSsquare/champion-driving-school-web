import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { paymentDetailsSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/form-fields/form-input-field";
import { Button } from "@/components/ui/button";
import FormCalenderField from "@/components/form-fields/form-calender-field";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import FormSelectField from "@/components/form-fields/form-select-field";
import { paymentTypes } from "@/constants/data";
import { Loader } from "lucide-react";
import { submitPaymentDetails } from "@/services/client-actions/paymentActions";
import { toast } from "sonner";

function PaymentDetailsForm({
  learnerId,
  setStep,
}: {
  learnerId: number;
  setStep: (step: number) => void;
}) {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof paymentDetailsSchema>>({
    resolver: zodResolver(paymentDetailsSchema),
    defaultValues: {
      amount_paid: "",
      payment_date: undefined,
      payment_method: "",
      notes: "",
    },
  });
  const submitHandler = async (data: z.infer<typeof paymentDetailsSchema>) => {
    try {
      setLoading(true);
      const result = await submitPaymentDetails(data, learnerId);
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      toast.success(result.message);
      form.reset();
      setStep(1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    form.reset();
    setStep(1);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <div className="flex flex-col gap-6">
          <FormInputField
            control={form.control}
            name="amount_paid"
            label="Amount"
            placeholder="Enter amount"
            inputType="number"
          />
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 xs:gap-8">
            <FormCalenderField
              control={form.control}
              name="payment_date"
              label="Date"
            />
            <FormSelectField
              control={form.control}
              name="payment_method"
              items={paymentTypes}
              label="Payment method"
              placeholder="Select payment method"
            />
          </div>
          <FormTextareaField
            control={form.control}
            name="notes"
            label="Notes"
            placeholder="Enter notes(optional)"
          />

          <div className="flex flex-col gap-6">
            <Button type="submit" disabled={loading}>
              {loading ? <Loader className="animate-spin" /> : "Submit"}
            </Button>
            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={handleSkip}
            >
              Skip
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default PaymentDetailsForm;
