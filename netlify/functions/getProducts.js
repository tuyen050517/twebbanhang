export async function handler() {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_KEY;

  const res = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
  });

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
