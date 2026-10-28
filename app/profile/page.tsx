"use client";

import { useState } from "react";
import { profileData } from "@/data/profile-data";
import { ProfileView } from "@/components/profile/profile-view";
import { BookingModal } from "@/components/booking-modal";

export default function ProfilePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="w-full min-h-screen">
      <ProfileView
        data={profileData}
        onOpenBooking={() => setBookingOpen(true)}
      />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </main>
  );
}
