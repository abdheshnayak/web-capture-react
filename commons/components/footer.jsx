import { motion } from 'framer-motion';
import React from 'react';

function Footer() {
  return (
    <>
      <div style={{ padding: '2rem' }} />
      <div className="footer">
        <div className="container">
          <div className="copyright">
            COPYRIGHT&copy;{new Date().getFullYear()}{' '}
            <a className="footer-copy-link" href="https://anayak.com.np">
              <motion.span
                style={{ display: 'inline-block' }}
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 1 }}
              >
                ANAYAK
              </motion.span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
