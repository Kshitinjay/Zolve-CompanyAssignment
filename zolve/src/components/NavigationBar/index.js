import React from "react";
import { Route, Switch, Redirect,Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Zolve
          </a>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
              <li className="nav-item">
                  <Link to="/" className="nav-link me-4">Home</Link>
              </li>
              <li className="nav-item">
                  <Link to="/clip" className="nav-link me-4">Clipboard</Link>
              </li>
              <li className="nav-item">
                  <Link to="/selfie" className="nav-link me-4">Selfie</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
