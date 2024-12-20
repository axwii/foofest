const HeroSingle = ({ band = {} }) => {
  const { name, logo } = band;
  return (
    <div className="hero min-h-60 flex items-center justify-center relative mt-[-85px]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/logos/${logo}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px)",
          zIndex: -1,
        }}
      ></div>
      <div
        className="hero-overlay bg-opacity-60 absolute inset-0"
        style={{ zIndex: 0 }}
      ></div>
      <div
        className="hero-content text-neutral-content text-left absolute bottom-[-35px] lg:left-12 left-0"
        style={{ zIndex: 1 }}
      >
        <div className="">
          <h1 className="mb-5 text-6xl md:text-7xl lg:text-8xl font-GermaniaOneRegular">
            {name}
          </h1>
        </div>
      </div>
      <img
        src={`/images/logos/${logo}`}
        alt={name}
        className="absolute bottom-[-5px] lg:right-[100px] md:right-[75px] right-[10px] max-h-[150px] max-w-[150px]"
        style={{ zIndex: 1, borderRadius: "100%" }}
      />
    </div>
  );
};

export default HeroSingle;
