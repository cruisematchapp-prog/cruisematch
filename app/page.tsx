import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">

      <Navbar />

      <section className="min-h-[80vh] flex items-center justify-center px-6">

        <div className="max-w-4xl mx-auto bg-slate-900/40 border border-white/20 rounded-3xl p-10 text-center backdrop-blur-xl">

          <h1 className="text-7xl font-black leading-tight">
            Trova gli amici
            <br />
            della tua prossima
            <span className="text-cyan-300"> crociera.</span>
          </h1>

          <p className="mt-8 text-2xl text-blue-100 leading-10">
            Incontra i passeggeri prima della partenza,
            organizza escursioni,
            crea amicizie
            e vivi la tua vacanza in compagnia.
          </p>

          <div className="flex justify-center gap-6 mt-12">

            <Link
              href="/register"
              className="bg-cyan-400 text-black px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105"
            >
              Inizia Gratis
            </Link>

            <Link
              href="/community"
              className="border border-white px-10 py-5 rounded-2xl text-xl hover:bg-white hover:text-black"
            >
              Esplora Community
            </Link>

          </div>

        </div>

      </section>
<section className="max-w-6xl mx-auto mt-40 px-6 pb-20">
  <h2 className="text-4xl font-black text-center mb-12">
    Perché usare CruiseMatch? 🚢
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-md">
      <div className="text-5xl mb-5">
        🚢
      </div>

      <h3 className="text-2xl font-bold mb-3">
        Trova la tua crociera
      </h3>

      <p className="text-slate-200">
        Cerca persone sulla tua stessa nave, data di partenza e compagnia.
      </p>
    </div>


    <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-md">
      <div className="text-5xl mb-5">
        👥
      </div>

      <h3 className="text-2xl font-bold mb-3">
        Conosci nuovi amici
      </h3>

      <p className="text-slate-200">
        Entra nella community e trova altri crocieristi prima di partire.
      </p>
    </div>


    <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-md">
      <div className="text-5xl mb-5">
        💬
      </div>

      <h3 className="text-2xl font-bold mb-3">
        Chat prima della partenza
      </h3>

      <p className="text-slate-200">
        Organizza incontri, escursioni e vivi la crociera in compagnia.
      </p>
    </div>

  </div>

</section>
    </main>
  );
}