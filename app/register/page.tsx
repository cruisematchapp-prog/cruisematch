"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function RegisterPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function register() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#0b3d91",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 40,
          borderRadius: 20,
          width: 350,
        }}
      >
       <h1 style={{color:"black", fontSize:30, fontWeight:"bold"}}>
  Registrati
</h1>
<p style={{color:"black"}}>
  Email visibile
</p>
 <input
  placeholder="Email"
  
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={{
    width: "100%",
    padding: 12,
    marginTop: 20,
    marginBottom: 15,
    color: "black",
    background: "white",
    border: "1px solid #ccc",
    borderRadius: 8,
  }}
/>

        <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  style={{
    width: "100%",
    padding: 12,
    marginBottom: 20,
    color: "black",
    background: "white",
    border: "1px solid #ccc",
    borderRadius: 8,
  }}
/>

        <button
          onClick={register}
          style={{
            width: "100%",
            padding: 12,
            background: "#00bcd4",
            color: "white",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          Registrati
        </button>
      </div>
    </main>
  );
}