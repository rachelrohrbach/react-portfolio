import React from 'react';
import './style.css';
import Technologies from './technologies.png';

function Skills() {
  return (
    <div className='container'>
      <h1>
        <a
          className='text-center'
          id='resume'
          style={{ color: 'white', textDecoration: 'underline' }}
          href='https://drive.google.com/file/d/1mCjUass4ZfgGnQcnaKW80kFOt_k8KoKH/view?usp=sharing'
        >
          Full Resume
        </a>
      </h1>
      <div className='technologies text-center'>
        <img src={Technologies} alt='technologies' />
      </div>
      <div className='row'>
        <div className='col-md-12 col-sm-8'>
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
        </div>
      </div>
    </div>
  );
}

export default Skills;
