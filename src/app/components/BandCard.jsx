"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const ArtistCard = ({ band, schedule }) => {
  const { name, logo, slug } = band; // Band data
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      setLoaded(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      key={band.slug}
      className={`relative flex flex-col items-center font-GermaniaOneRegular justify-center bg-black w-81 h-90 m-auto text-white overflow-hidden transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
    >
      {loaded && (
        <Link href={`/lineup/${slug}`} className="flex flex-col items-center justify-center text-center w-full h-full">
          <Image
            src={logo.includes('http') ? logo : `/images/logos/${logo}`}
            width={350}
            height={350}
            alt={`${name} logo`}
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h2 className="mt-4 text-2xl font-bold">
              {name}
            </h2>
            {/* Dynamisk visning af tidsplan og sted */}
            {schedule ? (
              <div className="absolute bottom-4 flex justify-between w-full px-4 text-lg">
                <span>{schedule.start} - {schedule.end}</span>
                <span>{schedule.location || "Ukendt sted"}</span>
              </div>
            ) : (
              <div className="absolute bottom-4 text-lg px-4">
                <span>Ingen tidsplan tilgængelig</span>
              </div>
            )}
          </div>
        </Link>
      )}
    </div>
  );
};

export default ArtistCard;
