import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Search from "../Pages/Search";

function MainRoutes() {


  return (
    <div className="App">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/video" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
    </div>
  );
}

export default MainRoutes;