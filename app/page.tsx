import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-500">
      <Navbar />

      <section className="flex min-h-screen flex-col items-center justify-center text-center px-6 text-white">
        <h1 className="text-7xl font-extrabold leading-tight">
          Trova gli amici
          <br />
          della tua prossima crociera.
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-blue-100">
          CruiseMatch ti permette di conoscere chi salirà sulla tua stessa
          nave prima ancora della partenza.
        </p>

        <button className="mt-10 rounded-2xl bg-cyan-400 px-8 py-4 text-xl font-bold text-black hover:bg-cyan-300 transition">
          Inizia Gratis
        </button>
      </section>
    </main>
  );
}