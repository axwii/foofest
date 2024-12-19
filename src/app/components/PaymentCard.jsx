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
      <form className="flex flex-col gap-4 font-Gambetta" onSubmit={handleSubmit(onSubmit)}>
        <div className="m-auto w-[600px]">
          <label className="block text-sm mb-1" htmlFor="mobileNumber">Card Number</label>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          {...register("number")}
          onFocus={handleInputFocus}
          className="input input-bordered md:w-[600px] w-[485px] bg-[#D9D9D9] placeholder-black" 
        />
        </div>
        <div className="m-auto w-[600px]">
          <label className="block text-sm mb-1" htmlFor="mobileNumber">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          {...register("name")}
          onFocus={handleInputFocus}
          className="input input-bordered md:w-[600px] w-[485px] m-auto bg-[#D9D9D9] placeholder-black"
        />
        </div>
        <div className="flex space-x-[30px]  m-auto :">
        <div>
          <label className="block text-sm mb-1" htmlFor="mobileNumber">Expiry date</label>
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          {...register("expiry")}
          onFocus={handleInputFocus}
          className="input input-bordered md:w-[285px] bg-[#D9D9D9] placeholder-black"
        />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="mobileNumber">CVC</label>
        <input
          type="number"
          name="cvc"
          placeholder="CVC"
          {...register("cvc")}
          onFocus={handleInputFocus}
          className="input input-bordered md:w-[285px]  bg-[#D9D9D9] placeholder-black"
        />
        </div>
        </div>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center mt-4">
          <button type="submit" className="btn  rounded-full border-black text-black hover:text-white py-2 px-6 w-44 flex items-center gap-4 justify-center bg-gold mt-4">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
