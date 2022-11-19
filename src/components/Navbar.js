import React from "react";
import { Link } from "react-router-dom";
// component
import FormSearch from "./FormSearch";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 px-5">
        <div className="container-fluid mx-5">
          <Link to="/" className="navbar-brand ms-5 fw-bold fs-3 text-primary">
            GROSIR
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-5 mb-2 mb-lg-0">
              <li className="nav-item fw-bold mx-2">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item fw-bold mx-2">
                {token ? (
                  <Link to="/product" className="nav-link">
                    Product
                  </Link>
                ) : (
                  <Link to="/auth/login" className="nav-link">
                    Product
                  </Link>
                )}
              </li>
            </ul>
            <FormSearch />
            <div className="btn-group ms-5">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle fw-bold"
                data-bs-toggle="dropdown"
              >
                Signin / Signup
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/auth/login" className="dropdown-item">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/auth/register" className="dropdown-item">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/auth/logout" className="dropdown-item">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
