import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Pricing" };

const tiers = [
  { name: "Essential", price: 89, features: ["30–40m facials", "Basic massage", "Weekday bookings"] },
  { name: "Standard", price: 119, features: ["50–60m facials", "Deep-tissue massage", "Any day bookings"] },
  { name: "Premium", price: 159, features: ["Advanced facials", "Hot stone massage", "Priority slots"] }
];

export default function Pricing() {
  return (
    <section className="container section">
      <h1 className="h1">Pricing</h1>
      <p className="lead mt-3">Pick your pace—no hidden fees.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {tiers.map((t, i) => (
          <Card key={t.name} className={i === 1 ? "border-brand-300 shadow" : ""}>
            <CardHeader>
              <CardTitle>{t.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">${t.price}</div>
              <ul className="mt-4 list-disc pl-5 text-sm text-gray-700">
                {t.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a href="/contact"><Button className="mt-5 w-full">Book</Button></a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
