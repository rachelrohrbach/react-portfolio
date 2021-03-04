import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Hero from '../components/Hero';
import Wrapper from '../components/Wrapper';
import ProfilePic from './../images/rachel-profile-pic.jpg';

function About() {
  return (
    <Wrapper style={{ height: '100%' }}>
      <Hero />
      <p className='text-center mx-auto'>
        <img
          className='profile-pic'
          src={ProfilePic}
          alt='rachel rohrbach'
          style={{ borderRadius: '50%', width: 165, height: 205 }}
        />
      </p>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size='md-12'>
            <p className='text-center' style={{ fontSize: 24, color: 'white' }}>
              {}
              Hello World! I'm a Full Stack Developer with a passion for making responsive, accessible,
              user-friendly websites and a background in event management. Known
              for being well-organized and collaborative with a strong work
              ethic. Certificate in Full Stack Web Development from the
              University of Washington Coding Boot Camp with skills in HTML,
              CSS, JavaScript, Node.js, and React.
              <br />
              <br />
              When I’m not coding, I enjoy baking, hand embroidering,
              traveling, reading, spending time with friends and family, and
              playing the world’s only 10-player arcade game Killer Queen.
            </p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default About;
