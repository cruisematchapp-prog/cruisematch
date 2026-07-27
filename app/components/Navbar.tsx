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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4">

       
 <Link
  href="/"
  className="text-2xl md:text-3xl font-black tracking-wide text-cyan-300"
>
  🚢 CruiseMatch
</Link>

       <nav className="flex items-center">

<button
  onClick={() => setOpen(!open)}
  className="md:hidden text-white text-3xl"
>
  ☰
</button>

<div className={`
  ${open ? "flex" : "hidden"}
  md:flex
  absolute md:static
  top-20 left-0 right-0
  flex-col md:flex-row
  bg-slate-950/95
  p-6 md:p-0
  gap-3
`}>

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
className="bg-cyan-400 text-slate-900 px-5 py-2 rounded-xl font-bold"
>
Accedi
</Link>

</div>

</nav>
      </div>
    </header>
  );
}