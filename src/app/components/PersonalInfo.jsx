"use client";

import React, { useRef } from "react";
import TicketForm from "./PersonalInfoForm";

export default function PersonalInfo({ updateTicketData, ticketData }) {
  const formDataRef = useRef({ regular: [], vip: [] });

  const handleFormChange = (index, data, type) => {
    formDataRef.current[type][index] = data;
  };

  const handleSubmit = () => {
    updateTicketData({ personalInfo: formDataRef.current });
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
    <div className="ml-8">
      <div className="ml-10">
      <h2 className="text-8xl font-GermaniaOneRegular text-heading">Personal info</h2>
      <h4 className="text-xl font-Gambetta font-thin italic" >Fill out you information here</h4>
      </div>
      {renderTicketForms(ticketData.regular, "Regular")}
      {renderTicketForms(ticketData.vip, "VIP")}
      <button className="mt-10" onClick={handleSubmit}>Submit</button>
    </div>
  );
}