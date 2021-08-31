import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const events = [
  {
    start: moment().toDate(),
    end: moment().add(1, 'days').toDate(),
    title: 'Some title',
  },
];

const CalendarView = () => (
  <div>
    {/* <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      views={['week']}
      defaultView={Views.WEEK}
      style={{ height: 500 }}
    /> */}
  </div>
);

export default CalendarView;
