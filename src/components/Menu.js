import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <aside className="main-sidebar sidebar-mecpock elevation-4">
      <Link to="/" className="brand-link">
        <div className="d-flex justify-content-center">
          <img
            src="https://www.smartantecipa.com.br/img/logo.png"
            alt="logo smart"
            className="brand-image img-fluid"
            style={{ opacity: ".8" }}
          />
        </div>
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info"></div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fas fa-building" />
                <p>
                  Cadastros
                  <i className="right fas fa-angle-left" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/adquirente" className="nav-link">
                    <p
                      className="ml-3"
                      onClick={(event) => {
                        if (window.matchMedia("(min-width: 769px)").matches) {
                          let pegabodylarge = document.querySelector("body");
                          pegabodylarge.setAttribute(
                            "class",
                            "sidebar-mini layout-fixed"
                          );
                        } else {
                          let pegabodysmall = document.querySelector("body");
                          pegabodysmall.setAttribute(
                            "class",
                            "sidebar-mini layout-fixed sidebar-closed sidebar-collapse"
                          );
                        }
                      }}
                    >
                      Adquirente
                    </p>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/atividade" className="nav-link">
                    <p
                      className="ml-3"
                      onClick={(event) => {
                        if (window.matchMedia("(min-width: 769px)").matches) {
                          let pegabodylarge = document.querySelector("body");
                          pegabodylarge.setAttribute(
                            "class",
                            "sidebar-mini layout-fixed"
                          );
                        } else {
                          let pegabodysmall = document.querySelector("body");
                          pegabodysmall.setAttribute(
                            "class",
                            "sidebar-mini layout-fixed sidebar-closed sidebar-collapse"
                          );
                        }
                      }}
                    >
                      Atividade
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/maquinaspos" className="nav-link">
                    <p
                      className="ml-3"
                      onClick={(event) => {
                        if (window.matchMedia("(min-width: 769px)").matches) {
                          let pegabodylarge = document.querySelector("body");
                          pegabodylarge.setAttribute(
                            "class",
                            "sidebar-mini layout-fixed"
                          );
                        } else {
                          let pegabodysmall = document.querySelector("body");
                          pegabodysmall.setAttribute(
                            "class",
                            "sidebar-mini layout-fixed sidebar-closed sidebar-collapse"
                          );
                        }
                      }}
                    >
                      POS
                    </p>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/estabelecimentos" className="nav-link">
                    <p
                      className="ml-3"
                      onClick={(event) => {
                        if (window.matchMedia("(min-width: 769px)").matches) {
                          let pegabodylarge = document.querySelector("body");
                          pegabodylarge.setAttribute(
                            "class",
                            "sidebar-mini layout-fixed"
                          );
                        } else {
                          let pegabodysmall = document.querySelector("body");
                          pegabodysmall.setAttribute(
                            "class",
                            "sidebar-mini layout-fixed sidebar-closed sidebar-collapse"
                          );
                        }
                      }}
                    >
                      Estabelecimento
                    </p>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fas fa-landmark" />
                <p>
                  Financeiro
                  <i className="right fas fa-angle-left" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/contratos" className="nav-link">
                    <p
                      className="ml-3"
                      onClick={(event) => {
                        if (window.matchMedia("(min-width: 769px)").matches) {
                          let pegabodylarge = document.querySelector("body");
                          pegabodylarge.setAttribute(
                            "class",
                            "sidebar-mini layout-fixed"
                          );
                        } else {
                          let pegabodysmall = document.querySelector("body");
                          pegabodysmall.setAttribute(
                            "class",
                            "sidebar-mini layout-fixed sidebar-closed sidebar-collapse"
                          );
                        }
                      }}
                    >
                      Contratos
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/movimentacao" className="nav-link">
                    <p
                      className="ml-3"
                      onClick={(event) => {
                        if (window.matchMedia("(min-width: 769px)").matches) {
                          let pegabodylarge = document.querySelector("body");
                          pegabodylarge.setAttribute(
                            "class",
                            "sidebar-mini layout-fixed"
                          );
                        } else {
                          let pegabodysmall = document.querySelector("body");
                          pegabodysmall.setAttribute(
                            "class",
                            "sidebar-mini layout-fixed sidebar-closed sidebar-collapse"
                          );
                        }
                      }}
                    >
                      Movimentações
                    </p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
