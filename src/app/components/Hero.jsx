const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/path/to/foobillet.jpg')",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-9xl font-bold">Foo Fest</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;