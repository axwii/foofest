"use client";

import Link from "next/link";
import { useState } from "react";

const Lineup = ({ bands }) => {
 
  if (bands.length === 0) {
    return <p>Ingen bands fundet</p>;
  }

  return (
    <div className="mt-14">
          <div className="text-center m-auto gap-x-2 justify-center flex flex-wrap max-w-[1250px] font-Gambetta">
      {bands.slice(0, 6).map((band, index) => (
        <Link 
          key={index} 
          href={{
            pathname: `/lineup/${band.slug}`,
            query: { ...band }
          }}
          alt={`${band.name} logo`} 
        >
          <p className="text-[65px] hover:text-red-500 mt-[-30px] hover:scale-105">{`${band.name} -`}</p>
        </Link>
      ))}
      </div>
      <div className="text-center m-auto gap-x-2 justify-center flex flex-wrap max-w-[1100px] font-Gambetta">
      {bands.slice(7, 17).map((band, index) => (
                <Link 
                key={index} 
                href={{
                  pathname: `/lineup/${band.slug}`,
                  query: { ...band }
                }}
                alt={`${band.name} logo`} 
              >
                <p className="text-[35px] hover:text-red-500 hover:scale-105 mt-[-10px]">{`${band.name} -`}</p>
              </Link>
      ))}
      </div>
      <div className="text-center m-auto gap-x-5 gap-y-2 justify-center flex flex-wrap w-[75%] mt-2 font-Gambetta">
      {bands.slice(18, 28).map((band, index) => (
                <Link 
                key={index} 
                href={{
                  pathname: `/lineup/${band.slug}`,
                  query: { ...band }
                }}
                alt={`${band.name} logo`} 
              >
                <p className="text-xl hover:text-red-500 hover:scale-105">{`${band.name} -`}</p>
              </Link>
      ))}
      </div>
    </div>
  );
};

export default Lineup;