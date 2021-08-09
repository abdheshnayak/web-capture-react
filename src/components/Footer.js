import React from "react";

function Footer() {
  return (
    <>
      <div style={{ padding: "2rem" }}></div>
      <div className="footer">
        <div className="container">
          <div className="copyright">
            &copy;{new Date().getFullYear()}{" "}
            <a className="footer-copy-link" href="https://anayak.com.np">
              ANAYAK
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
