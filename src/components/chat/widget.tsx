import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

const AssistantInject = dynamic(() => import("@/components/assistant/inject"), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || "http://localhost:3000"),
  title: { default: "Aurora Spa — Calm, booked.", template: "%s • Aurora Spa" },
  description: "Mobile-first spa website with smooth UX. Discover services, pricing, and book in minutes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        {/* Assistant bubble + panel (DOM-injected; immune to blockers) */}
        <AssistantInject />
      </body>
    </html>
  );
}
