"use client";

import React from "react";
import { useForm } from "react-hook-form";

const PaymentForm = () => {
  const { register, handleSubmit, watch, setFocus } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleInputFocus = (evt) => {
    setFocus(evt.target.name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          {...register("number")}
          onFocus={handleInputFocus}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          {...register("name")}
          onFocus={handleInputFocus}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          {...register("expiry")}
          onFocus={handleInputFocus}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          name="cvc"
          placeholder="CVC"
          {...register("cvc")}
          onFocus={handleInputFocus}
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PaymentForm;
