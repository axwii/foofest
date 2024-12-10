import Image from "next/image";
import Button from "./components/Button";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>     
      <Hero />
       <Button text="Program" />
    </div>
  );
}
