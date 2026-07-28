"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

import { auth, db } from "../firebase/firebase";

import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

type Message = {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  createdAt?: any;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  const bottomRef = useRef<HTMLDivElement>(null);

  const currentUser = auth.currentUser;

  const searchParams = useSearchParams();

  const otherUserId = searchParams.get("uid") || "";

  useEffect(() => {
    if (!currentUser || !otherUserId) return;

    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list: Message[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data();

        const mine =
          data.senderId === currentUser.uid &&
          data.receiverId === otherUserId;

        const theirs =
          data.senderId === otherUserId &&
          data.receiverId === currentUser.uid;

        if (mine || theirs) {
          list.push({
            id: doc.id,
            ...(data as Omit<Message, "id">),
          });
        }
      });

      setMessages(list);
      setLoading(false);

      setTimeout(() => {
        bottomRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    });

    return () => unsubscribe();
  }, [currentUser, otherUserId]);

  async function sendMessage() {
    if (!currentUser) return;

    if (!otherUserId) return;

    if (!text.trim()) return;

    await addDoc(collection(db, "messages"), {
      senderId: currentUser.uid,
      receiverId: otherUserId,
      text: text.trim(),
      createdAt: serverTimestamp(),
    });

    setText("");
  }  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        Devi effettuare l'accesso.
      </div>
    );
  }

  if (!otherUserId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        Nessun utente selezionato.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">

      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 px-5 py-4">

        <h1 className="text-xl font-bold text-white">
          Chat
        </h1>

        <p className="text-slate-400 text-sm">
          Parla con i crocieristi 🚢
        </p>

      </div>

      {/* Messaggi */}
      <div className="flex-1 overflow-y-auto p-5 space-y-3">

        {loading && (
          <p className="text-center text-slate-400">
            Caricamento...
          </p>
        )}

        {!loading && messages.length === 0 && (
          <p className="text-center text-slate-500">
            Nessun messaggio.
          </p>
        )}

        {messages.map((message) => {

          const mine = message.senderId === currentUser.uid;

          return (
            <div
              key={message.id}
              className={`flex ${
                mine ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] px-4 py-3 rounded-2xl shadow ${
                  mine
                    ? "bg-blue-600 text-white"
                    : "bg-slate-700 text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          );
        })}

        <div ref={bottomRef}></div>

      </div>

      {/* Barra scrittura */}
      <div className="bg-slate-800 border-t border-slate-700 p-4">

        <div className="flex gap-3">

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Scrivi un messaggio..."
            className="flex-1 bg-slate-700 text-white rounded-xl px-4 py-3 outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl text-white font-semibold"
          >
            Invia
          </button>

        </div>

      </div>

    </div>
  );
}