"use client";

import React from "react";
import { useState } from "react";
import "./AddProfa.css";
import { addProfa } from "../../../api/profa.ts";

export default function AddProfa() {
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [ages, setAges] = useState("");
  const [capacity, setCapacity] = useState("");

  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    const token = localStorage.getItem("token");
    if (!token) return;

    const res = await addProfa(date, duration, ages, capacity, token);

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
        <p>Prufutíma bætt við!</p>
      ) : (
        <form onSubmit={handleAdd} className="add-profa-form">
          <div>
            <label htmlFor="date">Dagsetning:</label>
            <input
              name="date"
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
          <select
            name="ages"
            value={ages}
            onChange={(e) => setAges(e.target.value)}
            required
          >
            <option value="" disabled>
              Veldu aldursbil
            </option>
            <option key="5-7 ára" value="5-7 ára">
              5-7 ára
            </option>
            <option key="8-12 ára" value="8-12 ára">
              8-12 ára
            </option>
            <option key="fullorðnir" value="fullorðnir">
              Fullorðnir
            </option>
          </select>
          <input
            type="number"
            placeholder="Capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}
