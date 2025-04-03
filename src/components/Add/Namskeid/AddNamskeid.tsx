"use client";

import React from "react";
import { useState } from "react";
import "./AddNamskeid.css";
import { addNamskeid } from "../../../api/namskeid.ts";
import { ErrorType } from "../../../types/error.ts";

export default function AddNamskeid() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [errors, setErrors] = useState<ErrorType[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    const token = localStorage.getItem("token");
    if (!token) return;

    const res = await addNamskeid(
      name,
      description,
      level,
      startDate,
      endDate,
      token,
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
      ) : submitted ? (
        <p>Námskeiði bætt við!</p>
      ) : (
        <form onSubmit={handleAdd} className="add-nam-form">
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
          <select
            name="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          >
            <option value="" disabled>
              Veldu erfiðleikastig
            </option>
            <option key="byrjendur" value="byrjendur">
              Byrjendur
            </option>
            <option key="miðstig" value="miðstig">
              Miðstig
            </option>
            <option key="hæsta stig" value="hæsta stig">
              Hæsta stig
            </option>
          </select>
          <div>
            <label htmlFor="start_date">Byrjar:</label>
            <input
              name="start_date"
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="end_date">Endar:</label>
            <input
              name="end_date"
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <button type="submit">Bæta við</button>
        </form>
      )}
    </div>
  );
}
