import React, { useEffect, useState } from 'react';
import { Scheduler } from '@aldabil/react-scheduler';
import fi from 'date-fns/locale/fi';
import { parseISO } from 'date-fns';
import bookingService from '../services/booking';

// {
//   event_id: '1',
//   title: 'Event 1',
//   start: new Date('2021 9 2 09:30'),
//   end: new Date('2021 9 2 10:30'),
// },
// {
//   event_id: '2',
//   title: 'Event 2',
//   start: new Date('2021 5 4 10:00'),
//   end: new Date('2021 5 4 11:00'),
// },

const Calendar = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const getInitialReservations = async () => {
      const response = await bookingService.getAll();
      console.log(response);

      const preparedResponse = response.map((item) => ({
        ...item,
        start: parseISO(item.start),
        end: parseISO(item.end),
      }));

      setAllEvents([...preparedResponse]);
    };
    getInitialReservations();
  }, []);

  console.log('AllEvents app', allEvents);

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

  console.log(loading);
  const confirmBooking = async (event, action) => {
    if (action === 'create') {
      try {
        setLoading(true);

        const eventWithUserInfo = {
          ...event,
          apartment: user.apartment,
        };

        const response = await bookingService.create(eventWithUserInfo);
        console.log('response', response);
        console.log('AllEvents before', allEvents);
        const formattedEvent = {
          ...response,
          start: parseISO(response.start),
          end: parseISO(response.end),
        };
        console.log('AllEvents', allEvents);
        setAllEvents([...allEvents, formattedEvent]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      confirmEditBooking(event);
    }
  };

  // console.log(events);

  return (
    <Scheduler
      day={day}
      week={week}
      month={month}
      view="week"
      loading={loading}
      locale={fi}
      onConfirm={confirmBooking}
      events={allEvents}
    />
  );
};

export default Calendar;
