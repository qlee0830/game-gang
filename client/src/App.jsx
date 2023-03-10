import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, Genres, Gangs, SignIn, Register, Recruit } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/genres" element={<Genres />}></Route>
        <Route path="/gangs" element={<Gangs />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/recruit" element={<Recruit />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
