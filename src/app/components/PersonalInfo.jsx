"use client";

import React, { useRef } from "react";
import TicketForm from "./PersonalInfoForm";

export default function TicketSelection({ updateTicketData, ticketData }) {
  const formDataRef = useRef({ regular: [], vip: [] });

  const handleFormChange = (index, data, type) => {
    formDataRef.current[type][index] = data;
  };

  const handleSubmit = () => {
    updateTicketData(formDataRef.current);
  };

  const renderTicketForms = (ticketCount, type) => {
    return Array.from({ length: parseInt(ticketCount) }).map((_, index) => (
      <TicketForm
        key={`${type}-${index}`}
        type={type}
        index={index}
        onFormChange={(i, data) =>
          handleFormChange(i, data, type.toLowerCase())
        }
      />
    ));
  };

  return (
    <div>
      <h2>Personal info</h2>
      {renderTicketForms(ticketData.regular, "Regular")}
      {renderTicketForms(ticketData.vip, "VIP")}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
