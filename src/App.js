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
          <Link className="nav-link" to="/">Projects</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </nav>
        <a href="https://github.com/kiiramat"><GithubIcon className="icon-link" /></a>
      </header>
      
      <Outlet />
      <footer>
        This is the bottom
      </footer>
    </div>
  );
}