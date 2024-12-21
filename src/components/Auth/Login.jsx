import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Email - ${email} and Password - ${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={submitHandler} // Directly pass the function
        >
          <input
            className="text-white outline-none bg-transparent border-2 border-emerald-500 py-3 px-5 rounded-full placeholder:text-grey-400"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Email"
            required
          />
          <input
            className="text-white outline-none bg-transparent mt-3 border-2 border-emerald-500 py-3 px-5 rounded-full placeholder:text-grey-400"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter password"
            required
          />
          <button className="text-white outline-none mt-7 border-none bg-emerald-500 hover:bg-emerald-700 py-3 px-5 rounded-full w-52 text-lg">
            Log In
          </button>
        </form>
      </div>
      <h1>Email - {email}</h1>
      <h2>Password - {password}</h2>
    </div>
  );
};

export default Login;
