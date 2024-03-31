import React from 'react';
import '../css/About.css';
import Mission from './Mission';

const About = () => (
  <>
    <div className="about-page">
      <div className="about-img">
        <img src={`${process.env.PUBLIC_URL}/assets/about-img2.jpg`} alt="about-img" />
      </div>
      <div className="about-text">
        <div className="about-title">
          <div className="about-small-title">ABOUT US</div>
          <div className="about-large-title">We&apos;re a new startup company</div>
        </div>
        <div className="about-info">
          <p>
            Presentations are communication tools that can be used as lectures,
            speeches, reports, and more. It all depends on the purpose of your
            presentation, and how you plan to arrange the details.
          </p>
          <p>
            Presentations are communication tools that can be used as lectures,
            speeches, reports, and more. It all depends on the purpose of your
            presentation.
          </p>
        </div>
      </div>
    </div>
    <Mission />
  </>
);

export default About;
