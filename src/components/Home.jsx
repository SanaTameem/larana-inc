import React from 'react';
import '../css/Home.css';
import Analytic from './Analytic';

const Home = () => (
  <>
    <div className="home-page">
      <div className="text-ball">
        <div className="purple-circle" />
        <div className="home-text">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="logo" />
          <h1 className="title">IT Solutions & Services</h1>
          <p className="small-home-text">Presentation</p>
        </div>
      </div>
      <div className="cover-img">
        <img src={`${process.env.PUBLIC_URL}/assets/cover-img.png`} alt="" />
      </div>

    </div>
    <Analytic />
  </>
);

export default Home;
