
import React from 'react';
import style from './Calendar.module.scss';
import ptBR from './location/ptBR.json';
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import 'kalend/dist/styles/index.css';
import useUpdateEvent from '../../state/hooks/useUpdateEvent';
import useEventList from '../../state/hooks/useEventList';

interface IKalendEvent {
  id?: number
  startAt: string
  endAt: string
  summary: string
  color: string
}

const Calendar: React.FC = () => {

  const eventsKalend = new Map<string, IKalendEvent[]>();
  const events = useEventList();
  const updateEvent = useUpdateEvent();

  events.forEach(event => {
    const key = event.start.toISOString().slice(0, 10)
    if (!eventsKalend.has(key)) {
      eventsKalend.set(key, [])
    }
    eventsKalend.get(key)?.push({
      id: event.id,
      startAt: event.start.toISOString(),
      endAt: event.end.toISOString(),
      summary: event.description,
      color: 'blue'
    });
  });

  const onEventDragFinish: OnEventDragFinish = (
    kalendEventUnchanged: CalendarEvent,
    kalendEventUpdated: CalendarEvent
  ) => {
    const event = events.find(event => event.description === kalendEventUpdated.summary)
    if (event) {
      const eventUpdated = {
        ...event
      }
      eventUpdated.start = new Date(kalendEventUpdated.startAt)
      eventUpdated.end = new Date(kalendEventUpdated.endAt)
      updateEvent(eventUpdated)
    }

  }

  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventsKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
}

export default Calendar;