import React, { useEffect } from "react";
import { Payment } from "@/types/root-types";
import { getPaymentHistory } from "@/services/client-actions/paymentActions";

function usePaymentHistory(learnerId: number) {
  const [loading, setLoading] = React.useState(true);
  const [payments, setPayments] = React.useState<Payment[] | null>(null);

  const fetchPayments = async () => {
    try {
      const result = await getPaymentHistory(learnerId, setLoading);
      setPayments(result.payments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, [learnerId]);
  return { loading, payments };
}

export default usePaymentHistory;
