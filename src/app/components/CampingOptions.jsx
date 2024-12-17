"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getAvailableSpots } from "@/app/lib/api";

export default function CampingOptions() {
  const [spots, setSpots] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  useEffect(() => {
    getAvailableSpots().then(setSpots);
  }, []);

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
              />
              {spot.area} ({spot.available} spots available)
            </label>
          </div>
        ))}
        <input type="submit" />
      </form>
    </div>
  );
}