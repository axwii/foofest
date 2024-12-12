import HeroSingle from "./HeroSingle";

const BandSingleView = ({ band }) => {
  const { name, members, genre, bio, logo, logoCredits } = band;
  return (
    <div>
      <HeroSingle />
      <h1>{name}</h1>
      <p>{genre}</p>
      <p>{bio}</p>
      {members.map((member, index) => (
        <p key={index}>{member}</p>
      ))}
      <img src={logo} alt={name} />
      <p>{logoCredits}</p>
    </div>
  );
};

export default BandSingleView;
