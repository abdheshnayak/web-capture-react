import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

function Header(props) {
  const loc = useLocation();

  return (
    <>
      <div className="app-bar">
        <div className="container">
          <div className="nav-btns-container">
            <h2>
              URL CAPTURE
              <span className="brand">
                <a href="https://anayak.com.np">ANAYAK</a>
              </span>
            </h2>
            <Link to={loc.pathname == "/" ? "/api" : "/"}>
              <h2>
                {loc.pathname == "/" ? (
                  "API"
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
