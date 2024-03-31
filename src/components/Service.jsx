import React from 'react';
import '../css/Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop, faServer, faDatabase, faCloud,
} from '@fortawesome/free-solid-svg-icons';
import Projects from './Projects';
import Including from './Including';

const Service = () => {
  const services = [
    { serviceName: 'Frontend Development', serviceDescription: 'Presentations are communication tools that can be used.', serviceLogo: faDesktop },
    { serviceName: 'Backend Development', serviceDescription: 'Presentations are communication tools that can be used.', serviceLogo: faServer },
    { serviceName: 'Databases & Data Science', serviceDescription: 'Presentations are communication tools that can be used.', serviceLogo: faDatabase },
    { serviceName: 'Servers & Cloud Infrastructure', serviceDescription: 'Presentations are communication tools that can be used.', serviceLogo: faCloud },
  ];
  return (
    <>
      <div className="services-page">
        <div className="service-content">
          <p className="service-small-title">SERVICES</p>
          <h2 className="service-big-title">Our amazing services</h2>
          <p className="service-para">Presentations are communication tools that can be used as lectures, speeches, reports, and more. It all depends on the purpose.</p>
          <div className="services-list">
            {services.map((service) => (

              <div className="service-card" key={service.name}>
                <FontAwesomeIcon icon={service.serviceLogo} />
                <h3 className="service-name">{service.serviceName}</h3>
                <p className="service-description">{service.serviceDescription}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="services-img">
          <img src={`${process.env.PUBLIC_URL}/assets/service-img.jpg`} alt="" />
        </div>
        <div className="services-cover-div" />
      </div>
      <Projects />
      <Including />
    </>
  );
};

export default Service;
