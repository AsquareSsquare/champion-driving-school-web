"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { bookingStatus } from "@/constants/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import StatusDot from "@/components/bookings/status-dot";
import { Badge } from "@/components/ui/badge";
import { updateContactStatus } from "@/services/client-actions/contactActions";
import { toast } from "sonner";

export const bookingSchema = z.object({
  status: z.enum(["pending", "read", "replied"]),
});

function BookingStatus({
  status,
  bookingId,
}: {
  status: "pending" | "read" | "replied";
  bookingId: string;
}) {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      status: status,
    },
  });

  const onSuccessHandler = () => {
    toast.success("Booking status updated successfully.");
  };

  const onFailureHandler = () => {
    toast.error("Could not update booking status.");
  };

  const submitHandler = async (data: z.infer<typeof bookingSchema>) => {
    try {
      await updateContactStatus(
        bookingId,
        data,
        setLoading,
        onSuccessHandler,
        onFailureHandler,
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <Select
                defaultValue={field.value}
                value={field.value}
                onValueChange={(val) => {
                  field.onChange(val);
                  form.handleSubmit(submitHandler)();
                }}
              >
                <FormControl>
                  <SelectTrigger
                    size="sm"
                    className="p-0 border-none shadow-none shad-no-focus"
                    disabled={loading}
                  >
                    <Badge variant="outline" className="ml-1">
                      <SelectValue />
                    </Badge>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {bookingStatus.map((item, index) => (
                    <SelectItem key={index} value={item.value}>
                      <span className="flex items-center gap-2">
                        <StatusDot status={item.value} />
                        <span className="truncate">{item.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default BookingStatus;
