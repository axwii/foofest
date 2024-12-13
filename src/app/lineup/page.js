import { getBands } from "@/app/lib/api";
import BandList from "../components/BandList";

export default async function Home() {
  const bands = await getBands();
//   console.log(bands);

  return (
    <div className="bg-black">
      <BandList bands={bands} />
    </div>
  );
}