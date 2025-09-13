export default function TOS() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-3xl">
        <h1 className="h1">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-500"><em>Effective date: {new Date().toLocaleDateString()}</em></p>

        <h2 className="mt-10 text-2xl font-semibold">1. Agreement</h2>
        <p className="mt-4 text-gray-700 leading-7">
          By accessing this website, you agree to these Terms of Service (“Terms”). If you do not agree, please do not use the site.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">2. Services & content</h2>
        <p className="mt-4 text-gray-700 leading-7">
          Information about services and pricing is provided for convenience and may change without notice. Availability is not guaranteed until confirmed by us.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">3. Appointments & cancellations</h2>
        <ul className="mt-4 list-disc pl-5 text-gray-700 leading-7">
          <li>Requests submitted online are pending until we confirm by email or phone.</li>
          <li>Please provide at least 24 hours’ notice to cancel or reschedule to avoid a cancellation fee.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">4. Payments</h2>
        <p className="mt-4 text-gray-700 leading-7">
          If online payments are enabled, additional checkout terms may apply. You agree to provide accurate billing information and authorize applicable charges.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Acceptable use</h2>
        <p className="mt-4 text-gray-700 leading-7">
          Do not misuse the site, including attempting to breach security, scraping at scale, or posting unlawful or infringing content.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">6. Health information</h2>
        <p className="mt-4 text-gray-700 leading-7">
          We don’t request medical records through the website. Share relevant sensitivities or conditions privately during booking so we can adapt treatments safely.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">7. Intellectual property</h2>
        <p className="mt-4 text-gray-700 leading-7">
          Content on this site is owned by or licensed to us and protected by law. You may not copy or distribute without permission.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">8. Disclaimers</h2>
        <p className="mt-4 text-gray-700 leading-7">
          The site is provided “as is” without warranties of any kind. We do not warrant uninterrupted or error-free operation.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">9. Limitation of liability</h2>
        <p className="mt-4 text-gray-700 leading-7">
          To the maximum extent permitted by law, we are not liable for indirect, incidental, special, or consequential damages arising from your use of the site.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">10. Changes</h2>
        <p className="mt-4 text-gray-700 leading-7">
          We may update these Terms from time to time. Continued use after changes means you accept the updated Terms.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">11. Contact</h2>
        <p className="mt-4 text-gray-700 leading-7">Email: legal@example.com</p>
      </div>
    </section>
  );
}
