import React, { useState } from 'react';
import { Scheduler } from '@aldabil/react-scheduler';
// import fi from 'date-fns/locale/fi';
import bookingService from '../services/booking';

const Calendar = () => {
  const [loading, setLoading] = useState(false);
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

  const confirmEditBooking = (event) => {
    console.log(event);
  };

  const confirmBooking = async (event, action) => {
    console.log(action);
    if (action === 'create') {
      console.log('inside');
      try {
        setLoading(true);
        const response = await bookingService.create(event);
        console.log('response in calender', response);
        if (response) setLoading(false);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      confirmEditBooking(event);
    }
  };

  return (
    <Scheduler
      day={day}
      week={week}
      month={month}
      view="week"
      loading={loading}
      // locale={fi}
      onConfirm={confirmBooking}
      events={[
        {
          event_id: 1,
          title: 'Event 1',
          start: new Date('2021 9 2 09:30'),
          end: new Date('2021 9 2 10:30'),
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
