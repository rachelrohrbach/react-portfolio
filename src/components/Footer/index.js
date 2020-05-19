import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className='footer'>
      <span>
        <a
          className='social'
          href='https://drive.google.com/https://docs.google.com/document/d/1-LsTu-X7B70dQrTWxNUDoB5aq3A91tbEY4rxKY1jrhk/edit?usp=sharing/d/1mCjUass4ZfgGnQcnaKW80kFOt_k8KoKH/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
        >
          Resume |
        </a>
        <a
          className='social'
          href='https://github.com/rachelrohrbach'
          target='_blank'
          rel='noopener noreferrer'
        >{' '}
          GitHub |
        </a>
        <a
          className='social'
          href='https://www.linkedin.com/in/rachelrohrbach'
          target='_blank'
          rel='noopener noreferrer'
        >{' '}
          LinkedIn
        </a>
        <div>
          <a href='mailto: rachel.rohrbach@gmail.com'>
            rachel.rohrbach@gmail.com
          </a>{' '}
        </div>
        <p> Copyright © 2020 Rachel Rohrbach</p>
      </span>
    </footer>
  );
}

export default Footer;
