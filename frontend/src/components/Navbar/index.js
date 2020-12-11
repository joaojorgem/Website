import React from "react";
import { isAuthenticated, logout } from "../../services/auth";

export default function Navbar() {
  return (

    <nav className="navbar navbar-expand navbar-dark bg-warning mb-5">
      <a className="navbar-brand" href="/">
        Oficina5
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample02"
        aria-controls="navbarsExample02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Inicio
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/posts">
              Postagens
            </a>
          </li>

          {isAuthenticated() === false ? (
            <>
              <li className="nav-item active">
                <a className="nav-link" href="/login">
                  Entrar
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="/register">
                  Criar Conta
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item active">
                <span
                  className="btn btn-link nav-link"
                  onClick={() => logout()}
                >
                  Sair
                </span>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
