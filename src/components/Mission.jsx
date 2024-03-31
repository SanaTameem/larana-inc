import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../css/Mission.css';

const Mission = () => {
  const missions = [
    { missionName: 'Mission One', missionDescription: 'Presentations are communication tools that can be used as lectures, speeches, reports, and more.' },
    { missionName: 'Mission Two', missionDescription: 'Presentations are communication tools that can be used as lectures, speeches, reports, and more.' },
    { missionName: 'Mission Three', missionDescription: 'Presentations are communication tools that can be used as lectures, speeches, reports, and more.' },
  ];

  return (
    <div className="missions-page">
      <div className="mission-cover-div" />
      <div className="mission-imgs-div">
        <div className="mission-img1">
          <img src={`${process.env.PUBLIC_URL}/assets/mission-img1.jpg`} alt="missiong img1" />
        </div>
        <div className="mission-img2">
          <img src={`${process.env.PUBLIC_URL}/assets/logo-2.PNG`} alt="logo2" className="mission-img2-logo" />
          <img src={`${process.env.PUBLIC_URL}/assets/mission-img2.jpg`} alt="missiong img2" className="mission-img2-img" />
        </div>
      </div>
      <div className="mission-text-div">
        <p className="missions-small-title">OUR MISSION</p>
        <h2 className="missions-big-title">To be the best company in technology</h2>
        <p className="missions-info">
          Presentations are communication tools that can be used as lectures, speeches,
          reports, and more. It all depends on the purpose.
        </p>
        <div className="mission-list">
          {missions.map((mission) => (
            <div key={mission.missionName} className="mission-item">
              <div className="mission-item-logo-title">
                <FontAwesomeIcon icon={faCheck} />
                <h3>{mission.missionName}</h3>
              </div>
              <p className="mission-item-description">
                {mission.missionDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
