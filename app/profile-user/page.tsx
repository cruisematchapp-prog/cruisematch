"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Navbar from "../components/Navbar";
export const dynamic = "force-dynamic";
type UserProfile = {
  name: string;
  age: string;
  city: string;
  bio: string;
  relationship: string;
  company: string;
  ship: string;
  departureDate: string;
  departurePort: string;
  photoURL: string;
};

function ProfileUserContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<UserProfile>({
    name: "",
    age: "",
    city: "",
    bio: "",
    relationship: "",
    company: "",
    ship: "",
    departureDate: "",
    departurePort: "",
    photoURL: "",
  });

  useEffect(() => {
    if (!id) return;

    loadProfile();
  }, [id]);

  async function loadProfile() {
    const snap = await getDoc(doc(db, "profiles", id!));

    if (snap.exists()) {
      const d = snap.data();

      setUser({
        name: d.name || "Utente",
        age: d.age || "-",
        city: d.city || "-",
        bio: d.bio || "",
        relationship: d.relationship || "",
        company: d.company || "",
        ship: d.ship || "",
        departureDate: d.departureDate || "",
        departurePort: d.departurePort || "",
        photoURL: d.photoURL || "",
      });
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-black animate-pulse">
            Caricamento profilo...
          </h1>
        </main>
      </>
    );
  }  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 px-6 pb-10">
        <div className="max-w-5xl mx-auto premium-card overflow-hidden">

          <div className="h-56 bg-gradient-to-r from-cyan-500 via-blue-700 to-slate-900 relative">

            <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2">

              <img
                src={
                  user.photoURL ||
                  `https://ui-avatars.com/api/?background=0891b2&color=fff&size=300&name=${encodeURIComponent(
                    user.name
                  )}`
                }
                alt={user.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl"
              />

            </div>

          </div>

          <div className="pt-28 px-10 pb-10 text-center">

            <h1 className="text-5xl font-black">
              {user.name}
            </h1>

            <p className="text-cyan-200 text-xl mt-2">
              {user.age} anni • {user.city}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">

              <div className="premium-card">

                <h2 className="text-3xl font-black mb-6">
                  🚢 Crociera
                </h2>

                <div className="space-y-4">

                  <div className="flex justify-between">
                    <span>Compagnia</span>
                    <strong>{user.company || "-"}</strong>
                  </div>

                  <div className="flex justify-between">
                    <span>Nave</span>
                    <strong>{user.ship || "-"}</strong>
                  </div>

                  <div className="flex justify-between">
                    <span>Partenza</span>
                    <strong>{user.departureDate || "-"}</strong>
                  </div>

                  <div className="flex justify-between">
                    <span>Porto</span>
                    <strong>{user.departurePort || "-"}</strong>
                  </div>

                  <div className="flex justify-between">
                    <span>Relazione</span>
                    <strong>{user.relationship || "-"}</strong>
                  </div>

                </div>

              </div>

              <div className="premium-card">

                <h2 className="text-3xl font-black mb-6">
                  📝 Bio
                </h2>

                <p className="leading-8 text-slate-200">
                  {user.bio || "Questo utente non ha ancora inserito una biografia."}
                </p>

              </div>

            </div>

            <button
  onClick={() => router.push(`/chat?user=${id}`)}
  className="btn-secondary text-xl py-4"
>
  💬 Invia messaggio
</button>

            <a
              href="/community"
              className="block mt-10 text-cyan-300 hover:text-white transition"
            >
              ← Torna alla Community
            </a>

          </div>

        </div>

      </main>

    </>
  );
}
export default function ProfileUserPage() {
  return (
    <Suspense fallback={<div>Caricamento profilo...</div>}>
      <ProfileUserContent />
    </Suspense>
  );
}