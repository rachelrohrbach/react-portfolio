import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <span>
        {' '}
        <h6>Rachel Rohrbach &copy; Copyright 2020</h6>
        <div className="social-links">
          <p className="li-link-social">
            <a
              className="social"
              href="https://github.com/rachelrohrbach"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-3x"aria-hidden="true" style={{ color: "white" }}></i>
            </a>
          </p>
          {' '}
          <p className="li-link-social">
            <a
              className="social"
              href="https://www.linkedin.com/in/rachelrohrbach/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-3x" aria-hidden="true" style={{ color: "white" }}></i>
            </a>
          </p>
        </div>
      </span>
    </footer>
  );
}

export default Footer;
