import HeroSingle from "./HeroSingle";

const BandSingleView = ({ band }) => {
  const { name, members, genre, bio, logo, logoCredits } = band;
  return (
    <div>
      <HeroSingle  band={band} />
      <h1>{name}</h1> 
      <p>{genre}</p>
      <p>{bio}</p>
      {members.map((member, index) => (
        <p key={index}>{member}</p>
      ))}
      <p>{logoCredits}</p>
    </div>
  );
};

export default BandSingleView;
