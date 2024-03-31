import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../css/Plan.css';

const Plan = () => {
  const plans = [
    {
      planName: 'Basic', planDescription: 'A person who charges a fee in order', planPrice: 120, planDetails: ['24 Projects', 'Real-time reporting', 'Chat Support'],
    },
    {
      planName: 'Premium', planDescription: 'A person who charges a fee in order', planPrice: 300, planDetails: ['45 Projects', 'Real-time reporting', 'Chat Support'],
    },
    {
      planName: 'Enterprise', planDescription: 'A person who charges a fee in order', planPrice: 500, planDetails: ['Unlimited Projects', 'Real-time reporting', 'Chat Support'],
    },
  ];

  return (
    <div className="plans-page">
      <div className="purple-circle" />
      <div className="plan-content">
        <h2 className="plan-title">Plans & Pricing</h2>
        <p className="plan-description">Presentations are communication tools that can be used as lectures, speeches, reports, and more.</p>
      </div>
      <div className="plan-cards">
        {plans.map((plan) => (
          <div className="plan-card" key={plan.planName}>
            <div className="plan-card-title">
              <h3>{plan.planName}</h3>
              <p>{plan.planDescription}</p>
            </div>
            <h4 className="planPrice">
              $
              {plan.planPrice}
              <span>/Year</span>
            </h4>
            <ul className="plan-details-list">
              {plan.planDetails.map((detail) => (
                <li key={detail}>
                  <FontAwesomeIcon icon={faCheck} />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="purple-circle2" />
    </div>
  );
};

export default Plan;
