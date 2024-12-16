"use client";

import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";

export default function TicketSelection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

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

        <input type="submit" className="btn"/>
      </form>
    </div>
  );
}
