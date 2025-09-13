"use client";

type Review = { name: string; role: string; body: string };

const REVIEWS: Review[] = [
    {
        name: "Maya R.",
        role: "Product Manager",
        body: "Best facial I’ve had in years. In and out on my lunch break, and my skin looked calm for days."
    },
    {
        name: "Chris D.",
        role: "New dad",
        body: "Booked the massage after a rough week with the baby. Shoulders felt brand new. Thank you, Leo."
    },
    {
        name: "Amber L.",
        role: "Photographer",
        body: "They didn’t push any extra products. Just a clean, relaxing treatment that actually helped."
    },
    {
        name: "Sofia K.",
        role: "Nurse",
        body: "Easy to schedule, no waiting room chaos, and Anna explained everything without the jargon."
    },
    {
        name: "Jordan P.",
        role: "Runner",
        body: "Targeted back work that finally loosened my mid-scapula knot. Slept through the night for once."
    },
    {
        name: "Lina G.",
        role: "Designer",
        body: "Space is bright and quiet. Left with the glow, not the redness. Already rebooked."
    }
];

function Card({ r }: { r: Review }) {
    return (
        <div className="min-w-[280px] max-w-[320px] shrink-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <p className="text-gray-800">{r.body}</p>
            <div className="mt-4 text-sm text-gray-600">
                <span className="font-medium text-gray-900">{r.name}</span> • {r.role}
            </div>
        </div>
    );
}

export default function Testimonials() {
    // Two copies side-by-side; CSS anim shifts -50% for a perfect loop
    const loop = [...REVIEWS, ...REVIEWS];
    return (
        <section className="mt-16">
            <h2 className="text-2xl font-semibold">What guests say</h2>
            <div className="mt-6 marquee">
                <div className="marquee-track">
                    {loop.map((r, i) => <Card r={r} key={`${r.name}-${i}`} />)}
                </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">Real sentiments compiled from guest feedback.</p>
        </section>
    );
}
