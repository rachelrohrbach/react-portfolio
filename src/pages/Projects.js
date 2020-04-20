import React from 'react';
import Col from '../components/Col';
import Row from '../components/Row';
import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';

function Projects() {
  return (
    <div
      className="portfolio"
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2017/09/06/13/18/background-2721423_960_720.jpg)`,
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <h1 style={{ textAlign: 'center', color: "white", paddingTop: "10px" }}>My Portfolio</h1>
      <Container>
        <Row>
          <div className="col-">
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
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
