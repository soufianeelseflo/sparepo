export default function About() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-3xl">
        <h1 className="h1">About Aurora Spa</h1>
        <p className="mt-4 text-gray-700 leading-7">
          We started Aurora to make spa care simpler: considerate therapists, a clear menu, and an experience
          that feels calm from booking to checkout. No hard sells. No mystery pricing. Just good work done well.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">What we stand for</h2>
        <ul className="mt-4 list-disc pl-5 text-gray-700 leading-7">
          <li><strong>Skill first:</strong> Licensed therapists with ongoing training in skin health and bodywork.</li>
          <li><strong>Clean & evidence-minded:</strong> Gentle, well-formulated products over trends.</li>
          <li><strong>Respect for time:</strong> Punctual starts, efficient booking, realistic treatment plans.</li>
          <li><strong>Clear pricing:</strong> The price you see is the price you pay—no mandatory add-ons.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">Your visit</h2>
        <p className="mt-4 text-gray-700 leading-7">
          Expect a short check-in, a focused treatment tailored to your goal today, and simple aftercare notes you
          can actually follow. If something isn’t right, tell us—we’ll make it right.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Health & accessibility</h2>
        <ul className="mt-4 list-disc pl-5 text-gray-700 leading-7">
          <li>Rooms sanitized between guests; standard infection-control practices.</li>
          <li>Share allergies, sensitivities, or conditions during booking so we can adapt safely.</li>
          <li>Wheelchair accessible. Need accommodations? Email us ahead of time.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">Questions?</h2>
        <p className="mt-4 text-gray-700 leading-7">Email: hello@example.com</p>
      </div>
    </section>
  );
}
