"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkStyle = (path: string) =>
    `px-5 py-2 rounded-xl transition-all duration-300 border border-white/30 ${
      pathname === path
        ? "bg-cyan-400 text-slate-900 font-bold"
        : "bg-slate-900/70 text-white hover:bg-cyan-400 hover:text-slate-900"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">

        <Link
          href="/"
          className="text-2xl md:text-3xl font-black tracking-wide text-cyan-300"
        >
          🚢 CruiseMatch
        </Link>

        <nav>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl p-2 rounded-lg hover:bg-white/10 transition"
          >
            {open ? "✕" : "☰"}
          </button>

          <div
            className={`
              ${open ? "flex" : "hidden"}
              md:flex
              absolute md:static
              top-20 left-0 right-0
              flex-col md:flex-row
              items-center
              bg-slate-950/95
              md:bg-transparent
              p-6 md:p-0
              gap-3
            `}
          >
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={linkStyle("/")}
            >
              Home
            </Link>

            <Link
              href="/community"
              onClick={() => setOpen(false)}
              className={linkStyle("/community")}
            >
              Community
            </Link>

            <Link
              href="/cruises"
              onClick={() => setOpen(false)}
              className={linkStyle("/cruises")}
            >
              Crociere
            </Link>

            <Link
              href="/my-cruise"
              onClick={() => setOpen(false)}
              className={linkStyle("/my-cruise")}
            >
              La mia crociera
            </Link>

            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className={linkStyle("/profile")}
            >
              Profilo
            </Link>

            <Link
              href="/my-chats"
              onClick={() => setOpen(false)}
              className={linkStyle("/my-chats")}
            >
              Le mie chat
            </Link>

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="bg-cyan-400 text-slate-900 px-5 py-2 rounded-xl font-bold hover:scale-105 transition"
            >
              Accedi
            </Link>
          </div>
        </nav>

      </div>
    </header>
  );
}