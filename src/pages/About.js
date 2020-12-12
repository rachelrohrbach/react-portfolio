import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Hero from '../components/Hero';
import Wrapper from '../components/Wrapper';

function About() {
  return (
    <Wrapper style={{ height: '100%' }}>
      <Hero />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size='md-12'>
            <p className='text-center' style={{ fontSize: 24, color: 'white' }}>{}
              Web Developer with a passion for making responsive, user-friendly
              websites and a background in event management. Known for being
              well-organized and collaborative with a strong work ethic. Certificate in Full Stack Web Development from the University of Washington Coding Boot Camp with skills in HTML, CSS, JavaScript and React.  
               <br />
              
              <br />
              When I’m not coding, I enjoy cooking, hand embroidering, 
              traveling, reading, spending time with friends and family, and playing the world’s only 10-player arcade game
              Killer Queen.
            </p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default About;
