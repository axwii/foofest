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
    <div>
      <h3>{type} Ticket {index + 1}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("firstName", { required: true, maxLength: 80 })}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="input input-bordered w-full max-w-xs "
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
          className="input input-bordered w-full max-w-xs"
        />
      </form>
    </div>
  );
}