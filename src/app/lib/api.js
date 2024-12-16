import { get } from "react-hook-form";

const url = process.env.NEXT_PUBLIC_URL;

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  prefer: "return=representation",
  userAgent: "Thunder Client (https://www.thunderclient.com)",
};

export async function getBands() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/bands`);
    console.log(`Requesting bands from: ${process.env.NEXT_PUBLIC_URL}/bands`);

    if (!response.ok) {
      throw new Error(`Failed to fetch bands: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching bands:", error);
    throw error;
  }
}

export async function getSchedule() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/schedule`);
    console.log(`Requesting schedule from: ${process.env.NEXT_PUBLIC_URL}/schedule`);

    if (!response.ok) {
      throw new Error(`Failed to fetch schedule: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching schedule:", error);
    throw error;
  }
}

/* 
export async function getBands() {
  const response = await fetch(`${url}/bands`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data;
} */

export async function getSingleBands(slug) {
  const response = await fetch(`${url}/bands/${slug}`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data;
}

/* export async function getSchedule() {
  const response = await fetch(`${url}/schedule`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data;
} */

export async function getAvailableSpots() {
  const response = await fetch(`${url}/available-spots`, {
    method: "GET",
    headers: {},
  });

  const data = await response.json();
  return data;
}

export async function PutReserveSpot(area, amount) {
  const response = await fetch(`${url}/reserve-spot`, {
    method: "PUT",
    headers: headersList,
    body: JSON.stringify({ area, amount }),
  });

  const data = await response.json();
  return data;
}

export async function PostFulfillReservation(reservationId) {
  const response = await fetch(`${url}/fullfill-reservation`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify({ id: reservationId }),
  });

  const data = await response.json();
  return data;
}

export async function getMatchedBandsAndSchedule() {
  try {
    console.log("Fetching bands...");
    const bands = await getBands(); // Henter bands
    console.log("Fetching schedule...");
    const schedule = await getSchedule(); // Henter schedule

    // Log hele schedule-dataen for at se hvad vi modtager
    console.log("Schedule data:", schedule);

    // Kontrollér om schedule er et array
    if (Array.isArray(schedule)) {
      console.log("Schedule is an array.");
    } else {
      console.log("Schedule is NOT an array, it is:", typeof schedule);
    }

    // Tjek om schedule er et array før vi prøver at mappe
    if (!Array.isArray(schedule)) {
      throw new Error("Schedule is not an array");
    }

    // Hvis schedule er et array, kan vi mappe over det
    const matchedData = schedule.map((scheduleItem) => {
      const matchingBand = bands.find((band) => band.name === scheduleItem.act);
      return {
        ...scheduleItem,
        bandDetails: matchingBand || null,
      };
    });

    console.log("Matched Data:", matchedData);
    return matchedData;
  } catch (error) {
    console.error("Error fetching or matching data:", error);

    // Hvis fetch fejler, log hvad der gik galt
    if (error instanceof TypeError) {
      console.error("TypeError - perhaps a fetch or undefined issue?", error);
    } else if (error instanceof Error) {
      console.error("General Error:", error.message);
    }

    // Returner null for at indikere fejlen
    return null;
  }
}



