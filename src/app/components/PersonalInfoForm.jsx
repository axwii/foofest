import React from "react";
import { useForm } from "react-hook-form";

export default function TicketForm({ type, index, onFormChange }) {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = data => {
    onFormChange(index, data);
  };

  const formData = watch();
  React.useEffect(() => {
    onFormChange(index, formData);
  }, [formData]);

  return (
    <div className="bg-black text-white p-8 ml-2 lg:w-3/4">
      <h3 className="text-3xl font-bold font-GermaniaOneRegular mb-2">{type} Billet</h3>
      <p className="text-lg mb-2 font-Gambetta">Festivalgæst NR.{index + 1}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 font-Gambetta ">
        <div>
          <label className="block text-sm" htmlFor="firstName">Fornavn</label>
          <input
            id="firstName"
            type="text"
            placeholder="Fornavn"
            {...register("firstName", { required: true, maxLength: 80 })}
            className="bg-[#D9D9D9] text-black w-full p-2 rounded-lg focus:outline-none placeholder-black"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="lastName">Efternavn</label>
          <input
            id="lastName"
            type="text"
            placeholder="Efternavn"
            {...register("lastName", { required: true, maxLength: 100 })}
            className="bg-[#D9D9D9] text-black w-full p-2 rounded-lg focus:outline-none placeholder-black"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Eksempel@mail.com"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="bg-[#D9D9D9] text-black w-full p-2 rounded-lg focus:outline-none placeholder-black"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="mobileNumber">Telefon</label>
          <input
            id="mobileNumber"
            type="tel"
            placeholder="12 34 56 78"
            {...register("mobileNumber", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
            className="bg-[#D9D9D9] text-black w-full p-2 rounded-lg focus:outline-none placeholder-black"
          />
        </div>
      </form>
      <hr className="mt-12 mb-[-20px]"/>
    </div>
  );
}