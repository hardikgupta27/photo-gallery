
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Categories from "./pages/Categories";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <Link to="/" className="logo">FRAME & FOCUS</Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About & Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="footer">
  <p>© 2026 FRAME & FOCUS | Photography Gallery</p>
  <p>Created by: Hardik Gupta</p>
  <p>Contact: frameandfocus@example.com</p>
</footer>
    </BrowserRouter>
  );
}

export default App;
