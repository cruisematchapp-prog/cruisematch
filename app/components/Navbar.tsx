"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

 const linkStyle = (path: string) =>
  `px-5 py-2 rounded-xl transition-all duration-300 border border-white/30 ${
    pathname === path
      ? "bg-cyan-400 text-slate-900 font-bold"
      : "bg-slate-900/70 text-white hover:bg-cyan-400 hover:text-slate-900"
  }`;

  return (
   <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <Link
          href="/"
          className="text-3xl font-black tracking-wide text-cyan-300"
        >
          🚢 CruiseMatch
        </Link>

        <nav className="flex items-center gap-3">

          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link href="/community" className={linkStyle("/community")}>
            Community
          </Link>

          <Link href="/cruises" className={linkStyle("/cruises")}>
            Crociere
          </Link>

          <Link href="/my-cruise" className={linkStyle("/my-cruise")}>
            La mia crociera
          </Link>

          <Link href="/profile" className={linkStyle("/profile")}>
  Profilo
</Link>

<Link href="/my-chats" className={linkStyle("/my-chats")}>
  Le mie chat
</Link>

<Link
  href="/login"
            className="ml-4 bg-cyan-400 text-slate-900 px-5 py-2 rounded-xl font-bold hover:scale-105 transition"
          >
            Accedi
          </Link>

        </nav>
      </div>
    </header>
  );
}