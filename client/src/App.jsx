import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <nav>
          <div></div>
          <ul className="flex justify-between">
            <li>
              <Link />
            </li>
            <li>
              <Link />
            </li>
            <li>
              <Link />
            </li>
          </ul>
        </nav>
        <Routes>
          <Route></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
