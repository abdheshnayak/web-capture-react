import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function APIDoc() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="api-doc">
          <h2>Documentation</h2>
          <h3>Introduction</h3>
          <p>
            It is an API to get a screenshot of any website simply. It is
            designed to use in portfolios, projects. Any place where a
            screenshot of a website is required to show can use this API. Many
            times you need to show your website or something's screenshot but
            needed dynamically. For that situation, this is much helpful for you
            to use.
          </p>
          <h3>Is this free to use?</h3>
          <p>
            For now, It is fully free to use in small projects because we can't
            handle large traffic due to the limited hosting resources. If you
            are willing to use it in a large traffic project then mail me, I
            will give you the best solution to use this API.
          </p>

          <h3>How to use?</h3>
          <p>You can use this api in types</p>
          <ol>
            <li>With Base64 String response</li>
            <li>With Image response</li>
          </ol>

          <h3>Here You Go:</h3>
          <ol>
            <li>
              <p>
                <b>With Base64 String Response</b>
              </p>
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
                <h4>Example:</h4>
                <code>
                  https://api.anayak.com.np/web-capture/?url=https://google.com
                </code>
              </p>
            </li>
            <li>
              <b>With Image Type Response</b>
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
              <h4>Example:</h4>
              <pre style={{ overflowX: "auto", padding: "1rem" }}>
                <a
                  href="https://api.anayak.com.np/web-capture/image?url=https://google.com&width=12&height=8"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <code>
                    https://api.anayak.com.np/web-capture/image?url=https://google.com&width=12&height=8
                  </code>
                </a>
              </pre>
              <pre style={{ overflowX: "auto", padding: "1rem" }}>
                <code>
                  &lt;img
                  src="https://api.anayak.com.np/web-capture/image?url=https://google.com&width=12&height=8
                  " alt="" /&gt;
                </code>
              </pre>{" "}
            </li>
          </ol>

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
