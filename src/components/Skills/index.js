import React from 'react';
import { Container, Col } from 'react-bootstrap';
import './style.css';
import Technologies from './technologies.png';

function Skills() {
  return (
    <Container className='skills'>
      <div className='row'>
        <Col size='md-12 sm-8'>
          <div className='content-body'>
            <ul className='ul-skills'>
              <h1>Skills</h1>
              <li className='li-skills'>MySQL</li>
              <li className='li-skills'>MongoDB</li>
              <li className='li-skills'>Express</li>
              <li className='li-skills'>React</li>
              <li className='li-skills'>Node</li>
              <li className='li-skills'>HTML</li>
              <li className='li-skills'>CSS</li>
              <li className='li-skills'>JavaScript</li>
              <li className='li-skills'>jQuery</li>
              <li className='li-skills'>Bootstrap</li>
              <li className='li-skills'>Git</li>
              <li className='li-skills'>Handlebars</li>
            </ul>
          </div>
        </Col>
      </div>
      <div className='technologies text-center'>
        <img src={Technologies} alt='technologies' />
      </div>
    </Container>
  );
}

export default Skills;
