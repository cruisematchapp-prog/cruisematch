export default function CruisesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-500 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🚢 Trova la tua crociera
        </h1>

        <input
          type="text"
          placeholder="Compagnia (MSC, Costa, Royal Caribbean...)"
          className="w-full border rounded-xl p-4 mb-4"
        />

        <input
          type="text"
          placeholder="Nome della nave"
          className="w-full border rounded-xl p-4 mb-4"
        />

        <input
          type="date"
          className="w-full border rounded-xl p-4 mb-6"
        />

        <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded-xl">
          Cerca persone sulla mia crociera
        </button>

      </div>
    </main>
  );
}