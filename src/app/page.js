import Image from "next/image";
import Button from "./components/Button";
import Hero from "./components/Hero";
import Accordion from "./components/Accordion";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex space-x-40 justify-center mt-12">
        <Button text="Program" />
        <Button text="Billetter" />
        <Button text="Frivillig" />
      </div>
      <h2 className="text-center text-8xl mt-12 font-Gambetta font-thin">
        Line-up
      </h2>
      <Accordion />
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
      </div>
  );
}
