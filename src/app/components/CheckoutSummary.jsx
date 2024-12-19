"use client";

import { useState, useEffect } from "react";
import { PostFulfillReservation } from "@/app/lib/api";

export default function CheckoutSummary({ ticketData }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    PostFulfillReservation(ticketData.reservationId)
      .then((response) => setMessage(response.message))
      .catch((error) => console.error("Error fulfilling reservation:", error));
  }, []);

  console.log("ticketData in CheckoutSummary", ticketData);
  console.log("ticketData.reservationId", ticketData.reservationId);
  console.log("message in CheckoutSummary", message);
  return (
    <div>
      <h2>Checkout Summary</h2>
      {message && <p>{message}</p>}
    </div>
  );
}