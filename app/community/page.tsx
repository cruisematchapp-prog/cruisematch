export default function CommunityPage() {
  const utenti = [
    {
      nome: "Marco",
      eta: 31,
      nave: "MSC World Europa",
      città: "Milano",
    },
    {
      nome: "Giulia",
      eta: 28,
      nave: "MSC World Europa",
      città: "Roma",
    },
    {
      nome: "Luca",
      eta: 35,
      nave: "Costa Toscana",
      città: "Napoli",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-500 p-10">
      <h1 className="text-5xl text-white font-bold text-center mb-10">
        Community CruiseMatch
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {utenti.map((utente, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-6"
          >
            <div className="w-24 h-24 rounded-full bg-cyan-300 mx-auto mb-4"></div>

            <h2 className="text-2xl font-bold text-center">
              {utente.nome}
            </h2>

            <p className="text-center text-gray-600">
              {utente.eta} anni
            </p>

            <p className="mt-4">
              🚢 {utente.nave}
            </p>

            <p>
              📍 {utente.città}
            </p>

            <button className="mt-6 w-full bg-cyan-500 text-white py-3 rounded-xl hover:bg-cyan-600">
              Visualizza Profilo
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}