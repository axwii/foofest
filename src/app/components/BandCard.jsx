
import Link from "next/link";
const ArtistCard = ({ band }) => {
  const { name,logo, slug } = band;
  return (
    <li key={band.slug} className="h-80">
      <Link href={`/lineup/${slug}`} className="grid grid-rows-1 grid-cols-1">
        <div className="col-span-1 row-span-1 relative h-80">
        <img src={logo} alt={`${name} logo`} className="object-cover h-full w-full" />
        </div>
        <h2 className="">
          {name}
        </h2>
      </Link>
    </li>
  );
};

export default ArtistCard;