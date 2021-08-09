import axios from "axios";
import React, { createRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header from "./Header";
import "./main.scss";

function Main() {
  const [image, setimage] = useState("");
  const [is_loading, setis_loading] = useState(false);

  const [width, setwidth] = useState(1024);
  const [height, setheight] = useState(780);

  useEffect(() => {
    captureUrl();
  }, []);

  const my_ref = createRef();

  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  const captureUrl = () => {
    if (!my_ref.current.value) {
      toast.error("Url is not provided.");
      return;
    } else if (!validURL(my_ref.current.value)) {
      toast.error("This is not a valid url.");
      return;
    } else if (my_ref.current.value.substring(0, 4) != "http") {
      toast.error("URL must start with http");
      return;
    }
    setis_loading(true);
    axios({
      url: "https://api.anayak.com.np/url-capture/",
      params: { url: my_ref.current.value, width, height },
    })
      .then((res) => {
        setis_loading(false);
        setimage(res.data);
      })
      .catch((err) => {
        setis_loading(false);
      });
  };

  return (
    <div className="main">
      <Header />
      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            captureUrl();
          }}
          className="form"
        >
          <div className="wh-outer">
            <input type="number" value={width} />✕
            <input type="number" value={height} />
          </div>
          <div className="button-box-cont">
            <input
              type="text"
              ref={my_ref}
              placeholder="https://facebook.com"
              defaultValue="https://google.com"
            />
            <input type="submit" value="Capture" />
          </div>
        </form>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={image} alt="" />
          {is_loading && <div className="spinner"></div>}
        </div>
      </div>
    </div>
  );
}

export default Main;
