import type { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <section className="container section">
      <h1 className="h1">Contact & Booking</h1>
      <p className="lead mt-3">Send us a note and we’ll confirm your appointment by email.</p>
      <form className="mt-8 grid gap-4 sm:max-w-lg" method="post" action="/api/contact">
        <div><Label htmlFor="name">Full name</Label><Input id="name" name="name" required placeholder="Jane Doe" /></div>
        <div><Label htmlFor="email">Email</Label><Input id="email" type="email" name="email" required placeholder="you@example.com" /></div>
        <div>
          <Label htmlFor="message">Message</Label>
          <input id="message" name="message" className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400" placeholder="I’d like to book a facial on Friday…" />
        </div>
        <button className="inline-flex rounded-xl bg-brand-600 px-4 py-2 font-medium text-white hover:bg-brand-700" type="submit">Send</button>
      </form>
      <p className="mt-6 text-sm text-gray-500">We reply within one business day.</p>
    </section>
  );
}
