import './style.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// I consulted Bennett Notes for the Navbar Bootstrap collapse functionality https://www.bennettnotes.com/bootstrap-navbar-collapse-reactjs/ 
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const collapse = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const toggle = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button
            onClick={this.toggleNavbar}
            className={`${toggle}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${collapse}`} id="navbarResponsive">
            <ul className="navbar-nav mx-auto">
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
                  to="/Experience"
                  className={
                    window.location.pathname === '/Experience'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Projects"
                  className={
                    window.location.pathname === '/Projects'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
