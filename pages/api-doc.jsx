const ApiDoc = () => {
  return (
    <div>
      <div className="container">
        <div className="api-doc">
          <h2>Documentation</h2>
          <h3>Introduction</h3>
          <p>
            It is an API to get a screenshot of any website simply. It is
            designed to use in portfolios, projects. Any place where a
            screenshot of a website is required to show,Then you can use this
            API. Many times you need to show your website or something&apos;s
            screenshot but needed dynamically. For that situation, this is much
            helpful for you to use.
          </p>
          <h3>Is this free to use?</h3>
          <p>
            For now, It is fully free to use in small projects because we
            can&apos;t handle large traffic due to the limited hosting
            resources. If you are willing to use it in a large traffic project
            then mail me, I will give you the best solution to use this API.
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
              <b>With Image Type Response</b>
              <p>
                <b>End Point</b> :{' '}
                <code>https://web-capture.p.rapidapi.com/image</code>
                <br />
                <b>Method</b> : <span>GET</span>
                <br />
                <b>Params</b> :{' '}
                <span>
                  url(String), width (Number), height(Number),rapidapi-key
                </span>
                <br />
                <b>Response</b> : <span>Image</span>
              </p>
              <h4>Example:</h4>
              <pre style={{ overflowX: 'auto', padding: '1rem' }}>
                <a
                  href="https://web-capture2.p.rapidapi.com/image?url=https:%2F%2Fgoogle.com&width=1024&height=780&rapidapi-key=44fcc7f8f7mshacfcb91fc4190bfp189dddjsnaa696e83052d"
                  style={{ textDecoration: 'none', color: '#333' }}
                >
                  <code>
                    https://web-capture2.p.rapidapi.com/image?url=https:%2F%2Fgoogle.com&width=1024&height=780&rapidapi-key=your-api-key
                  </code>
                </a>
              </pre>
              <pre style={{ overflowX: 'auto', padding: '1rem' }}>
                <code>
                  &lt;img
                  src=&quote;https://web-capture2.p.rapidapi.com/image?url=https:%2F%2Fgoogle.com&width=1024&height=780&rapidapi-key=your-key
                  =&quote; alt=&quote;&quote; /&gt;
                </code>
              </pre>{' '}
            </li>
          </ol>

          <h3>Output:</h3>

          <img
            className="output-image"
            src="https://web-capture2.p.rapidapi.com/image?url=https:%2F%2Fgoogle.com&width=1024&height=780&rapidapi-key=44fcc7f8f7mshacfcb91fc4190bfp189dddjsnaa696e83052d"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ApiDoc;
