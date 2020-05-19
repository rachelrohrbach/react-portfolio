import './style.css';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
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
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <Container>
          <button
            onClick={this.toggleNavbar}
            className={`${toggle}`}
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className={`${collapse}`} id='navbarResponsive'>
            <ul className='navbar-nav mx-auto'>
              <li className='nav-item'>
                <Link
                  to='/'
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
              <li className='nav-item'>
                <Link
                  to='/Skills'
                  className={
                    window.location.pathname === '/skills'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  Skills
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Projects'
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
        </Container>
      </nav>
    );
  }
}
export default Navbar;
