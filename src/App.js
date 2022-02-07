import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "./images/logo.png";
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div>
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
        <nav className="navbar">
          <Link className="nav-link" to="/">About</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </nav>
        <a href="https://github.com/kiiramat"><FontAwesomeIcon className="github" icon={faGithub} /></a>
      </header>

      <Outlet />
    </div>
  );
}