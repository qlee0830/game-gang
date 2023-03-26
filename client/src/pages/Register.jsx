import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { NavBar, Footer } from "../components";

const Register = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleFieldChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const addUser = () => {
    dispatch(addUser());
  };

  return (
    <div className="flex flex-col items-center justify-between bg-gray h-screen w-screen text-blue__text no-underline">
      <NavBar />
      <form className="flex flex-col bg-black text-white gap-y-2 p-2 rounded-1">
        <div className="flex items-center justify-between">
          <p>Name:</p>
          <input
            type="text"
            name="name"
            value={newUser.name}
            placeholder="Enter your name"
            className="p-2 bg-black rounded-xl outline-0 focus:outline-blue__text"
            onChange={handleFieldChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <p>Email:</p>
          <input
            type="text"
            name="email"
            value={newUser.email}
            placeholder="Enter a valid email"
            className="p-2 bg-black rounded-xl outline-0 focus:outline-blue__text"
            onChange={handleFieldChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <p>Password:</p>
          <input
            type="text"
            name="password"
            value={newUser.password}
            placeholder="Min 8 characters with at least 1 number"
            className="p-2 bg-black rounded-xl outline-0 focus:outline-blue__text"
            onChange={handleFieldChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <p>Confirm Password:</p>
          <input
            type="text"
            name="passwordConfirm"
            value={newUser.passwordConfirm}
            placeholder="Must be the same"
            className="p-2 bg-black rounded-xl outline-0 focus:outline-blue__text"
            onChange={handleFieldChange}
          />
        </div>
        <button
          className="bg-blue__text hover:bg-blue__bg py-1"
          onClick={addUser}
        >
          Register
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Register;
