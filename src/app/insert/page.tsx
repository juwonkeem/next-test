"use client";

import React, { useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email) {
      try {
        const response = await fetch("http://localhost:3000/api/addPost", {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
          }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        });
        await response.json();
        setName("");
        setEmail("");
        setError("");
        setMessage("Post added successfully");
      } catch (errorMessage: unknown) {
        setError(errorMessage as string);
      }
    } else {
      return setError("All fields are required");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        {error ? <div className="alert-error">{error}</div> : null}
        {message ? <div className="alert-message">{message}</div> : null}
        <div className="form-group">
          <label>이름</label>
          <input
            type="text"
            placeholder="Title of the post"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>이메일</label>
          <textarea
            name="content"
            placeholder="Content of the post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            cols={20}
            rows={8}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit_btn">
            Add
          </button>
        </div>
      </form>
      <style>
        {`
          .form {
            width: 400px;
            margin: 10px auto;
          }
          .form-group {
            width: 100%;
            margin-bottom: 10px;
            display: block;
          }
          .form-group label {
            display: block;
            margin-bottom: 10px;
          }
          .form-group input[type="text"] {
            padding: 10px;
            width: 100%;
          }
          .form-group textarea {
            padding: 10px;
            width: 100%;
          }
          .alert-error {
            width: 100%;
            color: red;
            margin-bottom: 10px;
          }
          .alert-message {
            width: 100%;
            color: green;
            margin-bottom: 10px;
          }
        `}
      </style>
    </div>
  );
}
