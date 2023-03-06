import React, { useState, useEffect } from "react";

import { NavBar, Footer } from "../components";
import Avartar from "../images/avartar.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPW, setValidPW] = useState(true);

  const emailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const pwChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const signIn = () => {
    !email.includes("@") || email.length <= 0
      ? setValidEmail(false)
      : setValidEmail(true);
    password.length < 8 ? setValidPW(false) : setValidPW(true);
  };

  const forgotPassword = () => {};

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col min-h-screen min-w-screen justify-between items-center bg-gray text-blue__text no-underline">
      <NavBar />

      <div className="flex flex-col w-fit justify-start items-center">
        <div className="my-10 bg-black rounded-3xl">
          <img
            src={Avartar}
            alt="avartar"
            className="w-40 h-40 rounded-3xl m-3"
          />
        </div>

        {!validEmail || !validPW ? (
          <p className="text-red">
            Invalid Email or Password. Please try again!
          </p>
        ) : (
          ""
        )}

        <div className="m-10 flex flex-col justify-between">
          <input
            className="p-2 bg-black rounded-xl outline-0 focus:outline-blue__text"
            type="text"
            id="email"
            name="email"
            value={email}
            required
            placeholder="Enter your email"
            maxLength={50}
            onChange={emailChange}
          />
          <input
            className="my-2 p-2 bg-black rounded-xl outline-0 focus:outline-blue__text"
            type="text"
            id="password"
            name="password"
            value={password}
            required
            placeholder="Enter your password"
            minLength={8}
            maxLength={50}
            onChange={pwChange}
          />
          <div className="flex justify-between">
            <button
              className="bg-blue__text text-black p-2 rounded-xl"
              onClick={signIn}
            >
              Sign In
            </button>
            <button
              className="ml-10 bg-none text-blue__text"
              onClick={forgotPassword}
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
