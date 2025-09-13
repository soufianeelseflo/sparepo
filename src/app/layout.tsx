import type { Metadata } from "next";
import "./globals.css";
// RELATIVE imports to avoid alias/runtime issues
import Nav from "../components/nav";
import Footer from "../components/footer";
import dynamic from "next/dynamic";

// Client-only widget (no portals, no react-dom)
const Bubble = dynamic(() => import("../components/chat/widget"), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || "http://localhost:3000"),
  title: { default: "Aurora Spa — Calm, booked.", template: "%s • Aurora Spa" },
  description: "Mobile-first spa website with smooth UX. Discover services, pricing, and book in minutes.",
  // Tab icon (uses your /public/logo.svg)
  icons: { icon: "/logo.svg", shortcut: "/logo.svg", apple: "/logo.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Bubble />
      </body>
    </html>
  );
}
