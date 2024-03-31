import React from 'react';
import '../css/Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Kyrie Petrakis',
      img: `${process.env.PUBLIC_URL}/assets/team1.jpg`,
      job: 'CO FOUNDER',
      info: 'Presentations are communication tools that can be used as lectures, speeches, reports, and more.',
    },
    {
      name: 'Juliana Silva',
      img: `${process.env.PUBLIC_URL}/assets/team2.jpg`,
      job: 'GENERAL MANAGER',
      info: 'Presentations are communication tools that can be used as lectures, speeches, reports, and more.',
    },
    {
      name: 'Pedro Fernandes',
      img: `${process.env.PUBLIC_URL}/assets/team3.jpg`,
      job: 'HEAD OF MARKETING',
      info: 'Presentations are communication tools that can be used as lectures, speeches, reports, and more.',
    },
  ];

  return (
    <div className="our-team-page">
      <div className="team-title">
        <p>Our Team</p>
        <h2>Meet our amazing team</h2>
      </div>
      <div className="team-cards">
        {teamMembers.map((member) => (
          <div key={member.name} className="team-card">
            <div className="team-card-img">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="team-name-job">
              <p className="name">{member.name}</p>
              <p className="job">{member.job}</p>
              <div className="horizontal-line" />
            </div>
            <p className="team-info">
              {member.info}
            </p>
          </div>
        ))}
      </div>
      <div className="team-background" />
    </div>
  );
};

export default Team;
