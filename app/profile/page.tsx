"use client";

import { useEffect, useState } from "react";
import { auth, db, storage } from "../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [relationship, setRelationship] = useState("");
  const [bio, setBio] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const user = auth.currentUser;

    if (!user) {
      setLoading(false);
      return;
    }

    const snap = await getDoc(doc(db, "profiles", user.uid));

    if (snap.exists()) {
      const data = snap.data();

      setName(data.name || "");
      setAge(data.age || "");
      setCity(data.city || "");
      setRelationship(data.relationship || "");
      setBio(data.bio || "");
      setPhotoURL(data.photoURL || "");
    }

    setLoading(false);
  }

  async function uploadPhoto(file: File) {
    const user = auth.currentUser;

    if (!user) return;

    const storageRef = ref(storage, `profiles/${user.uid}`);

    await uploadBytes(storageRef, file);

    const url = await getDownloadURL(storageRef);

    setPhotoURL(url);
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
        photoURL,
      },
      { merge: true }
    );

    alert("Profilo salvato!");
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold animate-pulse">
          Caricamento...
        </h1>
      </main>
    );
  }  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 pb-16 px-6">

        <div className="max-w-3xl mx-auto premium-card">

          <h1 className="text-4xl font-black text-center mb-10">
            👤 Il mio Profilo
          </h1>

          <div className="flex flex-col items-center mb-10">

            <img
              src={
                photoURL ||
                `https://ui-avatars.com/api/?background=0ea5e9&color=fff&size=300&name=${encodeURIComponent(
                  name || "User"
                )}`
              }
              alt="Profilo"
              className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-xl"
            />

            <label className="btn-primary mt-6 cursor-pointer">

              📷 Carica Foto

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    uploadPhoto(e.target.files[0]);
                  }
                }}
              />

            </label>

          </div>

          <div className="space-y-5">

            <input
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20"
              placeholder="Età"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <input
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20"
              placeholder="Città"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <select
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
            >
              <option value="">Stato sentimentale</option>
              <option value="Single">Single</option>
              <option value="Fidanzato/a">Fidanzato/a</option>
              <option value="Sposato/a">Sposato/a</option>
            </select>

            <textarea
              rows={5}
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20"
              placeholder="Racconta qualcosa di te..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />

            <button
              onClick={saveProfile}
              className="btn-primary w-full py-4 text-lg"
            >
              💾 Salva Profilo
            </button>

          </div>

        </div>

      </main>
    </>
  );
}