import { getBands } from "@/app/lib/api";
import BandList from "../components/BandList";

export default async function Home() {
  const bands = await getBands();

  return (
    <div className="bg-black">
      <BandList bands={bands} />
    </div>
  );
}