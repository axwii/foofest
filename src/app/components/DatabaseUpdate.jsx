
import { useEffect } from "react";
import { postEventBookings } from "@/app/lib/supabase";

export default function DatabaseUpdate({ ticketData }) {
  useEffect(() => {
    async function postDatabase() {
      const data = {
        area: ticketData.area,
        amount: ticketData.amount,
        reservation_id: ticketData.reservationId,
        regular_attendees: ticketData.personalInfo.regular.map((attendee, index) => ({
          email: attendee.email,
          lastName: attendee.lastName,
          firstName: attendee.firstName,
          mobileNumber: attendee.mobileNumber,
        })),
        vip_attendees: ticketData.personalInfo.vip.map((attendee, index) => ({
          email: attendee.email,
          lastName: attendee.lastName,
          firstName: attendee.firstName,
          mobileNumber: attendee.mobileNumber,
        })),
      };
      await postEventBookings(data);
    }

    postDatabase();
  }, [ticketData]);

  return (
    <div>
      <h2>Database Summary</h2>
    </div>
  );
}