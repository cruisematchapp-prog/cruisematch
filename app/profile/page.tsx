export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-500 flex items-center justify-center p-10">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full">

        <div className="flex flex-col items-center">

          <div className="w-40 h-40 rounded-full bg-cyan-300 mb-6"></div>

          <h1 className="text-4xl font-bold">Marco Rossi</h1>

          <p className="text-gray-500 text-lg">
            29 anni • Milano
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10 w-full">

            <div className="bg-gray-100 rounded-2xl p-5">
              <h3 className="font-bold mb-2">🚢 Crociera</h3>
              <p>MSC World Europa</p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-5">
              <h3 className="font-bold mb-2">📅 Partenza</h3>
              <p>15 Agosto 2026</p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-5">
              <h3 className="font-bold mb-2">🎉 Interessi</h3>
              <p>Escursioni, Aperitivi, Relax</p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-5">
              <h3 className="font-bold mb-2">🌍 Lingue</h3>
              <p>Italiano, Inglese</p>
            </div>

          </div>

          <button className="mt-10 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold">
            Invia Messaggio
          </button>

        </div>

      </div>
    </main>
  );
}