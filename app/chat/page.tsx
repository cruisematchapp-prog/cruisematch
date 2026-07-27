"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import { auth, db } from "../firebase/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

type Message = {
  id: string;
  text: string;
  sender: string;
};

function ChatContent() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
const searchParams = useSearchParams();
const otherUser = searchParams.get("user");
const currentUser = auth.currentUser;

const chatId =
  currentUser && otherUser
    ? [currentUser.uid, otherUser].sort().join("_")
    : "";
 useEffect(() => {if (!chatId) return;
    if (!chatId) return;
   const q = query(
  collection(db, "chats", chatId, "messages"),
  orderBy("createdAt", "asc")
);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list: Message[] = [];

      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          ...(doc.data() as Omit<Message, "id">),
        });
      });

      setMessages(list);
    });

    return () => unsubscribe();
  }, []);

  async function sendMessage() {
    if (!text.trim()) return;

    const user = auth.currentUser;
    if (!chatId) {
  alert("Chat non disponibile");
  return;
}

    if (!user) return;
const chatRef = doc(db, "chats", chatId);

const chatSnap = await getDoc(chatRef);

if (!chatSnap.exists()) {
  await setDoc(chatRef, {
  users: [user.uid, otherUser],
  createdAt: serverTimestamp(),
});
}
    await addDoc(collection(db, "chats", chatId, "messages"), {
      text,
      sender: user.uid,
      createdAt: serverTimestamp(),
    });

    setText("");
  }  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 px-6 pb-10">

        <div className="max-w-4xl mx-auto premium-card">

          <h1 className="text-4xl font-black text-center mb-10">
            💬 Chat CruiseMatch
          </h1>

          <div className="h-[500px] rounded-2xl bg-slate-900/40 border border-white/10 p-6 overflow-y-auto space-y-4">

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={
                  msg.sender === auth.currentUser?.uid
                    ? "text-right"
                    : "text-left"
                }
              >
                <div
                  className={
                    msg.sender === auth.currentUser?.uid
                      ? "inline-block bg-cyan-500 text-black px-4 py-2 rounded-2xl"
                      : "inline-block bg-white/10 px-4 py-2 rounded-2xl"
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

          </div>

          <div className="flex gap-3 mt-6">

            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 p-4 rounded-xl bg-white/10 border border-white/20"
              placeholder="Scrivi un messaggio..."
            />

            <button
              onClick={sendMessage}
              className="btn-primary px-8"
            >
              Invia
            </button>

          </div>

              </div>

    </main>
  </>
);
}
import { Suspense } from "react";

export default function ChatPage() {
  return (
    <Suspense fallback={<div>Caricamento chat...</div>}>
      <ChatContent />
    </Suspense>
  );
}