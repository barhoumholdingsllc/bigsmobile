import React from 'react';
import Button from '@material-ui/core/Button';

const CallToAction = () => (
  <div className="custom-call-to-action-container custom-bg-sub-footer-black custom-color-white">
    <div className="custom-call-to-action-section container">
      <div className="custom-mb-40">
        <h3 className="custom-font-h3">We are hiring!</h3>
      </div>
      <div className="custom-mb-40 molten-leading">
        If you’re looking for a full time or part time job, please apply! We are
        always looking for great people to join the team!
      </div>
      <div className="custom-call-to-action-button">
        <a href="https://goo.gl/forms/JhqbslNCUo4EsZ1j2" target="_blank">
          <Button color="primary" variant="extendedFab">
            Apply now!
          </Button>
        </a>
      </div>
    </div>
  </div>
);

export default CallToAction;
