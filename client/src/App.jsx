import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, Genres, Gangs } from "./pages";
import { Contacts, SocialLinks, NavBar } from "./components";

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-gray h-screen w-screen text-blue__text">
        <NavBar />

        <div className="flex flex-col">Body</div>

        <div className="flex h-fit items px-20 py-10 justify-between">
          <div className="flex">
            <SocialLinks />
          </div>
          <div className="flex flex-col">
            <Contacts />
          </div>
        </div>

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
