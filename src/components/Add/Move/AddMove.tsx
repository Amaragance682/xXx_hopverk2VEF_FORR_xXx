"use client";

import React from "react";
import { useState } from "react";
import { addMove } from "../../../api/laera.ts";
import { ErrorType } from "../../../types/error.ts";

export default function AddNamskeid() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const [errors, setErrors] = useState<ErrorType[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    const token = localStorage.getItem("token");
    if (!token || !image) return;

    const res = await addMove(name, description, image, token);

    if (res.errors) {
      setErrors(res.errors);
    } else {
      setSubmitted(true);
    }

    setLoading(false);
  }

  return (
    <div>
      {errors && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>
              <p>{error.msg}</p>
            </li>
          ))}
        </ul>
      )}
      {loading ? (
        <p>Loading..</p>
      ) : submitted ? (
        <p>Náði að bæta við!</p>
      ) : (
        <form onSubmit={handleAdd} className="add-move-form">
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files ? e.target.files[0] : null)
            }
            required
          />
          <button type="submit">Bæta við</button>
        </form>
      )}
    </div>
  );
}
