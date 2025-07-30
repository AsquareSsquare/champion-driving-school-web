import { z } from "zod";
import { contactSchema } from "@/lib/schema";
import { apiConnector, RequestOptions } from "@/services/apiConnector";
import { contactEndpoints, openEndpoints } from "@/services/apis";
import { bookingSchema } from "@/components/bookings/booking-status";
import { reFetchBookings } from "@/services/server-actions/refetchActions";

const { SUBMIT_CONTACT_API } = openEndpoints;
const { UPDATE_CONTACTS_API } = contactEndpoints;

export async function submitContact(
  details: z.infer<typeof contactSchema>,
  setLoading: (loading: boolean) => void,
  onSuccess: () => void,
  onFailure: () => void,
) {
  try {
    setLoading(true);
    const options: RequestOptions = {
      method: "POST",
      data: details,
    };

    const response = await apiConnector(SUBMIT_CONTACT_API, options);

    if (!response.ok) {
      onFailure();
    } else {
      onSuccess();
    }
  } catch (err) {
    console.error(err);
    onFailure();
  } finally {
    setLoading(false);
  }
}

export async function updateContactStatus(
  contactId: string,
  status: z.infer<typeof bookingSchema>,
  setLoading: (loading: boolean) => void,
  onSuccess: () => void,
  onFailure: () => void,
) {
  try {
    setLoading(true);
    const options: RequestOptions = {
      method: "PUT",
      data: status,
    };
    const response = await apiConnector(
      `${UPDATE_CONTACTS_API}/${contactId}/status`,
      options,
    );
    if (!response.ok) {
      onFailure();
    } else {
      onSuccess();
    }
  } catch (err) {
    console.error(err);
    onFailure();
  } finally {
    await reFetchBookings();
    setLoading(false);
  }
}
