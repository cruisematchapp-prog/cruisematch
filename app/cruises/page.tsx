"use client";

import { useState } from "react";
import Link from "next/link";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import Navbar from "../components/Navbar";

type UserCard = {
  uid: string;
  name: string;
  age: string;
  city: string;
  relationship: string;
  bio: string;
  company: string;
  ship: string;
  departureDate: string;
  departurePort: string;
};

export default function CruisesPage() {
  const [company, setCompany] = useState("MSC");
  const [ship, setShip] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<UserCard[]>([]);

  async function searchCruises() {
    if (!ship || !departureDate) {
      alert("Compila tutti i campi.");
      return;
    }

    setLoading(true);

    try {
      const q = query(
        collection(db, "cruises"),
        where("company", "==", company),
        where("ship", "==", ship),
        where("departureDate", "==", departureDate)
      );

      const cruiseSnap = await getDocs(q);

      const users: UserCard[] = [];

      for (const cruise of cruiseSnap.docs) {
        const cruiseData = cruise.data();

        const profileSnap = await getDoc(
          doc(db, "profiles", cruiseData.uid)
        );

        if (profileSnap.exists()) {
          const profile = profileSnap.data();

          users.push({
            uid: cruiseData.uid,
            name: profile.name || "Utente",
            age: profile.age || "",
            city: profile.city || "",
            relationship: profile.relationship || "",
            bio: profile.bio || "",
            company: cruiseData.company,
            ship: cruiseData.ship,
            departureDate: cruiseData.departureDate,
            departurePort: cruiseData.departurePort,
          });
        }
      }

      setResults(users);
    } catch (err) {
      console.error(err);
      alert("Errore durante la ricerca.");
    }

    setLoading(false);
  }
return (
  <>
    <Navbar />

    <main className="min-h-screen pt-28 px-6 pb-16">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h1 className="text-4xl font-bold mb-2">
            🚢 Trova persone sulla tua crociera
          </h1>

          <p className="text-gray-500 mb-8">
            Cerca altri crocieristi che partiranno con te.
          </p>

          <div className="grid md:grid-cols-3 gap-4">

            <select
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="border rounded-xl p-3"
            >
              <option>MSC</option>
              <option>Costa</option>
              <option>Royal Caribbean</option>
              <option>Norwegian Cruise Line</option>
              <option>Celebrity Cruises</option>
              <option>Princess Cruises</option>
            </select>

            <input
              value={ship}
              onChange={(e) => setShip(e.target.value)}
              placeholder="Nome nave"
              className="border rounded-xl p-3"
            />

            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="border rounded-xl p-3"
            />

          </div>

          <button
            onClick={searchCruises}
            className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded-xl"
          >
            {loading ? "Ricerca..." : "Cerca persone"}
          </button>

        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">

          {results.length === 0 && !loading && (
            <div className="col-span-2 bg-white rounded-3xl p-8 text-center shadow">
              <h2 className="text-2xl font-bold">
                Nessun crocierista trovato.
              </h2>

              <p className="text-gray-500 mt-2">
                Prova con un'altra nave oppure attendi che altri utenti si iscrivano.
              </p>
            </div>
          )}

          {results.map((user) => (
            <div
              key={user.uid}
              className="bg-white rounded-3xl shadow-xl p-6"
            >
              <div className="flex items-center gap-5">

                <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-3xl text-white font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    {user.name}
                  </h2>

                  <p className="text-gray-500">
                    {user.age} anni
                  </p>

                  <p>
                    📍 {user.city}
                  </p>

                </div>

              </div>

              <div className="mt-6 space-y-2">

                <p>🚢 <strong>{user.company}</strong></p>

                <p>🛳️ {user.ship}</p>

                <p>📅 {user.departureDate}</p>

                <p>⚓ {user.departurePort}</p>

              </div>

              <Link
                href={`/profile-user?id=${user.uid}`}
                className="block mt-6 text-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-xl"
              >
                Visita profilo
              </Link>

            </div>
          ))}

        </div>

      </div>

    </main>
  </>
);
}