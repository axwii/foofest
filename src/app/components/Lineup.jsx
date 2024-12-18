"use client";

import Link from "next/link";
import { useState } from "react";

const Lineup = ({ bands }) => {
 
  if (bands.length === 0) {
    return <p>Ingen bands fundet</p>;
  }

  return (
    <div className="text-center m-auto gap-10 justify-center flex flex-wrap w-[75%] mt-10">
      {bands.slice(0, 6).map((band, index) => (
        <Link 
          key={index} 
          href={{
            pathname: `/lineup/${band.slug}`,
            query: { ...band }
          }}
          alt={`${band.name} logo`} 
        >
          <p className="text-5xl hover:text-red-500 hover:scale-105">{band.name}</p>
        </Link>
      ))}
      {bands.slice(7, 17).map((band, index) => (
                <Link 
                key={index} 
                href={{
                  pathname: `/lineup/${band.slug}`,
                  query: { ...band }
                }}
                alt={`${band.name} logo`} 
              >
                <p className="text-3xl hover:text-red-500 hover:scale-105">{band.name}</p>
              </Link>
      ))}
      {bands.slice(18, 28).map((band, index) => (
                <Link 
                key={index} 
                href={{
                  pathname: `/lineup/${band.slug}`,
                  query: { ...band }
                }}
                alt={`${band.name} logo`} 
              >
                <p className="text-xl hover:text-red-500 hover:scale-105">{band.name}</p>
              </Link>
      ))}
    </div>
  );
};

export default Lineup;