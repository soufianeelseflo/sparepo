import { getClientIP } from "@/lib/utils";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  const ip = getClientIP(req);
  if (!rateLimit(`chat:${ip}`, 8, 0.5)) {
    return new Response(JSON.stringify({ error: "Too many requests. Slow down." }), { status: 429 });
  }

  const { message } = await req.json().catch(() => ({} as any));
  if (!message || typeof message !== "string" || message.length > 500) {
    return new Response(JSON.stringify({ error: "Invalid message" }), { status: 400 });
  }

  const key = process.env.OPENROUTER_API_KEY;
  const base = process.env.OPENROUTER_BASE_URL || "https://openrouter.ai/api/v1";
  const model = process.env.OPENROUTER_MODEL || "openrouter/sonoma-dusk-alpha";
  if (!key) {
    return new Response(JSON.stringify({ error: "Server not configured: OPENROUTER_API_KEY missing" }), { status: 500 });
  }

  const system = "You are Aurora, a friendly spa assistant. Be concise, helpful, and brand-aligned. You can explain services and pricing, but do not make medical claims or store personal health data.";

  const res = await fetch(`${base}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${key}`,
      "HTTP-Referer": process.env.APP_URL || "http://localhost:3000",
      "X-Title": "Aurora Spa Site Chat"
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: system },
        { role: "user", content: message }
      ]
    })
  });

  if (!res.ok) {
    const text = await res.text();
    return new Response(JSON.stringify({ error: "OpenRouter error", detail: text }), { status: 502 });
  }

  const data = await res.json();
  const reply = data?.choices?.[0]?.message?.content ?? "No response.";
  return new Response(JSON.stringify({ reply }), { status: 200 });
}
