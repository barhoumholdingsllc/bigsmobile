import React from 'react';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import Fab from '@material-ui/core/Fab';

const CallToActionButton = () => (
  <div className="custom-call-to-action-button-fixed">
    <a href="https://booking.appointy.com/BigsMobile" target="_blank">
      <Fab variant="extended" size="large" color="primary" aria-label="Add">
        <CalendarIcon className="mr-2" />
        schedule a detail
      </Fab>
    </a>
  </div>
);

export default CallToActionButton;
