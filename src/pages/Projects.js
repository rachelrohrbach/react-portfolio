import React from 'react';
import Col from '../components/Col';
import Row from '../components/Row';
import Container from '../components/Container';
import projects from '../data/projects';
import Hero from '../components/Hero';
import Card from 'react-bootstrap/Card';

function Projects() {
  return (
    <div>
      <Hero />
      <Container>
        <Row>
          {projects.map((project) => (
            <Card style={{ width: '20rem', backgroundColor: 'transparent' }}>
              {/* <Card.Img variant='top' src={project.imgUrl} /> */}
              <Card.Body key={project.name}>
                <Card.Title className='text-center'>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className='btn-container'>
                  <a
                    className='btn btn-light ml-2'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={project.link}
                  >
                    Deployed Link
                  </a>
                  <a
                    className='btn btn-light ml-2'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={project.github}
                  >
                    GitHub Repo
                  </a>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
