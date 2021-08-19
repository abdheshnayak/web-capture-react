import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

function Header(props) {
  const loc = useLocation();

  return (
    <>
      <div className="app-bar">
        <div className="container">
          <div className="nav-btns-container">
            <h2 className="app-bar-h2">
              WEB CAPTURE
              <span className="brand">
                <a className="brand-link" href="https://anayak.com.np">
                  ANAYAK
                </a>
              </span>
            </h2>
            <Link className="btn" to={loc.pathname == "/" ? "/api" : "/"}>
              <h2 className="custom-ripple">
                {loc.pathname == "/" ? (
                  "API Doc"
                ) : (
                  <i className="fas fa-home-lg"></i>
                )}
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ padding: "1.75rem" }}></div>
    </>
  );
}

export default Header;
