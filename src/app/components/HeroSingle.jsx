const HeroSingle = () => {
    return (
      <div className="hero min-h-screen flex items-center justify-center relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/forsideimg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px)",
            zIndex: -1
          }}
        ></div>
        <div className="hero-overlay bg-opacity-60 absolute inset-0" style={{ zIndex: 0 }}></div>
        <div className="hero-content text-neutral-content text-center relative" style={{ zIndex: 1 }}>
          <div className="">
            <h1 className="mb-5 text-7xl md:text-8xl lg:text-9xl font-GermaniaOneRegular">Foo Fest</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSingle;