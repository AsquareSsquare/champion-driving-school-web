import { z } from "zod";
import { paymentDetailsSchema } from "@/lib/schema";
import { PaymentDetailsRequest } from "@/types/root-types";
import { formatDateToISO } from "@/lib/utils";
import { paymentEndpoints } from "@/services/apis";
import { apiConnector, RequestOptions } from "@/services/apiConnector";

const { SUBMIT_PAYMENT_DETAILS_API } = paymentEndpoints;

export async function submitPaymentDetails(
  details: z.infer<typeof paymentDetailsSchema>,
  learnerId: number,
  setLoading: (loading: boolean) => void,
) {
  try {
    setLoading(true);
    const paymentDate = formatDateToISO(details.payment_date);
    const payload: PaymentDetailsRequest = {
      ...details,
      notes: details.notes || "",
      amount_paid: Number(details.amount_paid),
      student_id: learnerId,
      payment_date: paymentDate,
    };
    const options: RequestOptions = {
      method: "POST",
      data: payload,
    };
    const response = await apiConnector(SUBMIT_PAYMENT_DETAILS_API, options);
    if (!response.ok) {
      return { success: false, message: "Could not submit payment details" };
    }
    return {
      success: true,
      message: "Payment details submitted successfully.",
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error submitting payment details" };
  } finally {
    setLoading(false);
  }
}
