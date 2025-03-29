"use client";
import axios from "axios";
import { useState } from "react";

export default function SignupComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleInput() {
    axios.post(`http://192.168.1.5:3000/api`, {
      email,
      password,
    });
  }

  return (
    <div className=" mt-10 ml-10">
      <div className="mb-10">Signup to create an account</div>
      <div className="flex flex-col gap-8 text-center justify-center ml-20">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="border p-2"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="border p-2"
        />
      </div>
      <button
        onClick={handleInput}
        className="py-1 px-2 mt-10 ml-20 cursor-pointer bg-blue-400 rounded-md text-white"
      >
        Signup
      </button>
    </div>
  );
}
