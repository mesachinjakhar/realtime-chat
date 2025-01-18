import React, { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <h1 className="text-3xl text-center">Login here</h1>
      <form className="mt-5">
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
        <button className="mt-2" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
