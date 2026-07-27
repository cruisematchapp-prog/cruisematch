"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import Navbar from "../components/Navbar";
type UserProfile = {
  id: string;
  name: string;
  age: string;
  city: string;
  bio: string;
  relationship: string;
  company: string;
  ship: string;
  departureDate: string;
};

export default function CommunityPage() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  loadUsers();
}, []);async function sendLike(userId: string) {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    alert("Devi effettuare il login.");
    return;
  }

  if (currentUser.uid === userId) {
    alert("Non puoi mettere Mi interessa al tuo profilo.");
    return;
  }

  try {
    await setDoc(doc(db, "likes", `${currentUser.uid}_${userId}`), {
      from: currentUser.uid,
      to: userId,
      createdAt: serverTimestamp(),
    });

    alert("❤️ Mi interessa inviato!");
  } catch (error) {
    console.error(error);
    alert("Errore durante il salvataggio del like.");
  }
}
  async function loadUsers() {
    try {
      const snapshot = await getDocs(collection(db, "profiles"));

      const list: UserProfile[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name || "Utente",
        age: doc.data().age || "-",
        city: doc.data().city || "-",
        bio: doc.data().bio || "",
        relationship: doc.data().relationship || "",
        company: doc.data().company || "",
        ship: doc.data().ship || "",
        departureDate: doc.data().departureDate || "",
      }));

      setUsers(list);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold animate-pulse text-cyan-300">
            Caricamento Community...
          </h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 px-8 pb-16">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <h1 className="text-6xl font-black">
              🚢 Community CruiseMatch
            </h1>

            <p className="text-cyan-200 text-xl mt-5">
              Trova le persone che saliranno a bordo con te.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {users.map((user) => (
              <div
                key={user.id}
                className="premium-card cardHover"
              >

                <div className="flex justify-center">

                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-300 to-blue-700 flex items-center justify-center text-5xl font-black text-white shadow-2xl">

                    {user.name.charAt(0).toUpperCase()}

                  </div>

                </div>

                <h2 className="text-3xl text-center font-black mt-6">

                  {user.name}

                </h2>

                <p className="text-center text-cyan-200">

                  {user.age} anni
                </p>                <div className="mt-8 space-y-3">

                  <div className="flex items-center justify-between">
                    <span>📍 Città</span>
                    <span className="font-bold">{user.city || "-"}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>❤️ Stato</span>
                    <span className="font-bold">
                      {user.relationship || "Non specificato"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>🚢 Compagnia</span>
                    <span className="font-bold">
                      {user.company || "-"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>🛳️ Nave</span>
                    <span className="font-bold">
                      {user.ship || "-"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>📅 Partenza</span>
                    <span className="font-bold">
                      {user.departureDate || "-"}
                    </span>
                  </div>

                </div>

                <div className="mt-8">

                  <p className="text-slate-200 text-center leading-7 min-h-[70px]">
                    {user.bio || "Questo utente non ha ancora inserito una biografia."}
                  </p>

                </div>

                <div className="mt-8 space-y-3">

                  <Link href={`/profile-user?id=${user.id}`}>
                    <button className="btn-primary w-full">
                      👤 Visualizza Profilo
                    </button>
                  </Link>

                  <button className="btn-secondary w-full">
                    ❤️ Mi interessa
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </main>
    </>
  );
}