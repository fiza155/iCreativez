import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "../assets/10P-Logo.svg";

const Navbar = () => {
  return (
    <>
      <header className="header fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
          <div className="container-fluid mx-4">
            <a href="#" className="navbar-brand">
              <img
                className="d-inline-block align-text-top"
                src={Logo}
                alt="10P Logo"
                style={{ maxWidth: "100%", height: "45px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link text-white me-3 p-3 "
                    href="#"
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    Company
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white me-3 p-3 "
                    href="#"
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white me-3 p-3 "
                    href="#"
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    Platforms
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white me-3 p-3 "
                    href="#"
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    Industries
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white me-3 p-3 "
                    href="#"
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    Insights
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white me-3 p-3  "
                    href="#"
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    Careers
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <button
                  className="btn-light me-3  text-center"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                    fontSize: "18px",
                    padding: "5px 22px 5px 22px",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#d4fe27")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                  type="button"
                >
                  Contact
                </button>
                <a href="#" className="nav-link text-white ms-3">
                  <i className="fas fa-search fs-5"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
