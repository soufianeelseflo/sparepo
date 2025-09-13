import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="container py-10 text-sm text-gray-500">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aurora Spa.</p>
          <div className="flex gap-4">
            <Link className="hover:underline" href="/privacy">Privacy</Link>
            <Link className="hover:underline" href="/tos">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
