"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [relationship, setRelationship] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const user = auth.currentUser;

    if (!user) {
      setLoading(false);
      return;
    }

    const ref = doc(db, "profiles", user.uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data();

      setName(data.name || user.displayName || "");
      setAge(data.age || "");
      setCity(data.city || "");
      setRelationship(data.relationship || "");
      setBio(data.bio || "");
    } else {
      setName(user.displayName || "");

      await setDoc(doc(db, "profiles", user.uid), {
        name: user.displayName || "",
        age: "",
        city: "",
        relationship: "",
        bio: "",
      });
    }

    setLoading(false);
  }

  async function saveProfile() {
    const user = auth.currentUser;

    if (!user) return;

    await setDoc(
      doc(db, "profiles", user.uid),
      {
        name,
        age,
        city,
        relationship,
        bio,
      },
      { merge: true }
    );

    alert("Profilo salvato!");
  }

  if (loading) {
    return <p className="p-10">Caricamento...</p>;
  }

  return (
    <main className="min-h-screen bg-slate-100 flex justify-center p-8">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-xl">

        <h1 className="text-3xl font-bold mb-8">
          Il mio profilo
        </h1>

        <label className="font-semibold">
          Nome
        </label>

        <input
          className="w-full border rounded-xl p-3 mb-5"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="font-semibold">
          Età
        </label>

        <input
          className="w-full border rounded-xl p-3 mb-5"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label className="font-semibold">
          Città
        </label>

        <input
          className="w-full border rounded-xl p-3 mb-5"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label className="font-semibold">
          Stato sentimentale
        </label>

        <select
          className="w-full border rounded-xl p-3 mb-5"
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
        >
          <option value="">Seleziona</option>
          <option value="Single">Single</option>
          <option value="Fidanzato/a">Fidanzato/a</option>
          <option value="Sposato/a">Sposato/a</option>
        </select>

        <label className="font-semibold">
          Descrizione
        </label>

        <textarea
          rows={5}
          className="w-full border rounded-xl p-3 mb-8"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <button
          onClick={saveProfile}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl p-4 font-bold"
        >
          Salva Profilo
        </button>

      </div>
    </main>
  );
}