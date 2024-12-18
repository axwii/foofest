"use client";

import { useState } from "react";

const Lineup = ({ bands }) => {
  if (bands.length === 0) {
    return <p>Ingen bands fundet</p>;
  }
  const { name } = bands;
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Lineup;