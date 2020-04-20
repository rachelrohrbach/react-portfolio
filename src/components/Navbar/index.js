import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Row from '../Row';

function Navbar() {
  return (
    <div
      id="nav-container"
      style={{
        background: 'rgb(165,201,79)',
        background:
          'linear-gradient(90deg, rgba(165,201,79,1) 13%, rgba(45,144,100,1) 50%, rgba(37,204,223,1) 88%)',
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/" style={{ fontSize: '32px' }}>
          Rachel Rohrbach
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto justify-content-center">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === '/' ||
                  window.location.pathname === '/about'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/skills"
                className={
                  window.location.pathname === '/skills'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={
                  window.location.pathname === '/projects'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
