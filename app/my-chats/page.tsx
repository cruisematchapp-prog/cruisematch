"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { auth, db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  query,
} from "firebase/firestore";

type Chat = {
  id: string;
  otherUser: string;
};

export default function MyChatsPage() {
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    loadChats();
  }, []);

  async function loadChats() {
    const user = auth.currentUser;

    if (!user) {
      setLoading(false);
      return;
    }

    const q = query(collection(db, "chats"));

    const snapshot = await getDocs(q);

    const list: Chat[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();

      const users = data.users || [];

      if (users.includes(user.uid)) {
        const otherUser = users.find(
          (u: string) => u !== user.uid
        );

        if (otherUser) {
          list.push({
            id: doc.id,
            otherUser,
          });
        }
      }
    });

    setChats(list);
    setLoading(false);
  }  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-black animate-pulse">
            Caricamento chat...
          </h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 px-6 pb-10">

        <div className="max-w-5xl mx-auto premium-card">

          <h1 className="text-5xl font-black mb-10">
            💬 Le mie chat
          </h1>

          {chats.length === 0 ? (
            <p className="text-slate-300">
              Non hai ancora nessuna conversazione.
            </p>
          ) : (
            <div className="space-y-5">

              {chats.map((chat) => (

                <Link
                  key={chat.id}
                  href={`/chat?user=${chat.otherUser}`}
                  className="block premium-card hover:scale-[1.02] transition cursor-pointer"
                >

                  <div className="flex justify-between items-center">

                    <div>

                      <h2 className="text-2xl font-bold">
                        {chat.otherUser}
                      </h2>

                      <p className="text-slate-300">
                        Apri conversazione →
                      </p>

                    </div>

                    <span className="text-cyan-300">
                      💬
                    </span>

                  </div>

                </Link>

              ))}

            </div>
          )}

        </div>

      </main>

    </>
  );
}