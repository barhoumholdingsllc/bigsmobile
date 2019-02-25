import React from 'react';
import Button from '@material-ui/core/Button';

const ScheduleDetail = () => (
  <div className="custom-call-to-action-container custom-bg-sub-footer-black custom-color-white">
    <div className="custom-call-to-action-section container">
      <div className="custom-mb-40">
        <h3 className="custom-font-h3">Schedule now!</h3>
      </div>
      <div className="custom-mb-40 molten-leading">
        Let us take care of your car, so you can take care of other things.
      </div>
      <div className="custom-call-to-action-button">
        <a href="https://booking.appointy.com/BigsMobile" target="_blank">
          <Button color="primary" variant="extendedFab">
            schedule a detail
          </Button>
        </a>
      </div>
    </div>
  </div>
);

export default ScheduleDetail;
