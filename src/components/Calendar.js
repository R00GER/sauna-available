import React from 'react';
import { Scheduler } from '@aldabil/react-scheduler';

const Calendar = () => {
  const day = {
    startHour: 6,
    endHour: 21,
    step: 60,
  };

  const week = {
    weekDays: [0, 1, 2, 3, 4, 5, 6],
    weekStartOn: 1,
    startHour: 6,
    endHour: 21,
    step: 60,
  };

  const month = {
    weekDays: [0, 1, 2, 3, 4, 5, 6],
    weekStartOn: 1,
    startHour: 6,
    endHour: 21,
  };

  return (
    <Scheduler
      day={day}
      week={week}
      month={month}
      view="week"
      events={[
        {
          event_id: 1,
          title: 'Event 1',
          start: new Date('2021 5 2 09:30'),
          end: new Date('2021 5 2 10:30'),
        },
        {
          event_id: 2,
          title: 'Event 2',
          start: new Date('2021 5 4 10:00'),
          end: new Date('2021 5 4 11:00'),
        },
      ]}
    />
  );
};

export default Calendar;
