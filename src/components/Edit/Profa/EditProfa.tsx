"use client";

import React from "react";
import { useState } from "react";
import "./EditProfa.css";
import { updateProfa } from "../../../api/profa.ts";
import DeleteConfirmation from "../../DeleteConfirmation/DeleteConfirmation.tsx";
import { deleteEntry } from "../../../api/delete.ts";

export default function AddProfa({ profa }) {
  const [date, setDate] = useState(profa.date.slice(0, 16));
  const [duration, setDuration] = useState(
    `${profa.duration.days ? `${profa.duration.days} days` : ""} ${
      profa.duration.hours ? `${profa.duration.hours} hours` : ""
    } ${profa.duration.minutes ? `${profa.duration.minutes} minutes` : ""}`,
  );
  const [ages, setAges] = useState(profa.ages);
  const [capacity, setCapacity] = useState(profa.capacity);

  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deleted, setDeleted] = useState(false);

  async function handleDelete() {
    setLoading(true);

    const token = localStorage.getItem("token");
    if (!token) return;
    const res = await deleteEntry(profa.id, "profa", token);
    if (res !== 204) {
      setErrors(res.errors);
      setLoading(false);
    } else {
      setDeleted(true);
      setLoading(false);
    }
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    const token = localStorage.getItem("token");
    if (!token) return;

    const res = await updateProfa(
      date,
      duration,
      ages,
      capacity,
      token,
      profa.id,
    );

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
      ) : deleted ? (
        <p>Prufutíma eytt!</p>
      ) : submitted ? (
        <p>Prufutími uppfærður!</p>
      ) : (
        <div>
          <form onSubmit={handleAdd} className="edit-profa-form">
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
            <button type="submit">Uppfæra</button>
          </form>
          <DeleteConfirmation handleDelete={handleDelete} />
        </div>
      )}
    </div>
  );
}
