import React, { useState } from "react";

const Signup = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(e) {
    setError("");
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setError("");
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setError("");
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1 className="text-3xl text-center">Signup here</h1>
      <form className="mt-5">
        <label htmlFor="">Name</label>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          id=""
        />
        <label htmlFor="">Email</label>
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          name="email"
          id=""
        />
        <label htmlFor="">Password</label>
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
        />
        <p className="text-red-600">{error.length > 0 ? error : ""}</p>
        <button onClick={handleSubmit} className="mt-2">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
