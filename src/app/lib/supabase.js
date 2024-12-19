const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  apikey: key,
  Prefer: "return=representation",
};

export async function getEventBookings() {
  const response = await fetch(url, {
    method: "GET",
    headers: headersList,
  });

  const subData = await response.json();
  return subData;
}

export async function postEventBookings() {
  const response = await fetch(url, {
    method: "Post",
    headers: headersList,
    body: JSON.stringify({}),
  });

  const subData = await response.json();
  return subData;
}
