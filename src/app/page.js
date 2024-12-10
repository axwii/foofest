import Image from "next/image";
import Button from "./components/Button";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>     
      <Hero />
      <div className="flex space-between">
       <Button text="Program" />
       <Button text="Billetter" />
       <Button text="Frivillig" />
       </div>
    </div>
  );
}
