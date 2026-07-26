"use client";

import { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function MyCruisePage() {
  const [company, setCompany] = useState("MSC");
  const [ship, setShip] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departurePort, setDeparturePort] = useState("");

  async function saveCruise() {
    const user = auth.currentUser;

    if (!user) {
      alert("Devi effettuare il login.");
      return;
    }

    try {
      await setDoc(doc(db, "users", user.uid), {
        company,
        ship,
        departureDate,
        departurePort,
        updatedAt: new Date().toISOString(),
      });

      alert("🚢 Crociera salvata con successo!");
    } catch (error) {
      console.error(error);
      alert("Errore durante il salvataggio.");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-500 flex justify-center items-center p-8">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-xl">

        <h1 className="text-3xl font-bold mb-6">
          🚢 La mia Crociera
        </h1>

        <label className="block mb-2 font-semibold">
          Compagnia
        </label>

        <select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full border rounded-xl p-3 mb-5"
        >
          <option value="MSC">MSC</option>
          <option value="Costa">Costa</option>
        </select>

        <label className="block mb-2 font-semibold">
          Nome nave
        </label>

        <input
          type="text"
          value={ship}
          onChange={(e) => setShip(e.target.value)}
          placeholder="Es. MSC World Europa"
          className="w-full border rounded-xl p-3 mb-5"
        />

        <label className="block mb-2 font-semibold">
          Data di partenza
        </label>

        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className="w-full border rounded-xl p-3 mb-5"
        />

        <label className="block mb-2 font-semibold">
          Porto di partenza
        </label>

        <input
          type="text"
          value={departurePort}
          onChange={(e) => setDeparturePort(e.target.value)}
          placeholder="Es. Genova"
          className="w-full border rounded-xl p-3 mb-8"
        />

        <button
          onClick={saveCruise}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded-xl"
        >
          Salva la mia crociera
        </button>

      </div>
    </main>
  );
}