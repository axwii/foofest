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
  const onSubmit = data => console.log(data);

  const handleReserve = async () => {
    const amount = parseInt(ticketData.Regular || 0) + parseInt(ticketData.VIP || 0);
    const reservation = await PutReserveSpot({ area, amount });
    updateTicketData({ 
      area: area, 
      amount: amount, 
      reservationId: reservation.id, 
      regular: ticketData.Regular, 
      vip: ticketData.VIP 
    });

    // testing data in console 
    console.log("ticketData for the API", { area, amount });
    console.log("Reservation log", reservation);
    console.log("reservation:", reservation.message);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col py-12">
      <h1 className="text-6xl font-bold text-yellow-100 mb-6 font-GermaniaOneRegular">
        Camping
      </h1>
      <p className="text-lg mb-8 text-gray-300">
        CAMPING RESERVATION 99 DKK
      </p>
      <form
        className="grid grid-cols-2 gap-4 w-3/4 md:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        {spots.map((spot) => (
          <div className="p-10 border rounded-xl" key={spot.area}>
            <label className="text-xl font-bold">
              <input 
                {...register("Area")}
                type="radio"
                value={spot.area}
                disabled={spot.available === 0}
                onChange={() => setArea(spot.area)}
              />
                         <span
                className={`block text-gray-100 ${
                  spot.available === 0 ? "opacity-50" : "cursor-pointer"
                }`}
              >
                {spot.area}
              </span>
            </label>
            <span
              className={`text-gray-400 ${
                spot.available === 0 ? "text-red-500" : "text-gray-300"
              }`}
            >
              {spot.available} ledige pladser
            </span>  
          </div>
        ))}
        <button onClick={handleReserve} disabled={!area} className="btn">
          Reserve Spot
        </button>
      </form>
    </div>
  );
}