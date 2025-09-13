import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Basic IP-ish extraction for rate limit (works behind proxies with x-forwarded-for)
export function getClientIP(req: Request) {
  const h = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "";
  const ip = h.split(",")[0]?.trim();
  return ip || "local";
}
