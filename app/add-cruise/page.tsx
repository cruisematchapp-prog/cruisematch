"use client";

import { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import Navbar from "../components/Navbar";

export default function AddCruise() {

  const [company, setCompany] = useState("MSC");
  const [ship, setShip] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departurePort, setDeparturePort] = useState("");

  async function saveCruise() {

    if (!auth.currentUser) {
      alert("Devi effettuare il login");
      return;
    }

    await setDoc(
      doc(db, "profiles", auth.currentUser.uid),
      {
        company,
        ship,
        departureDate,
        departurePort,
      },
      {
        merge: true
      }
    );

    alert("🚢 Crociera salvata!");
  }


  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 px-6 bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-500">

        <div className="max-w-xl mx-auto bg-white/20 backdrop-blur-xl rounded-3xl p-8">

          <h1 className="text-4xl font-black text-white text-center mb-8">
            🚢 Inserisci la tua crociera
          </h1>


          <select
            value={company}
            onChange={(e)=>setCompany(e.target.value)}
            className="w-full p-4 rounded-xl mb-4 text-black"
          >
            <option>MSC</option>
            <option>Costa</option>
            <option>Royal Caribbean</option>
          </select>


          <input
            placeholder="Nome nave"
            value={ship}
            onChange={(e)=>setShip(e.target.value)}
            className="w-full p-4 rounded-xl mb-4 text-black"
          />


          <input
            type="date"
            value={departureDate}
            onChange={(e)=>setDepartureDate(e.target.value)}
            className="w-full p-4 rounded-xl mb-4 text-black"
          />


          <input
            placeholder="Porto di partenza"
            value={departurePort}
            onChange={(e)=>setDeparturePort(e.target.value)}
            className="w-full p-4 rounded-xl mb-6 text-black"
          />


          <button
            onClick={saveCruise}
            className="w-full bg-cyan-400 text-black font-bold py-4 rounded-xl"
          >
            Salva la mia crociera 🚢
          </button>


        </div>

      </main>
    </>
  );
}