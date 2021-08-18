import axios from "axios";
import { motion } from "framer-motion";
import React, { createRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";
import "./main.scss";

function Main() {
  const [image, setimage] = useState("");
  const [is_loading, setis_loading] = useState(false);

  const [width_height, setwidth_height] = useState({
    width: 1024,
    height: 780,
  });

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
      url: "https://api.anayak.com.np/web-capture/",
      params: {
        url: my_ref.current.value,
        width: width_height.width,
        height: width_height.height,
      },
    })
      .then((res) => {
        setis_loading(false);
        setimage(res.data);
      })
      .catch((err) => {
        setis_loading(false);
      });
  };

  const changeHandlerWH = (e) => {
    setwidth_height((s) => {
      return {
        ...s,
        [e.target.name]: e.target.value,
      };
    });
  };

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut",
  };
  const loadingCircleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
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
            <input
              type="number"
              value={width_height.width}
              onChange={changeHandlerWH}
              name="width"
            />
            ✕
            <input
              type="number"
              value={width_height.height}
              onChange={changeHandlerWH}
              name="height"
            />
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
          {is_loading && (
            <div className="spinner">
              <motion.div
                variants={loadingContainerVariants}
                initial="start"
                animate="end"
              >
                <motion.span
                  variants={loadingCircleVariants}
                  transition={loadingCircleTransition}
                />
                <motion.span
                  variants={loadingCircleVariants}
                  transition={loadingCircleTransition}
                />
                <motion.span
                  variants={loadingCircleVariants}
                  transition={loadingCircleTransition}
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
