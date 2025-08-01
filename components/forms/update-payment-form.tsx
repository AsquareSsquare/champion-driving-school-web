import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { paymentDetailsSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputField from "@/components/form-fields/form-input-field";
import FormCalenderField from "@/components/form-fields/form-calender-field";
import FormSelectField from "@/components/form-fields/form-select-field";
import { paymentTypes } from "@/constants/data";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { Form } from "@/components/ui/form";
import { submitPaymentDetails } from "@/services/client-actions/paymentActions";
import { toast } from "sonner";
import { reFetchLearners } from "@/services/server-actions/refetchActions";

function UpdatePaymentForm({
  learnerId,
  setPaymentUpdate,
}: {
  learnerId: number;
  setPaymentUpdate: (value: number | undefined) => void;
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
      const result = await submitPaymentDetails(data, learnerId, setLoading);
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      await reFetchLearners();
      toast.success(result.message);
      form.reset();
      setPaymentUpdate(undefined);
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

          <div className="flex items-center gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={() => setPaymentUpdate(undefined)}
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

export default UpdatePaymentForm;
