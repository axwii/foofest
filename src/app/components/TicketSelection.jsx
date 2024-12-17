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

  const tickets = [
    {
      title: "Foo Fest Billet",
      price: "Fra 799 DKK",
      description: [
        "Neque porro quisquam est qui dolorem ipsum",
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
        "Neque porro quisquam est",
      ],
      image: "/images/foobillet.jpg",
      type: "Regular",
    },
    {
      title: "VIP Billet",
      price: "Fra 1299 DKK",
      description: [
        "Neque porro quisquam est qui dolorem ipsum",
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
        "Neque porro quisquam est",
      ],
      image: "/images/VIPbillet.jpg",
      type: "VIP", 
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white py-8">
      <h1 className="text-center text-5xl font-bold text-yellow-100 mb-12">
        Billetter
      </h1>
      <div className="max-w-6xl space-y-12">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row overflow-hidden lg:h-96 lg:relative border-y lg:border-none"
          >
            {/* Image */}
            <div className="md:w-1/3 m-5 lg:ml-20">
              <img
                src={ticket.image}
                alt={ticket.title}
                className="w-full lg:w-72 h-48 md:h-full object-cover rounded-3xl"
              />
            </div>

            {/* Ticket Details */}
            <div className="w-full md:w-2/3 p-6 m-auto lg:h-96 lg:border-y">
              <h2 className="text-4xl mt-3 text-heading font-bold font-GermaniaOneRegular">
                {ticket.title}
              </h2>
              <p className="text-heading mt-2 font-GermaniaOneRegular text-3xl">
                {ticket.price}
              </p>
              <ul className="mt-10 space-y-2 text-gray-300">
                {ticket.description.map((desc, i) => (
                  <li key={i} className="list-disc list-inside">
                    {desc}
                  </li>
                ))}
              </ul>

              {/* Counter */}
              <div className="mt-6 flex items-center space-x-4 lg:absolute top-4 right-4">
              <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            placeholder="0"
            {...register(ticket.type, { min: 0 })}
            className="input input-bordered"
          />
          
        </form>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-10">
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="submit" className="btn  rounded-full border-black text-black hover:text-white py-2 px-6 w-44 flex items-center gap-4 justify-center bg-gold" />
        </form>
      </div>
    </div>
  );
}