"use client"; // For at bruge hooks i Next.js
import { useEffect, useState } from "react";
import BandList from "../components/BandList";
import { getMatchedBandsAndSchedule } from "../lib/api"; // Importer funktionen

const Page = () => {
  const [bands, setBands] = useState([]); // State til data
  const [loading, setLoading] = useState(true); // State til loading-status
  const [error, setError] = useState(null); // State til at håndtere fejl

  useEffect(() => {
    async function fetchData() {
      try {
        const matchedData = await getMatchedBandsAndSchedule(); // Henter de matchede bands og schedule
        console.log("Matched Data:", matchedData); // Log matched data
        if (matchedData) {
          setBands(matchedData); // Gem dataen i state
        } else {
          setError("Kunne ikke hente data. Prøv igen senere.");
        }
      } catch (error) {
        console.error("Error fetching matched bands and schedule:", error);
        setError(`Fejl under hentning af data: ${error.message}`); // Log fejlmeddelelse
      } finally {
        setLoading(false); // Stopper loading når data er hentet
      }
    }

    fetchData(); // Kalder funktionen
  }, []);

  // Hvis data stadig er ved at blive hentet, vis en loading-tekst
  if (loading) {
    return <p>Loading...</p>;
  }

  // Hvis der opstod en fejl, vis en fejlmeddelelse
  if (error) {
    return <p>{error}</p>;
  }

  // Hvis data er hentet korrekt, render BandList med de matchede bands
  return (
    <div>
      <h1>Band Liste</h1>
      <BandList bands={bands} /> {/* Sender de matchede data som props */}
    </div>
  );
};

export default Page;
