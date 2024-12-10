const url = process.env.NEXT_PUBLIC_URL;

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  prefer: "return=representation",
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
