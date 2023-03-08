import Footer from '@commons/components/footer';
import Header from '@commons/components/header';
import axios from 'axios';
import { motion } from 'framer-motion';
import React, { createRef, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Main = () => {
  const [image, setimage] = useState('');
  const [buffer, setimageBuffer] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const [widthHeight, setwidthHeight] = useState({
    width: 1024,
    height: 780,
  });

  const myRef = createRef();

  const validURL = (str) => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    return !!pattern.test(str);
  };

  const options = {
    method: 'GET',
    url: 'https://web-capture2.p.rapidapi.com',
    params: { url: 'https://google.com', height: '780', width: '1024' },
    headers: {
      'X-RapidAPI-Key': '44fcc7f8f7mshacfcb91fc4190bfp189dddjsnaa696e83052d',
      'X-RapidAPI-Host': 'web-capture2.p.rapidapi.com',
    },
    responseType: 'arraybuffer',
  };

  const captureUrl = () => {
    if (!myRef.current.value) {
      toast.error('Url is not provided.');
      return;
    }
    if (!validURL(myRef.current.value)) {
      toast.error('This is not a valid url.');
      return;
    }
    if (myRef.current.value.substring(0, 4) !== 'http') {
      toast.error('URL must start with http');
      return;
    }
    setisLoading(true);

    if (isLoading) {
      toast.error('already loading please wait');
    }

    (async () => {
      try {
        // @ts-ignore
        const res = await axios({
          ...options,
          url: `${options.url}/image`,
          params: {
            url: myRef.current.value || 'https://google.com',
            height: widthHeight.height || '780',
            width: widthHeight.width || '1024',
          },
        });
        const b = Buffer.from(res.data, 'binary');
        setimageBuffer(b);
        const img = b.toString('base64');
        setimage(img);
      } catch (err) {
        console.log(err);
      } finally {
        setisLoading(false);
      }
    })();
  };

  useEffect(() => {
    captureUrl();
  }, []);

  const changeHandlerWH = (e) => {
    setwidthHeight((s) => {
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
    ease: 'easeInOut',
  };
  const loadingCircleVariants = {
    start: {
      y: '0%',
    },
    end: {
      y: '100%',
    },
  };

  const download = () => {
    if (!buffer) {
      toast.error('capture an image first');
      return;
    }

    try {
      const url_ = window.URL.createObjectURL(new Blob([buffer]));
      const link = document.createElement('a');
      link.href = url_;
      link.setAttribute('download', 'image.png'); // or any other extension
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      toast.error('Faild to download');

      console.log(err);
    }
  };

  const downloadPdf = () => {
    if (!buffer) {
      toast.error('capture an image first');
      return;
    }
    if (isLoading) {
      toast.error('already loading please wait');
    }

    (async () => {
      try {
        setisLoading(true);
        // @ts-ignore
        const res = await axios({
          ...options,
          url: `${options.url}/pdf`,
          params: {
            url: myRef.current.value || 'https://google.com',
            height: widthHeight.height || '780',
            width: widthHeight.width || '1024',
          },
        });
        const b = Buffer.from(res.data, 'binary');

        const url_ = window.URL.createObjectURL(new Blob([b]));
        const link = document.createElement('a');
        link.href = url_;
        link.setAttribute('download', 'capture.pdf'); // or any other extension
        document.body.appendChild(link);
        link.click();
      } catch (err) {
        console.log(err);
      } finally {
        setisLoading(false);
      }
    })();
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
              value={widthHeight.width}
              onChange={changeHandlerWH}
              name="width"
            />
            ✕
            <input
              type="number"
              value={widthHeight.height}
              onChange={changeHandlerWH}
              name="height"
            />
          </div>
          <div className="button-box-cont">
            <input
              type="text"
              ref={myRef}
              placeholder="https://facebook.com"
              defaultValue="https://google.com"
            />

            <motion.input
              type="submit"
              value="Capture"
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.05 }}
            />
          </div>
        </form>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src={`data:image/png;base64,${image}`}
            alt=""
            // onClick={download}
          />
          {isLoading && (
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '0.5rem',
            gap: '1rem',
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="custom-ripple download-button"
            onClick={download}
          >
            Download
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="custom-ripple download-button"
            onClick={downloadPdf}
          >
            Download Pdf
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
