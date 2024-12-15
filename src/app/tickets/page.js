"use client";

import { useState } from "react";
import TicketSelection from "../components/TicketSelection";
import CampingOptions from "../components/CampingOptions";
import PersonalInfo from "../components/PersonalInfo";
import PaymentForm from "../components/PaymentForm";
import CheckoutSummary from "../components/CheckoutSummary";

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <TicketSelection/>,
    <CampingOptions/>,
    <PersonalInfo/>,
    <PaymentForm/>,
    <CheckoutSummary/>,
  ];

  return (
    <div className="booking-container">
      <h1 className="text-2xl font-bold">Book Your Festival Tickets</h1>
      <div>{steps[currentStep]}</div>
      <div className="navigation-buttons">
        {currentStep > 0 && (
          <button onClick={() => setCurrentStep((prev) => prev - 1)}>
            Back
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button onClick={() => setCurrentStep((prev) => prev + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
