import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Hero from '../components/Hero';

function About() {
  return (
    <div>
      <Hero backgroundImage="https://cdn.pixabay.com/photo/2017/09/06/13/18/background-2721423_960_720.jpg">
        <h1>Rachel Rohrbach</h1>
        <h2>Full Stack Web Developer in Seattle, Washington</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 style={{ margin: 10, textAlign: 'center' }}>About Me</h1>
            <p style={{ fontSize: 24 }}>
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
    </div>
  );
}

export default About;
