"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getAvailableSpots, PutReserveSpot } from "@/app/lib/api";

export default function CampingOptions({ updateTicketData, ticketData }) {
  const [spots, setSpots] = useState([]);
  const [area, setArea] = useState(null);
  const { register, handleSubmit } = useForm();

  // henter data, når komponenten aktiveres
  useEffect(() => {
    getAvailableSpots().then(setSpots);
  }, []);

  // ikke nødvendig. Blot placeholder til at vise at dataen er tilgængelig
  const onSubmit = (data) => console.log(data);

  const handleReserve = async () => {
    const amount =
      parseInt(ticketData.Regular || 0) + parseInt(ticketData.VIP || 0);
    const reservation = await PutReserveSpot({ area, amount });
    updateTicketData({
      area: area,
      amount: amount,
      reservationId: reservation.id,
      regular: ticketData.Regular,
      vip: ticketData.VIP,
    });

    // testing data in console
    console.log("ticketData for the API", { area, amount });
    console.log("Reservation log", reservation);
    console.log("reservation:", reservation.message);
  };

  return (
    <div className="min-h-screen ml-20 bg-black text-white flex flex-col pb-12">
      <h1 className="text-8xl font-bold text-heading mb-6 font-GermaniaOneRegular">
        Camping
      </h1>
      <p className="mb-8 text-xl font-Gambetta font-thin italic">
        CAMPING RESERVATION 99 DKK
      </p>
      <form
        className="grid md:grid-cols-2 gap-y-7 md:w-[520px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {spots.map((spot) => (
          <label
            className={`w-[216px] h-[105px] border rounded-xl bg-[#242424] ${
              area === spot.area ? "border-red-500" : "border-transparent"
            }`}
            key={spot.area}
          >
            <input
              {...register("Area")}
              type="radio"
              value={spot.area}
              disabled={spot.available === 0}
              onChange={() => setArea(spot.area)}
              className="hidden "
            />
            <span
              className={`block text-2xl font-GermaniaOneRegular font-bold text-gray-100 ml-8 mt-5 ${
                spot.available === 0 ? "opacity-50" : "cursor-pointer"
              }`}
            >
              {spot.area}
            </span>
            <span
              className={`text-gray-400 ml-8 font-Gambetta ${
                spot.available === 0 ? "text-red-500" : "text-gray-300"
              }`}
            >
              {spot.available} ledige pladser
            </span>
          </label>
        ))}
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button onClick={handleReserve} disabled={!area} className="btn mt-7">
          Reserve Spot
        </button>
      </form>
    </div>
  );
}
