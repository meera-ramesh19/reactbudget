import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='container'>
        <hr />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-sm-6 col-xs-12'>
            <p className='copyright-text'>
              Copyright &copy; 2021 All Rights Reserved by MeeraRamesh
            </p>
          </div>
          <div className='col-md-4 col-sm-6 col-xs-12'>
            <ul className='social-icons'>
           
              <li>
                <a className='twitter' href='https://twitter.com/Meerarams'>
                  <FaTwitter color='#007bb6' />
                </a>
              </li>
              <li>
                <a className='github' href='https://github.com/meera-ramesh19/'>
                  <FaGithub color='#189cac' />
                </a>
              </li>
              <li>
                <a
                  className='linkedin'
                  href='https://www.linkedin.com/in/meeraramesh/'
                >
                  <FaLinkedin color='#0A66C2' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
