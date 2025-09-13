"use client";

import { useEffect } from "react";

// Bottom-left by default (safer with Windows watermark). To use right corner:
// add NEXT_PUBLIC_FLOAT_POS=right to your .env.local and restart.
const POS: "left" | "right" =
    ((process as any).env?.NEXT_PUBLIC_FLOAT_POS as "left" | "right") || "left";

function css(el: HTMLElement, styles: Record<string, string | number>) {
    Object.assign(el.style, styles);
}

export default function Assistant() {
    useEffect(() => {
        // Prevent double mount
        if (document.getElementById("a_fab")) return;

        // Keyframes (glow/slide)
        if (!document.getElementById("a_kf")) {
            const s = document.createElement("style");
            s.id = "a_kf";
            s.textContent = `
@keyframes a_glow {0%,100%{box-shadow:0 0 0 0 rgba(42,126,166,.55)} 50%{box-shadow:0 0 22px 2px rgba(42,126,166,.75)}}
@keyframes a_slide {0%{transform:translateY(10px);opacity:0}100%{transform:translateY(0);opacity:1}}
      `;
            document.head.appendChild(s);
        }

        // Floating button (neutral id; max z-index; inline styles)
        const fab = document.createElement("div");
        fab.id = "a_fab";
        fab.setAttribute("role", "button");
        fab.setAttribute("tabindex", "0");
        css(fab, {
            position: "fixed",
            [POS]: "16px",
            bottom: "16px",
            width: "56px",
            height: "56px",
            borderRadius: "9999px",
            background: "rgb(42,126,166)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: "2147483647",
            boxShadow: "0 8px 24px rgba(0,0,0,.18)",
            animation: "a_glow 2s ease-in-out infinite",
            pointerEvents: "auto"
        } as any);
        fab.innerHTML = `
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <rect x="3" y="6" width="18" height="12" rx="6" fill="currentColor" opacity=".95"/>
  <circle cx="9" cy="12" r="1.5" fill="white"/>
  <circle cx="15" cy="12" r="1.5" fill="white"/>
</svg>`;

        // Panel
        const panel = document.createElement("div");
        panel.id = "a_panel";
        css(panel, {
            position: "fixed",
            [POS]: "16px",
            bottom: "96px",
            width: "min(380px, 95vw)",
            borderRadius: "16px",
            background: "#fff",
            boxShadow: "0 12px 32px rgba(0,0,0,.2)",
            border: "1px solid #e5e7eb",
            zIndex: "2147483647",
            display: "none",
            animation: "a_slide .2s ease-out both"
        } as any);

        const header = document.createElement("div");
        css(header, {
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "12px 16px", color: "#fff", background: "rgb(42,126,166)",
            borderTopLeftRadius: "16px", borderTopRightRadius: "16px"
        });
        header.innerHTML = `
<div style="display:flex;align-items:center;gap:8px">
  <div style="width:24px;height:24px;border-radius:6px;background:rgba(255,255,255,.25)"></div>
  <span style="font-weight:600">Aurora</span>
</div>
<button id="a_close" aria-label="Close" style="background:transparent;color:#fff;border:0;font-size:18px;opacity:.9;cursor:pointer">×</button>`;

        const list = document.createElement("div");
        list.id = "a_list";
        css(list, { maxHeight: "320px", overflow: "auto", padding: "16px" });

        const form = document.createElement("form");
        form.id = "a_form";
        css(form, { display: "flex", gap: "8px", padding: "12px", borderTop: "1px solid #e5e7eb" });

        const input = document.createElement("input");
        input.id = "a_input";
        input.placeholder = 'Try: "What’s the price for a 60m massage?"';
        (input as any).maxLength = 500;
        css(input, { flex: "1", border: "1px solid #d1d5db", borderRadius: "12px", padding: "8px 10px", outline: "none" });

        const send = document.createElement("button");
        send.type = "submit";
        send.textContent = "Send";
        css(send, { border: "0", borderRadius: "12px", padding: "8px 14px", color: "#fff", background: "rgb(42,126,166)", cursor: "pointer" });

        const foot = document.createElement("div");
        foot.textContent = "Powered by OpenRouter";
        css(foot, { padding: "0 16px 12px 16px", fontSize: "11px", color: "#6b7280" });

        function bubble(role: "u" | "a", text: string) {
            const b = document.createElement("div");
            css(b, {
                maxWidth: "85%", borderRadius: "12px", padding: "8px 10px", fontSize: "14px", color: "#111827",
                background: role === "u" ? "rgba(42,126,166,.15)" : "#f3f4f6", marginLeft: role === "u" ? "auto" : "0",
                marginTop: list.children.length ? "8px" : "0"
            });
            b.textContent = text;
            list.appendChild(b);
        }

        // seed greeting
        bubble("a", "Hi! Ask about services, pricing, or booking times.");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const val = input.value.trim();
            if (!val) return;
            input.disabled = true; send.disabled = true; send.style.background = "#9ca3af"; send.style.cursor = "not-allowed";
            bubble("u", val); input.value = "";
            try {
                const res = await fetch("/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: val })
                });
                const data = await res.json();
                bubble("a", data?.reply || "Sorry — something went wrong.");
            } catch {
                bubble("a", "Network error. Please try again.");
            } finally {
                input.disabled = false; send.disabled = false; send.style.background = "rgb(42,126,166)"; send.style.cursor = "pointer";
                list.scrollTo({ top: list.scrollHeight, behavior: "smooth" });
            }
        });

        // open/close
        const open = () => { panel.style.display = "block"; setTimeout(() => list.scrollTo({ top: list.scrollHeight, behavior: "smooth" }), 0); };
        const close = () => { panel.style.display = "none"; };

        fab.addEventListener("click", open);
        header.querySelector<HTMLButtonElement>("#a_close")!.addEventListener("click", close);

        // keyboard toggle Alt+K
        const onKey = (e: KeyboardEvent) => { if (e.altKey && e.key.toLowerCase() === "k") (panel.style.display === "none" ? open() : close()); };
        window.addEventListener("keydown", onKey);

        // mount
        form.append(input, send);
        panel.append(header, list, form, foot);
        document.body.append(fab, panel);

        // cleanup
        return () => {
            window.removeEventListener("keydown", onKey);
            try { fab.remove(); panel.remove(); } catch { }
        };
    }, []);

    return null;
}
