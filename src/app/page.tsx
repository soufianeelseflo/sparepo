import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Sparkles, Clock } from "lucide-react";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="h1">Breathe in. Book out.</h1>
        <p className="lead mt-4">
          Treatments that respect your time and your skin. Clear menu, honest pricing, calm from the moment you book.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link className="inline-flex rounded-xl border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50" href="/services">See services</Link>
          <Link className="inline-flex rounded-xl bg-brand-600 px-4 py-2 font-medium text-white hover:bg-brand-700" href="/contact">Request an appointment</Link>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          <Badge>Mobile-first</Badge>
          <Badge>Lightning-fast</Badge>
          <Badge>Zero pressure</Badge>
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: <Leaf className="h-5 w-5" />, title: "Clean ingredient focus", desc: "Evidence-minded formulas. Gentle where it matters." },
          { icon: <Sparkles className="h-5 w-5" />, title: "Signature glow facials", desc: "Hydration, clarity, and consistency over hype." },
          { icon: <Clock className="h-5 w-5" />, title: "Book in minutes", desc: "No accounts or upsell gauntlets. Just pick a time." }
        ].map((f, i) => (
          <Card key={i} className="h-full">
            <CardHeader className="flex items-center gap-2">
              <span className="rounded-xl bg-brand-50 p-2 text-brand-700">{f.icon}</span>
              <CardTitle>{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{f.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Testimonials (infinite, smooth) */}
      <Testimonials />

      {/* New guest offer */}
      <div className="mt-16 rounded-2xl bg-brand-50 p-6">
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">New guest offer</h2>
            <p className="mt-2 text-gray-700">First visit? Take $20 off—just mention “Aurora” at check-in.</p>
            <Link href="/pricing" className="inline-flex rounded-xl bg-brand-600 px-4 py-2 font-medium text-white hover:bg-brand-700 mt-4">
              View pricing
            </Link>
          </div>
          <img alt="relax" src="https://picsum.photos/seed/aurora/640/380" className="w-full rounded-2xl border border-gray-200 shadow-sm" />
        </div>
      </div>
    </section>
  );
}
