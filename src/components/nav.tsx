"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 backdrop-blur bg-white/70">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Aurora Spa" className="h-7 w-7 rounded-lg" />
          <span className="font-semibold">Aurora Spa</span>
        </Link>

        <nav className="hidden gap-6 sm:flex">
          <Link href="/services" className="text-sm text-gray-700 hover:text-gray-900">Services</Link>
          <Link href="/pricing" className="text-sm text-gray-700 hover:text-gray-900">Pricing</Link>
          <Link href="/about" className="text-sm text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/contact" className="text-sm text-gray-700 hover:text-gray-900">Contact</Link>
        </nav>

        {/* Mobile menu button only */}
        <button className="sm:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Minimal mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-5 flex items-center gap-2">
              <img src="/logo.svg" alt="Aurora Spa" className="h-7 w-7 rounded-lg" />
              <span className="font-semibold">Aurora Spa</span>
            </div>
            <div className="mt-2 grid gap-3 px-5">
              <Link href="/services" onClick={() => setOpen(false)} className="text-gray-800">Services</Link>
              <Link href="/pricing" onClick={() => setOpen(false)} className="text-gray-800">Pricing</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="text-gray-800">About</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="text-gray-800">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
