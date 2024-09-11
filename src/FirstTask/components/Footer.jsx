import React from "react";

import Logo from "../assets/10P-Logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#202022", padding: "4rem 0" }}
    >
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-lg-3 col-md-3 mb-4 mb-md-0 p-0">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "150px", marginBottom: "1rem" }}
            />

            <p>
              10Pearls is an award-winning digital development company, helping
              businesses with product design, development, and technology
              acceleration.
            </p>
          </div>

          {/* Vertical Line */}
          <div className="d-none d-lg-block col-lg-1 w-auto">
            <div
              style={{
                borderLeft: "1px solid white",
                height: "180px",
                margin: "0 ",
                width: "0px",
                padding: "0px",
              }}
            ></div>
          </div>

          {/* First Set of Links */}
          <div className="col-lg-2 col-md-3 p-0">
            <ul className="list-unstyled mb-0">
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 1
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 2
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 3
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          {/* Second Set of Links */}
          <div className="col-lg-2 col-md-3 p-0">
            <ul className="list-unstyled mb-0">
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 5
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 6
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 7
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 8
                </a>
              </li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="d-none d-lg-block col-lg-1 w-auto">
            <div
              style={{
                borderLeft: "1px solid white",
                height: "180px",
                margin: "0 auto",
                width: "0",
                padding: "0",
              }}
            ></div>
          </div>

          {/* Third Set of Links */}
          <div className="col-lg-2 col-md-3 p-0">
            <ul className="list-unstyled mb-0">
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 9
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 10
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 11
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 12
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Set of Links */}
          <div className="col-lg-2 col-md-3 p-0">
            <ul className="list-unstyled mb-0">
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 13
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 14
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 15
                </a>
              </li>
              <li className="m-0 p-0">
                <a href="#!" className="text-white">
                  Link 16
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 " />

        {/* Bottom Section*/}
        <div className="row align-items-left">
          {/* Contact Information */}
          <div className="col-lg-4 col-md-12 text-left text-md-start mb-3 mb-lg-0 ">
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <li style={{ marginRight: "30px" }}>+1-703-935-1919</li>
              <li>info@10pearls.com</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div
            className="col-lg-4 col-md-12 text-md-start text-center  mb-3 mb-lg-0"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <a
              className="btn btn-outline-light btn-floating"
              href="#!"
              role="button"
              style={{
                marginRight: "30px",
                borderRadius: "50%",
                borderWidth: "2px",
                padding: "0",
                width: "45px",
                height: "45px",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className="btn btn-outline-light btn-floating"
              href="#!"
              role="button"
              aria-label="Threads"
              style={{
                marginRight: "30px",
                borderRadius: "50%",
                borderWidth: "2px",
                padding: "0",
                width: "45px",
                height: "45px",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Placeholder for Threads icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M224 32c-106.1 0-192 85.9-192 192s85.9 192 192 192 192-85.9 192-192S330.1 32 224 32zm0 352c-88.4 0-160-71.6-160-160S135.6 64 224 64s160 71.6 160 160-71.6 160-160 160z" />
              </svg>
            </a>
            <a
              className="btn btn-outline-light btn-floating"
              href="#!"
              role="button"
              style={{
                marginRight: "20px",
                borderRadius: "50%",
                borderWidth: "2px",
                padding: "0",
                width: "45px",
                height: "45px",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>

          {/* Privacy Policy */}
          <div className="col-lg-4 col-md-12 text-center text-md-end">
            <a href="#!" className="text-white text-decoration-none">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
