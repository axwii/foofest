"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getAvailableSpots, PutReserveSpot } from "@/app/lib/api";

export default function CampingOptions({ updateTicketData, ticketData }) {
  const [spots, setSpots] = useState([]);
  const [area, setArea] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  useEffect(() => {
    getAvailableSpots().then(setSpots);
  }, []);

  const handleReserve = async () => {
    const amount = parseInt(ticketData.Regular || 0) + parseInt(ticketData.VIP || 0);
    const reservation = await PutReserveSpot({ area, amount });
    console.log("ticketData fpr the api", { area, amount });
    console.log("Reservation log", reservation);
    console.log("reservation:", reservation.message);
    updateTicketData({ area: area, amount: amount, reservationId: reservation.id, regular: ticketData.Regular, vip: ticketData.VIP });
  };


  return (
    <div>
      <h2>Camping Options</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {spots.map((spot) => (
          <div key={spot.area}>
            <label>
              <input
                {...register("Area")}
                type="radio"
                value={spot.area}
                disabled={spot.available === 0}
                onChange={() => setArea(spot.area)}
              />
              {spot.area} ({spot.available} spots available)
            </label>
          </div>
        ))}
        <button onClick={handleReserve} disabled={!area} className="btn">
          Reserve Spot
        </button>
      </form>
    </div>
  );
}