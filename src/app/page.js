import Image from "next/image";
import Button from "./components/Button";
import Hero from "./components/Hero";
import Accordion from "./components/Accordion";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex space-x-40 justify-center mt-12">
        <Button text="Program" link="lineup"/>
        <Button text="Billetter" link="ticket"/>
        <Button text="Frivillig" link="volunteer"/>
      </div>
      <h2 className="text-center text-8xl mt-12 font-Gambetta font-thin">
        Line-up
      </h2>
      <Accordion />

      </div>
  );
}
