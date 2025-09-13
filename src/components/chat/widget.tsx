"use client";

import { useEffect, useRef, useState } from "react";

// POSITION: "right" to put it in the bottom-right white gutter outside the grid
const POS: "left" | "right" = "right";
const Z = 2147483647;
const BRAND = "rgb(42,126,166)"; // brand-600

export default function Widget() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<{ role: "u" | "a"; text: string }[]>([
    { role: "a", text: "Hi! Ask about services, pricing, or booking times." }
  ]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Local keyframes — survive Tailwind/CSS quirks
  useEffect(() => {
    if (document.getElementById("a_kf")) return;
    const s = document.createElement("style");
    s.id = "a_kf";
    s.textContent = `@keyframes a_glow{0%,100%{box-shadow:0 0 0 0 rgba(42,126,166,.55)}50%{box-shadow:0 0 22px 2px rgba(42,126,166,.75)}}`;
    document.head.appendChild(s);
  }, []);

  useEffect(() => {
    if (open) listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  // Keyboard toggle: Alt+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.altKey && e.key.toLowerCase() === "k") setOpen(o => !o); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function send(val: string) {
    const text = val.trim();
    if (!text || busy) return;
    setMessages(m => [...m, { role: "u", text }]);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });
      const data = await res.json();
      setMessages(m => [...m, { role: "a", text: data?.reply || "Sorry — something went wrong." }]);
    } catch {
      setMessages(m => [...m, { role: "a", text: "Network error. Please try again." }]);
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }
  }

  return (
    <>
      {/* Floating bubble — bottom-right, outside layout */}
      <button
        aria-label="Open"
        title="Open (Alt+K)"
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          [POS]: "16px",
          bottom: "16px",
          width: "56px",
          height: "56px",
          borderRadius: "9999px",
          background: BRAND,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: 0,
          boxShadow: "0 8px 24px rgba(0,0,0,.18)",
          zIndex: Z,
          cursor: "pointer",
          animation: "a_glow 2s ease-in-out infinite"
        } as React.CSSProperties}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="6" fill="currentColor" opacity=".95" />
          <circle cx="9" cy="12" r="1.5" fill="white" />
          <circle cx="15" cy="12" r="1.5" fill="white" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            [POS]: "16px",
            bottom: "96px",
            width: "min(380px, 95vw)",
            borderRadius: "16px",
            background: "#fff",
            boxShadow: "0 12px 32px rgba(0,0,0,.2)",
            border: "1px solid #e5e7eb",
            zIndex: Z
          } as React.CSSProperties}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              color: "#fff",
              background: BRAND,
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 24, height: 24, borderRadius: 6, background: "rgba(255,255,255,.25)" }} />
              <span style={{ fontWeight: 600 }}>Aurora</span>
            </div>
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              style={{ background: "transparent", color: "#fff", border: 0, fontSize: 18, opacity: .9, cursor: "pointer" }}
            >
              ×
            </button>
          </div>

          <div ref={listRef} style={{ maxHeight: 320, overflow: "auto", padding: 16 }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  maxWidth: "85%",
                  borderRadius: 12,
                  padding: "8px 10px",
                  fontSize: 14,
                  color: "#111827",
                  background: m.role === "u" ? "rgba(42,126,166,.15)" : "#f3f4f6",
                  marginLeft: m.role === "u" ? "auto" : 0,
                  marginTop: i ? 8 : 0
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (inputRef.current) send(inputRef.current.value);
            }}
            style={{ display: "flex", gap: 8, padding: 12, borderTop: "1px solid #e5e7eb" }}
          >
            <input
              ref={inputRef}
              placeholder='Try: "What’s the price for a 60m massage?"'
              maxLength={500}
              style={{
                flex: 1,
                border: "1px solid #d1d5db",
                borderRadius: 12,
                padding: "8px 10px",
                outline: "none"
              }}
            />
            <button
              type="submit"
              disabled={busy}
              style={{
                border: 0,
                borderRadius: 12,
                padding: "8px 14px",
                color: "#fff",
                background: busy ? "#9ca3af" : BRAND,
                cursor: busy ? "not-allowed" : "pointer"
              }}
            >
              {busy ? "…" : "Send"}
            </button>
          </form>

          <div style={{ padding: "0 16px 12px 16px", fontSize: 11, color: "#6b7280" }}>
            Powered by OpenRouter
          </div>
        </div>
      )}
    </>
  );
}
