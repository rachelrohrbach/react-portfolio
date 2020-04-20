import './style.css';

import React from 'react';

function Hero() {
  return (
    <div
      className="hero text-center"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/09/06/13/18/background-2721423_960_720.jpg")`,
      }}
    >
      <h1>Rachel Rohrbach</h1>
      <h2>Full Stack Web Developer in Seattle, Washington</h2>
      <div className="social-links">
        <p className="li-link-social">
          <a
            className="social"
            href="https://github.com/rachelrohrbach"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-github fa-3x"
              aria-hidden="true"
              style={{ color: 'white' }}
            ></i>
          </a>
        </p>{' '}
        <p className="li-link-social">
          <a
            className="social"
            href="https://www.linkedin.com/in/rachelrohrbach/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-linkedin fa-3x"
              aria-hidden="true"
              style={{ color: 'white' }}
            ></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
