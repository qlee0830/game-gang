import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, Genres, Gangs } from "./pages";
import { NavBar, Content, Footer } from "./components";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between bg-gray h-screen w-screen text-blue__text no-underline">
        <NavBar />
        <Content />
        <Footer />

        {/* define routes */}
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/genres" element={<Genres />}></Route>
          <Route path="/gangs" element={<Gangs />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
