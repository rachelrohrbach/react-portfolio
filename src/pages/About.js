import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Hero from '../components/Hero';
import Wrapper from '../components/Wrapper';

function About() {
  return (
    <Wrapper>
      <Hero />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 style={{ margin: 10, textAlign: 'center' }}>About Me</h1>
            <p style={{ fontSize: 24, color: 'white', height: "100%" }}>
              I'm an aspiring web developer currently enrolled in the University
              of Washington Coding Full Stack Web Development Boot Camp with a
              passion for making responsive, user-friendly websites. I am
              well-organized and collaborative with a strong work ethic,
              bringing creativity from a background in hospitality and event
              management. When I’m not attending class or studying, I enjoy
              cooking, traveling, reading, playing the world’s only 10-player
              arcade game Killer Queen, and spending time with friends and
              family. Upon completion of the boot camp I’m looking forward to
              the opportunity to apply my new skills in the non-profit field.
            </p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default About;
