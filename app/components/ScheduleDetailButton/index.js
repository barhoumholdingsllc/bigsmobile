import React from 'react';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import Fab from '@material-ui/core/Fab';

const ScheduleDetailButton = () => (
  <a href="https://booking.appointy.com/BigsMobile" target="_blank">
    <Fab variant="extended" color="primary" aria-label="Add">
      <CalendarIcon className="mr-2" />
      schedule a detail
    </Fab>
  </a>
);

export default ScheduleDetailButton;
