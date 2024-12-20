import HeroSingle from "./HeroSingle";

const BandSingleView = ({ band }) => {
  const { name, members, genre, bio, logo, logoCredits } = band;
  return (
    <div>
      <HeroSingle band={band} />
      <div className="grid grid-cols-2 grid-rows-2 py-12 lg:mx-40 mx-5">
        <div className="mt-5">
          <h2 className="text-3xl font-GermaniaOneRegular">Members</h2>
          {members.map((member, index) => (
            <p className="font-Gambetta" key={index}>
              {member}
            </p>
          ))}
        </div>
        <div className="row-span-2">
          <h2 className="text-3xl text-center font-GermaniaOneRegular">
            About
          </h2>
          <p className="max-w-[442px] m-auto font-Gambetta">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default BandSingleView;
