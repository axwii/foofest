"use client";

import { useState } from "react";
import { useStep } from "./useStep";
import TicketSelection from "../components/TicketSelection";
import CampingOptions from "../components/CampingOptions";
import PersonalInfo from "../components/PersonalInfo";
import PaymentForm from "../components/PaymentForm";
import CheckoutSummary from "../components/CheckoutSummary";

export default function HomePage() {
  const { currentStep, nextStep, prevStep } = useStep();
  const [ticketData, setTicketData] = useState({ regular: 0, vip: 0 });

  const handleUpdateTicketData = (data) => {
    setTicketData(data);
  };

  const steps = [
    <TicketSelection updateTicketData={handleUpdateTicketData} />,
    <CampingOptions />,
    <PersonalInfo />,
    <PaymentForm />,
    <CheckoutSummary />,
  ];

  return (
    <div className="booking-container">
      <h1 className="text-2xl font-bold">Book Your Festival Tickets</h1>
      <div>{steps[currentStep]}</div>
      <div className="navigation-buttons">
        {currentStep > 0 && <button onClick={prevStep}>Back</button>}
        {currentStep < steps.length - 1 && (
          <button onClick={nextStep}>Next</button>
        )}
      </div>
    </div>
  );
}
