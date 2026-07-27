"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Navbar from "../components/Navbar";

export default function MyCruise() {
const [data, setData] = useState<any>(null);

const [days, setDays] = useState<number | null>(null);

const [company, setCompany] = useState("");
const [ship, setShip] = useState("");
const [departureDate, setDepartureDate] = useState("");
const [departurePort, setDeparturePort] = useState("");
  useEffect(() => {
    loadCruise();
  }, []);

  async function loadCruise() {
    if (!auth.currentUser) return;

    const snap = await getDoc(doc(db, "profiles", auth.currentUser.uid));

    if (snap.exists()) {
      const d = snap.data();

      setData(d);

      if (d.departureDate) {
        const departure = new Date(d.departureDate);
        const today = new Date();

        const diff = departure.getTime() - today.getTime();

        setDays(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
        }
  }
}

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
    { merge: true }
  );

  alert("Crociera salvata 🚢");

  loadCruise();
}

return (
    <>
      <Navbar />

      <main className="min-h-screen pt-40 px-6">

  <div className="max-w-5xl w-full mx-auto">s

    <div className="premium-card text-center max-w-4xl mx-auto">

            <div className="text-8xl mb-6">
              🚢
            </div>

            <h1 className="text-5xl font-black">
              {data?.ship || "La mia Crociera"}
            </h1>

            <p className="text-cyan-300 text-xl mt-3">
              {data?.company}
            </p>

            <div className="mt-12">

              <h2 className="text-xl uppercase tracking-widest text-gray-300">
                Mancano
              </h2>

              <div className="text-8xl font-black text-cyan-300 mt-4">
                {days ?? "--"}
              </div>

              <div className="text-3xl font-bold">
                giorni
              </div>

            </div>

            <div className="mt-12 w-full bg-white/10 rounded-full h-6 overflow-hidden">

              <div
                className="bg-cyan-400 h-6 rounded-full transition-all duration-1000"
                style={{
                  width:
                    days === null
                      ? "0%"
                      : `${Math.max(5, Math.min(100, 100 - days))}%`,
                }}
              />

            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">

              <div className="premium-card">

                <h3 className="text-2xl font-bold mb-4">
                  📅 Partenza
                </h3>

                <p className="text-xl">
                  {data?.departureDate}
                </p>

              </div>

              <div className="premium-card">

                <h3 className="text-2xl font-bold mb-4">
                  ⚓ Porto
                </h3>

                <p className="text-xl">
                  {data?.departurePort}
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}