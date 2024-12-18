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
    <CampingOptions updateTicketData={handleUpdateTicketData} ticketData={ticketData} />,
    <PersonalInfo updateTicketData={handleUpdateTicketData} ticketData={ticketData} />,
    <PaymentForm />,
    <CheckoutSummary />,
  ];
  console.log("ticketData in the page.js", ticketData);

  return (
    <div className="booking-container">
      {/* <h1 className="text-2xl font-bold">Book Your Festival Tickets</h1> */}
      <div>{steps[currentStep]}</div>
      <div className="navigation-buttons">
        {currentStep > 0 && <button onClick={prevStep}>Back</button>}
        {currentStep < steps.length - 1 && (
          <button onClick={nextStep}>Next</button>
        )}
      </div>
      <div className="lg:w-[250px] lg:h-[300px] bg-[#242424] p-4 rounded-lg shadow-lg fixed right-5 top-1/2 transform -translate-y-1/2">
  <h1>Cart</h1>
  <p>Regular Tickets: {ticketData.regular}</p>
  <p>VIP Tickets: {ticketData.vip}</p>
</div>
    </div>
  );
}
