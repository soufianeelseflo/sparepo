export async function POST(req: Request) {
  const f = await req.formData();
  const payload = Object.fromEntries(f.entries());
  console.log("Contact form", payload);
  return new Response("OK", { status: 200 });
}
