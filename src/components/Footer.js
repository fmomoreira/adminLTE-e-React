import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="main-footer">
      <strong>
        Desenvolvido por <Link to="/">Smart Antecipa</Link>.
      </strong>
      Todos os direitos reservados
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 1.0
      </div>
    </footer>
  );
}
