import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />

      {/* HERO */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 py-10">
        <div className="max-w-4xl mx-auto bg-slate-900/40 border border-white/20 rounded-3xl p-6 md:p-10 text-center backdrop-blur-xl">

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Trova gli amici
            <br />
            della tua prossima
            <span className="text-cyan-300"> crociera.</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-blue-100 leading-8 md:leading-10">
            Incontra i passeggeri prima della partenza, organizza escursioni,
            crea amicizie e vivi la tua vacanza in compagnia.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <Link
              href="/register"
              className="bg-cyan-400 text-black px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition"
            >
              Inizia Gratis
            </Link>

            <Link
              href="/community"
              className="border border-white px-10 py-5 rounded-2xl text-xl hover:bg-white hover:text-black transition"
            >
              Esplora Community
            </Link>

          </div>

        </div>
      </section>

      {/* PERCHE */}
      <section className="max-w-6xl mx-auto mt-20 px-6">

        <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
          Perché usare CruiseMatch? 🚢
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 border border-white/20 rounded-3xl p-6 md:p-8 backdrop-blur-md">
            <div className="text-5xl mb-5">🚢</div>

            <h3 className="text-2xl font-bold mb-3">
              Trova la tua crociera
            </h3>

            <p className="text-slate-200">
              Cerca persone sulla tua stessa nave, data di partenza e compagnia.
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-3xl p-6 md:p-8 backdrop-blur-md">
            <div className="text-5xl mb-5">👥</div>

            <h3 className="text-2xl font-bold mb-3">
              Conosci nuovi amici
            </h3>

            <p className="text-slate-200">
              Entra nella community e trova altri crocieristi prima di partire.
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-3xl p-6 md:p-8 backdrop-blur-md">
            <div className="text-5xl mb-5">💬</div>

            <h3 className="text-2xl font-bold mb-3">
              Chat prima della partenza
            </h3>

            <p className="text-slate-200">
              Organizza incontri, escursioni e vivi la crociera in compagnia.
            </p>
          </div>

        </div>

      </section>

      {/* COME FUNZIONA */}
      <section className="max-w-6xl mx-auto mt-24 px-6">

        <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
          Come funziona?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900/40 border border-white/20 rounded-3xl p-6 md:p-8 backdrop-blur-xl text-center">
            <div className="text-6xl mb-5">1️⃣</div>

            <h3 className="text-2xl font-bold mb-4">
              Crea il tuo profilo
            </h3>

            <p className="text-slate-200">
              Inserisci compagnia, nave e data della tua crociera.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-white/20 rounded-3xl p-6 md:p-8 backdrop-blur-xl text-center">
            <div className="text-6xl mb-5">2️⃣</div>

            <h3 className="text-2xl font-bold mb-4">
              Trova altri passeggeri
            </h3>

            <p className="text-slate-200">
              Scopri chi partirà con te e conosci nuovi amici.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-white/20 rounded-3xl p-6 md:p-8 backdrop-blur-xl text-center">
            <div className="text-6xl mb-5">3️⃣</div>

            <h3 className="text-2xl font-bold mb-4">
              Chatta e organizza
            </h3>

            <p className="text-slate-200">
              Organizza escursioni e vivi una crociera ancora più divertente.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto mt-24 mb-24 px-6">

        <div className="bg-cyan-400 text-black rounded-3xl p-8 md:p-12 text-center">

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            La tua prossima amicizia potrebbe iniziare oggi.
          </h2>

          <p className="text-lg md:text-2xl mb-10">
            Iscriviti gratuitamente e scopri chi partirà con te.
          </p>

          <Link
            href="/register"
            className="inline-block bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition"
          >
            🚢 Inizia Gratis
          </Link>

        </div>

      </section>

    </main>
  );
}