import BandCard from "./BandCard";
const BandList = ({ bands }) => {
  if (bands.length === 0) {
    return <p>Ingen bands fundet</p>;
  }

  return (
    <ul className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3   ">
      {bands.map((band) => (
        <BandCard band={band} key={band.slug} />
      ))}
    </ul>
  );
};

export default BandList;