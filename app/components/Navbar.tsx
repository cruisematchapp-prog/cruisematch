import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="CruiseMatch"
            width={60}
            height={60}
          />
          <span className="text-2xl font-bold text-white">
            Cruise<span className="text-cyan-300">Match</span>
          </span>
        </Link>

        <div className="flex items-center gap-8 text-white">

          <Link href="/">Home</Link>

          <Link href="/cruises">Crociere</Link>

          <Link href="/community">Community</Link>

          <Link
            href="/login"
            className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-cyan-300 transition"
          >
            Accedi
          </Link>

          <Link
            href="/register"
            className="border border-white px-5 py-2 rounded-xl hover:bg-white hover:text-black transition"
          >
            Registrati
          </Link>

        </div>
      </div>
    </nav>
  );
}