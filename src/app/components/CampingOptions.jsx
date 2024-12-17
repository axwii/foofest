"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getAvailableSpots } from "@/app/lib/api";

export default function CampingOptions() {
  const [spots, setSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  useEffect(() => {
    getAvailableSpots().then(setSpots);
  }, []);

  const handleReserve = (event) => {
    event.preventDefault();
    // Your reservation logic here
    console.log('Reservation made');
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
                onChange={() => setSelectedSpot(spot.area)}
              />
              {spot.area} ({spot.available} spots available)
            </label>
          </div>
        ))}
        <button onClick={handleReserve} disabled={!selectedSpot} className="btn">
          Reserve Spot
        </button>
      </form>
    </div>
  );
}