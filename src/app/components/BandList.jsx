import BandCard from "./BandCard";

const BandList = ({ bands }) => {
  if (!bands) {
    return <p>Data kunne ikke indlæses. Prøv igen senere.</p>;
  }

  if (bands.length === 0) {
    return <p>Ingen bands fundet</p>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-y-10 mx-[50px]">
      {bands.map((band) => (
        <BandCard band={band} key={band.slug} />
      ))}
    </div>
  );
};

export default BandList;
