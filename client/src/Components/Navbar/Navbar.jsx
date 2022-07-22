import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-div">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Shop-Wind
          </a>
          <div
            className="ul-div collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="ul-part navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Men's">Men's</Link>
              </li>
              <li className="nav-item">
                <Link to="/Women's">Women's</Link>
              </li>
              <li className="nav-item">
                <Link to="/Kid's">Kid's</Link>
              </li>
              <li className="nav-item">
                <Link to="#">About us</Link>
              </li>
              <li className="nav-item">
                <Link to="#">Contacts us</Link>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-primary" type="submit">
                Sign in
              </button>
              <button className="btn btn-success mx-2" type="submit">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
