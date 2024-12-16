"use client";

import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";

export default function TicketSelection({ updateTicketData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateTicketData(data);
    console.log("data from component", data);
  };

  console.log("error?", errors);

  return (
    <div>
      <h2>Select Your Tickets</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="Regular"
          {...register("Regular", { min: 0 })}
          className="input input-bordered"
        />
        <input
          type="number"
          placeholder="VIP"
          {...register("VIP", { min: 0 })}
          className="input input-bordered"
        />
        <input type="submit" className="btn" />
      </form>
    </div>
  );
}
