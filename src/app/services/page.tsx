import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = { title: "Services" };

const services = [
  { name: "Signature Massage", minutes: 60, price: 120, desc: "Personalized massage to melt stress and restore balance." },
  { name: "Glow Facial", minutes: 50, price: 110, desc: "Deep cleanse + hydration for instant radiance." },
  { name: "Prenatal Massage", minutes: 60, price: 125, desc: "Gentle support through each trimester." },
  { name: "Back Renewal", minutes: 45, price: 95, desc: "Targeted relief for shoulders, neck, and back." }
];

export default function Services() {
  return (
    <section className="container section">
      <h1 className="h1">Services</h1>
      <p className="lead mt-3">Curated treatments, honest pricing.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {services.map(s => (
          <Card key={s.name}>
            <CardHeader>
              <CardTitle>{s.name}</CardTitle>
              <CardDescription>{s.desc}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{s.minutes} min</span>
              <span className="text-lg font-semibold">${s.price}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
