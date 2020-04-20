import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';
import Col from '../Col';
import Container from '../Container';
import './style.css';

function ProjectCard(props) {
  return (
    <Container>
      <div className="row mt-5">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center">{props.name}</h1>
            <img
              className="card-img"
              src={props.imgUrl}
              alt="project-screenshot"
            />
            <h5 className="card-text">{props.description}</h5>
            <div className="links">
              <h5 className="link">
                <a href={props.link} class="btn btn-primary">
                  Deployed App
                </a>
              </h5>
              <h5 className="github">
                <a
                  id="github"
                  href={props.github}
                  class="btn btn-primary"
                  style={{ alignContent: 'right' }}
                >
                  GitHub Repo
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default ProjectCard;
