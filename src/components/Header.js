import { motion } from "framer-motion";
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
              <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
                <motion.span
                  style={{ display: "block" }}
                  whileHover={{ scale: 1.025 }}
                  whileTap={{ scale: 1 }}
                >
                  WEB CAPTURE
                </motion.span>
              </Link>
              <span className="brand">
                <motion.a
                  style={{ display: "block" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  className="brand-link"
                  href="https://anayak.com.np"
                >
                  ANAYAK
                </motion.a>
              </span>
            </h2>
            <Link className="btn" to={loc.pathname == "/" ? "/api" : "/"}>
              <motion.h2
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className="custom-ripple"
              >
                {loc.pathname == "/" ? (
                  "API Doc"
                ) : (
                  <i className="fas fa-home-lg"></i>
                )}
              </motion.h2>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ padding: "1.75rem" }}></div>
    </>
  );
}

export default Header;
