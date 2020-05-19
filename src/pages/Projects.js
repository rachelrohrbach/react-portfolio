import React from 'react';
// import Col from '../components/Col';
import { Col, Container, Row } from 'react-bootstrap';
import projects from '../projects.json';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div>
      <Container className='pt-5'>
        <h1 className='pb-3'> Projects </h1>
        <Row>
          {projects.map(project => (
            <Col size='sm-12 md-6 lg-4' key={project.name}>
              <ProjectCard
                name={project.name}
                description={project.description}
                imgUrl={project.imgUrl}
                github={project.github}
                link={project.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
