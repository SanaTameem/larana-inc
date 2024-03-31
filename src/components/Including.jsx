import React from 'react';
import '../css/Including.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase, faMessage, faFile, faArrowUpRightDots, faHandHoldingDollar, faMedal,
} from '@fortawesome/free-solid-svg-icons';

const Including = () => (
  <div className="includings-page">
    <div className="including-titles">
      <h2>What&apos;s Included</h2>
      <p>
        Presentations are communication tools that can be used
        as lectures, speeches, reports, and more.
      </p>
    </div>
    <div className="including-list">
      <div className="including-card">
        <FontAwesomeIcon icon={faMessage} />
        <h4>Chat and messaging</h4>
        <p>Presentations are communication tools that can be used as lectures.</p>
      </div>
      <div className="including-card">
        <FontAwesomeIcon icon={faFile} />
        <h4>Document generation</h4>
        <p>Presentations are communication tools that can be used as lectures.</p>
      </div>
      <div className="including-card">
        <FontAwesomeIcon icon={faArrowUpRightDots} />
        <h4>Fast Process</h4>
        <p>Presentations are communication tools that can be used as lectures.</p>
      </div>
      <div className="including-card">
        <FontAwesomeIcon icon={faDatabase} />
        <h4>Data processing</h4>
        <p>Presentations are communication tools that can be used as lectures.</p>
      </div>
      <div className="including-card">
        <FontAwesomeIcon icon={faHandHoldingDollar} />
        <h4>Budgeting & scheduling</h4>
        <p>Presentations are communication tools that can be used as lectures.</p>
      </div>
      <div className="including-card">
        <FontAwesomeIcon icon={faMedal} />
        <h4>BGood quality website</h4>
        <p>Presentations are communication tools that can be used as lectures.</p>
      </div>
    </div>
  </div>
);

export default Including;
