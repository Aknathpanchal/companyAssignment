import "./App.css";
import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="division1">
        <div>
          <header className="header" id="header">
            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <NavLink
                    exact
                    to="/"
                    className="nav__link"
                    activeClassName="active-link"
                  >
                    <i className="bx bx-home-alt nav__icon"></i>
                    <span className="nav__name">Home</span>
                  </NavLink>
                </li>

                <li className="nav__item">
                  <NavLink
                    to="/search"
                    className="nav__link"
                    activeClassName="active-link"
                  >
                    <i className="bx bx-search-alt nav__icon"></i>
                    <span className="nav__name">Search</span>
                  </NavLink>
                </li>

                <li className="nav__item">
                  <NavLink
                    to="/#"
                    className="nav__link"
                    activeClassName="active-link"
                  >
                    <i className="bx bx-video nav__icon"></i>
                    <span className="nav__name">Video</span>
                  </NavLink>
                </li>

                <li className="nav__item">
                  <NavLink
                    to="/about"
                    className="nav__link"
                    activeClassName="active-link"
                  >
                    <i className="bx bx-user nav__icon"></i>
                    <span className="nav__name">About</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </header>
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/search" element={<Search/>}></Route>
              <Route path="/video" element={<Home/>}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
