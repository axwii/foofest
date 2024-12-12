import { getSingleBands } from "@/app/lib/api";
import BandSingleView from "@/app/components/BandSingleView";
import HeroSingle from "@/app/components/HeroSingle";

async function Slug({ params }) {
  const { slug } = await params;
  const band = await getSingleBands(slug);
  return (
    <div>
      <BandSingleView band={band} />
    </div>
  );
}

export default Slug;
