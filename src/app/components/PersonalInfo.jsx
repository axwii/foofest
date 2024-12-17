"use client";

import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";

export default function TicketSelection({ updateTicketData, ticketData }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // ikke nødvendig. Blot placeholder til at vise at dataen er tilgængelig
  const onSubmit = data => console.log(data);
  // testing i console 
  console.log(errors);

  return (
    <div>
      <h2>Personal info</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          className="input input-bordered w-full max-w-xs "
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
          className="input input-bordered w-full max-w-xs"
        />

        <input type="submit" />
      </form>
    </div>
  );
}
