import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "./images/logo.png"
import GithubIcon from "./images/svgs/GithubIcon"
import './App.css';

export default function App() {
  return (
    <div>
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
        <nav className="navbar">
          <Link to="/">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="https://github.com/kiiramat"><GithubIcon className="icon-link" /></Link>
        </nav>
      </header>
      
      <Outlet />
      <footer>
        This is the bottom
      </footer>
    </div>
  );
}