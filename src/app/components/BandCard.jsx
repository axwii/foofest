"use client";

import Link from "next/link";

const ArtistCard = ({ band, schedule }) => {
  const { name, logo, slug } = band;
  return (
    <div 
      key={band.slug} 
      className="relative flex flex-col items-center font-GermaniaOneRegular justify-center bg-black w-81 h-90 m-auto text-white border border-gray-700 overflow-hidden"
    >
      <Link href={`/lineup/${slug}`} className="flex flex-col items-center justify-center text-center w-full h-full">
        <img 
          src={logo} 
          onError={(e) => { e.target.onerror = null; e.target.src = `/images/logos/${logo}`; }}
          alt={`${name} logo`} 
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="mt-4 text-2xl font-bold">
            {name}
          </h2>
          <div className="absolute bottom-4 flex justify-between w-full px-4 text-lg">
            <span>04:00 - 06:00 mon</span>
            <span>Midgard</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArtistCard;
