"use client";

import { getAvailableSpots } from "@/app/lib/api";

export default function CampingOptions() {
  const data = getAvailableSpots();
  console.log(data);

  return (
    <div>
      <h2>Camping Options</h2>
    </div>
  );
}
