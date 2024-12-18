"use client";

import { useState } from "react";
import PaymentCard from "../components/PaymentCard";

export default function TicketSelection() {
  return (
    <div>
      <h2>Payment Information</h2>
      <PaymentCard />
    </div>
  );
}
