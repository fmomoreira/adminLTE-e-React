import React from "react";

export default function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <button id="botao-menu" className="nav-link" data-widget="pushmenu">
            <i className="fas fa-bars" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
