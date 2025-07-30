import React from "react";
import { Contact } from "@/types/server-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BookingStatus from "@/components/bookings/booking-status";
import { InfoItem } from "@/components/common/InfoItem";
import { format } from "date-fns";

function BookingCard({ booking }: { booking: Contact }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{booking.name}</CardTitle>
          <BookingStatus status={booking.status} bookingId={booking.id} />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <InfoItem
          label="Booking date"
          info={format(new Date(booking.created_at), "MMM d")}
        />
        <InfoItem label="Email" info={booking.email} />
        <InfoItem label="Phone" info={booking.phone} />
        <InfoItem label="Subject" info={booking.subject} />
        <InfoItem label="Message" info={booking.message} />
      </CardContent>
    </Card>
  );
}

export default BookingCard;
