"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-500 p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-white mb-10">
          🚢 CruiseMatch Dashboard
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <Link href="/my-cruise">
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:scale-105 duration-300 cursor-pointer">
              <h2 className="text-3xl font-bold">
                🚢 Ho già prenotato
              </h2>

              <p className="mt-4 text-gray-600">
                Inserisci la tua nave e trova chi farà la tua stessa crociera.
              </p>
            </div>
          </Link>

          <Link href="/search-cruise">
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:scale-105 duration-300 cursor-pointer">
              <h2 className="text-3xl font-bold">
                🔍 Sto cercando una crociera
              </h2>

              <p className="mt-4 text-gray-600">
                Cerca una crociera MSC o Costa anche se non l'hai ancora prenotata.
              </p>
            </div>
          </Link>

          <Link href="/community">
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:scale-105 duration-300 cursor-pointer">
              <h2 className="text-3xl font-bold">
                ❤️ Community
              </h2>

              <p className="mt-4 text-gray-600">
                Guarda tutti gli utenti iscritti.
              </p>
            </div>
          </Link>

          <Link href="/profile">
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:scale-105 duration-300 cursor-pointer">
              <h2 className="text-3xl font-bold">
                👤 Il mio profilo
              </h2>

              <p className="mt-4 text-gray-600">
                Modifica le tue informazioni.
              </p>
            </div>
          </Link>

        </div>

      </div>

    </main>
  );
}