"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
   <main
  className="min-h-screen p-6 bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/images/dashboard-bg.jpg')",
  }}
>
<div className="absolute inset-0 bg-slate-950/60"></div>
<div className="max-w-6xl mx-auto relative z-10">


        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 text-center">
          🚢 CruiseMatch Dashboard
        </h1>

        {/* COUNTDOWN */}

        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">

          <h2 className="text-2xl font-bold">
            ⏳ Countdown Crociera
          </h2>

          <div className="mt-6 text-center">

            <p className="text-gray-500">
              Mancano
            </p>

            <div className="text-6xl font-extrabold text-cyan-600 mt-3">
              125
            </div>

            <p className="text-2xl mt-2">
              giorni
            </p>

          </div>

        </div>

        {/* MENU */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<Link
  href="/add-cruise"
  className="bg-cyan-400 rounded-3xl p-8 shadow-xl hover:scale-105 transition"
>
  <h2 className="text-3xl">
    ➕🚢
  </h2>

  <h3 className="text-xl font-bold mt-4">
    Inserisci la tua crociera
  </h3>

  <p className="mt-2">
    Aggiungi nave, data e porto di partenza.
  </p>

</Link>
          <Link
            href="/my-cruise"
            className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition"
          >
            <h2 className="text-3xl font-bold">
              🚢
            </h2>

            <h3 className="text-xl font-bold mt-4">
              La mia crociera
            </h3>

            <p className="text-gray-600 mt-2">
              Gestisci la tua partenza.
            </p>
          </Link>

          <Link
            href="/community"
            className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition"
          >
            <h2 className="text-3xl font-bold">
              👥
            </h2>

            <h3 className="text-xl font-bold mt-4">
              Community
            </h3>

            <p className="text-gray-600 mt-2">
              Guarda chi sarà sulla tua nave.
            </p>
          </Link>

          <Link
            href="/profile"
            className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition"
          >
            <h2 className="text-3xl font-bold">
              🙋
            </h2>

            <h3 className="text-xl font-bold mt-4">
              Profilo
            </h3>

            <p className="text-gray-600 mt-2">
              Modifica il tuo profilo.
            </p>
          </Link>

          <div className="bg-yellow-300 rounded-3xl p-8 shadow-xl">

            <h2 className="text-3xl">
              ⭐
            </h2>

            <h3 className="text-xl font-bold mt-4">
              Premium
            </h3>

            <p className="mt-2">
              Sblocca foto, chat e funzioni esclusive.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">

            <h2 className="text-3xl">
              💬
            </h2>

            <h3 className="text-xl font-bold mt-4">
              Chat
            </h3>

            <p className="mt-2">
              In arrivo...
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">

            <h2 className="text-3xl">
              ❤️
            </h2>

            <h3 className="text-xl font-bold mt-4">
              Match
            </h3>

            <p className="mt-2">
              Troveremo automaticamente persone compatibili.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}