import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function APIDoc() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="api-doc">
          <h3>API Documentation</h3>
          <p>
            This api is fully free and can be used with your small projects.
          </p>

          <p>
            <b>Note:</b>{" "}
            <span>
              This api is not for the project with huge traffic because we have
              limited resourses.
            </span>{" "}
          </p>

          <h3>How to use?</h3>
          <p>
            <b>End Point</b> :{" "}
            <code>https://api.anayak.com.np/web-capture/</code>
            <br />
            <b>Method</b> : <span>GET</span>
            <br />
            <b>Params</b> :{" "}
            <span>url(String), width (Number), height(Number)</span>
            <br />
            <b>Response</b> : <span>Image (base64 string)</span>
          </p>

          <h3>Example:</h3>

          <code>
            https://api.anayak.com.np/web-capture/?url=https://google.com
          </code>

          <h3>API to get row image</h3>

          <p>
            <b>End Point</b> :{" "}
            <code>https://api.anayak.com.np/web-capture/image</code>
            <br />
            <b>Method</b> : <span>GET</span>
            <br />
            <b>Params</b> :{" "}
            <span>url(String), width (Number), height(Number)</span>
            <br />
            <b>Response</b> : <span>Image</span>
          </p>

          <h3>Example:</h3>

          <code>
            https://api.anayak.com.np/web-capture/image?url=https://google.com&width=12&height=8
          </code>

          <h3>Output:</h3>

          <img
            className="output-image"
            src="https://api.anayak.com.np/web-capture/image?url=https://google.com&width=12&height=8"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default APIDoc;
