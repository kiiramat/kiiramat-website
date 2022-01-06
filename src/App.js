import React from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <header>
        This is the top
      </header>
      <Outlet />
      <footer>
        This is the bottom
      </footer>
    </div>
  );
}