"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      window.location.href = "/dashboard";

    } catch (error:any) {
      alert(error.message);
    }
  }


  return (
    <main
      style={{
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"#0b3d91"
      }}
    >

      <div
        style={{
          background:"white",
          padding:40,
          borderRadius:20,
          width:350
        }}
      >

        <h1 style={{
          color:"black",
          fontSize:30,
          fontWeight:"bold"
        }}>
          Accedi
        </h1>


        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{
            width:"100%",
            padding:12,
            marginTop:20,
            color:"black",
            background:"white",
            border:"1px solid #ccc"
          }}
        />


        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{
            width:"100%",
            padding:12,
            marginTop:15,
            color:"black",
            background:"white",
            border:"1px solid #ccc"
          }}
        />


        <button
          onClick={login}
          style={{
            width:"100%",
            marginTop:20,
            padding:12,
            background:"#00bcd4",
            color:"white",
            border:"none",
            borderRadius:10
          }}
        >
          Accedi
        </button>


      </div>

    </main>
  );
}