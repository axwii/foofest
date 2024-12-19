const url = process.env.NEXT_PUBLIC_URL;

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  prefer: "return=representation",
  userAgent: "Thunder Client (https://www.thunderclient.com)",
};

export async function getBands() {
  const response = await fetch(`${url}/bands`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data;
}

export async function getSingleBands(slug) {
  const response = await fetch(`${url}/bands/${slug}`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data;
}

export async function getSchedule() {
  const response = await fetch(`${url}/schedule`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data;
}

export async function getAvailableSpots() {
  const response = await fetch(`${url}/available-spots`, {
    method: "GET",
    headers: {},
  });

  const data = await response.json();
  return data;
}

export async function PutReserveSpot({ area, amount }) {
  const response = await fetch(`${url}/reserve-spot`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ area, amount }),
  });

  const data = await response.json();
  return data;
}

export async function PostFulfillReservation(reservationId) {
  const response = await fetch(`${url}/fullfill-reservation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: reservationId }),
  });

  const data = await response.json();
  return data;
}
export async function getMatchedBandsAndSchedule() {
  // Fetch begge datasets parallelt
  const results = await Promise.allSettled([getBands(), getSchedule()]);

  // Håndter resultaterne
  const bands = results[0].status === "fulfilled" ? results[0].value : [];
  const schedule = results[1].status === "fulfilled" ? results[1].value : [];

  // Match bands og schedule
  const matchedData = schedule.map((scheduleItem) => {
    const matchingBand = bands.find((band) => band.name === scheduleItem.act);

    return {
      ...scheduleItem, // Behold schedule data (start, end, act)
      bandDetails: matchingBand || null, // Tilføj band data eller null hvis der ikke er match
    };
  });

  return matchedData;
}