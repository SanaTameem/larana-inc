import React from 'react';
import '../css/Analytic.css';

const Analytic = () => (
  <div className="analytics-page">
    <div className="analytics-page-top">
      <div className="analytic-content">
        <h3 className="analytic-small-title">ANALYTICS</h3>
        <h3 className="analytic-big-title">Larana chart analytics</h3>
        <p className="analytic-para">
          Presentations are communication tools that can be used as lectures,
          speeches, reports, and more. It all depends on the purpose of your
          presentation, and how you plan to arrange the details.
        </p>
        <div className="analytic-cards">
          <div className="chart1">
            <h4>Chart Analysis 01</h4>
            <p>
              Presentations are communication
              tools that can be used as lectures,
              speeches, reports, and more.
            </p>
          </div>
          <div className="chart2">
            <h4>Chart Analysis 02</h4>
            <p>
              Presentations are communication
              tools that can be used as lectures,
              speeches, reports, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="analytics-chart-img">
        <img src={`${process.env.PUBLIC_URL}/assets/analytics-img.png`} alt="" />
      </div>
    </div>
    <div className="analytics-cover" />
  </div>
);

export default Analytic;
