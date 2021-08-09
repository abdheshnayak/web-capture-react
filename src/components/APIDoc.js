import React from "react";
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
            <code>https://api.anayak.com.np/url-capture/</code>
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
            https://api.anayak.com.np/url-capture/?url=https://google.com
          </code>
        </div>
      </div>
    </div>
  );
}

export default APIDoc;
