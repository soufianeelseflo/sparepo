export default function Privacy() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-3xl">
        <h1 className="h1">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500"><em>Effective date: {new Date().toLocaleDateString()}</em></p>

        <p className="mt-6 text-gray-700 leading-7">
          This policy explains how Aurora Spa (“we”, “our”, “us”) collects and uses information when you visit our
          website or contact us about services.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Information we collect</h2>
        <ul className="mt-4 list-disc pl-5 text-gray-700 leading-7">
          <li><strong>Contact details:</strong> name, email, and message when you submit our contact form.</li>
          <li><strong>Usage data:</strong> non-identifying analytics (pages viewed, device type) to improve performance and security.</li>
          <li><strong>Cookies:</strong> limited, essential cookies for site functionality. We do not sell personal data.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">How we use information</h2>
        <ul className="mt-4 list-disc pl-5 text-gray-700 leading-7">
          <li>To respond to inquiries and coordinate appointments you request.</li>
          <li>To operate, maintain, and secure the website.</li>
          <li>To meet legal or regulatory requirements where applicable.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">Sharing & disclosure</h2>
        <p className="mt-4 text-gray-700 leading-7">
          We don’t sell personal information. We may share data with service providers that help operate our site
          (under confidentiality) or if required by law or to protect our rights.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Security</h2>
        <p className="mt-4 text-gray-700 leading-7">
          We apply reasonable administrative, technical, and physical safeguards. No method is perfect; we cannot
          guarantee absolute security.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Retention</h2>
        <p className="mt-4 text-gray-700 leading-7">
          Contact form submissions are retained only as long as necessary to respond and maintain appropriate records.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Your rights</h2>
        <p className="mt-4 text-gray-700 leading-7">
          Depending on your location, you may have rights to access, correct, or delete personal information. To make a
          request, contact us at privacy@example.com.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Changes</h2>
        <p className="mt-4 text-gray-700 leading-7">
          We may update this policy. Material changes will be reflected in the effective date above.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Contact</h2>
        <p className="mt-4 text-gray-700 leading-7">Email: privacy@example.com</p>
      </div>
    </section>
  );
}
