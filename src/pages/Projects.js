import React from 'react';
import Col from '../components/Col';
import Row from '../components/Row';
import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';
import Hero from '../components/Hero';

function Projects() {
  return (
    <div>
      <Hero />
      <Container>
        <Row>
          <Col size="md-12">
              {projects.map((project) => (
                <div className="project-card" key={project.name}>
                  <ProjectCard
                    name={project.name}
                    description={project.description}
                    imgUrl={project.imgUrl}
                    github={project.github}
                    link={project.link}
                  />
                </div>
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
