import React from 'react';
import ScheduleDetailButton from '../ScheduleDetailButton';

const ScheduleDetail = () => (
  <div className="custom-call-to-action-container custom-bg-sub-footer-black custom-color-white">
    <div className="custom-call-to-action-section container">
      <h3 className="custom-font-h3">Schedule now!</h3>
      <div className="custom-mb-40 molten-leading">
        Let us take care of your car, so you can take care of other things.
      </div>
      <div className="custom-call-to-action-button w-100">
        <ScheduleDetailButton />
      </div>
    </div>
  </div>
);

export default ScheduleDetail;
