import React from "react";
import { getAllContacts } from "@/services/server-actions/contactActions";
import BookingCard from "@/components/bookings/booking-card";

async function AllBookings() {
  const { contacts } = await getAllContacts();
  return (
    <>
      {contacts.length > 0 ? (
        <div className="grid grid-cols-1 @xl/main:grid-cols-2 @5xl/main:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <BookingCard key={contact.id} booking={contact} />
          ))}
        </div>
      ) : (
        <div className="h-[calc(100vh-8rem)] flex items-center justify-center">
          <p className="text-xl font-bold">No bookings</p>
        </div>
      )}
    </>
  );
}

export default AllBookings;
