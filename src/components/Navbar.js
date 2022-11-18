import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item fw-bold mx-2">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item fw-bold mx-2">
                <Link to="/product" className="nav-link">
                  Product
                </Link>
              </li>
              <li className="nav-item dropdown fw-bold mx-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Signin / Signup
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Register
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex me-5">
              <input
                className="form-control me-2 w-100"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
