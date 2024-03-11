import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaMailBulk, FaFacebook } from 'react-icons/fa';
import './about.css';

const spacing = 10; // Define the spacing variable

export function About() {
  return (
    <div id='about'>
      <div className="grid">
        <div className='ingrid'>
          <div className="g-col-6">
            <h1>About Us</h1>
            <br />
            <p>SolarMate is developed by <strong>me</strong>, pursuing undergraduate studies in computer science and engineering at IIIT Naya Raipur. It is created with the motive to promote an innovative approach towards sustainability and sustainable development.Aim is :
            </p>
            <br />
            <ol>
              <li>Raise awareness about sustainability and methods for sustainable development.</li>
              <li>Promote the practical implementation of theoretical solutions to enhance environmental conditions.</li>
              <li>Provide a platform to educate users on the latest research and advancements in sustainable technologies.</li>
              <li>Encourage users to make eco-friendly and sustainable choices by redirecting them to relevant product websites.</li>
              <li>Offer a tool to calculate your carbon footprint based on metrics derived from your daily lifestyle habits.</li>
            </ol>

          </div>
          <div className="g-col-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.6659728680834!2d81.7660447681316!3d21.128003177290722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c434ac2ae871%3A0x4e3568497a7e1d7e!2sInternational%20Institute%20of%20Information%20Technology%2C%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1710070928758!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ marginRight: spacing + 'em' }} // Use the spacing variable in the style
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container">
        <h3>Reach out to us!</h3>
        <div className='bottom'>
          <div><a href="https://www.facebook.com/" style={{ display: 'inline-block' }} rel='noreferrer'><FaFacebook /></a></div>
          <div><a href="https://www.instagram.com/" style={{ display: 'inline-block' }} rel='noreferrer'><FaInstagram /></a></div>
          <div><a href="https://twitter.com/home" style={{ display: 'inline-block' }} rel='noreferrer'><FaTwitter /></a></div>
          <div><a href="https://in.linkedin.com/" style={{ display: 'inline-block' }} rel='noreferrer'><FaLinkedin /></a></div>
          <div><a href="https://mail.google.com/mail/" style={{ display: 'inline-block' }} rel='noreferrer'><FaMailBulk /></a></div>
        </div>
      </div>
    </div>
  );
}

