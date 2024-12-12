import { getSingleBands } from "@/app/lib/api";
// import ArtistSingel from "@/app/components/AristSingel";

async function Slug({ params }) {
  const { slug } = await params;
  console.log(slug); 


  const band = await getSingleBands(slug);
  console.log(band); 

  return (
    <div>
      <h1>{band.title}</h1>
      <p>{band.content}</p>
    </div>
  );
}

export default Slug;