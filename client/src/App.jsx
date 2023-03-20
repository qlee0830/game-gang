import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Games,
  Gangs,
  SignIn,
  Register,
  Recruit,
  GameItem,
  Settings,
  Profile,
  MyGang,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/games">
          <Route index element={<Games />} />
          <Route path=":gameId" element={<GameItem />} />
        </Route>
        <Route path="/gangs">
          <Route index element={<Gangs />} />
          <Route path="my-gang" element={<MyGang />} />
        </Route>
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
