
import React from 'react';
import { IEvent } from '../../interfaces/IEvent';
import style from './Calendar.module.scss';
import ptBR from './location/ptBR.json'
import Kalend, { CalendarView } from 'kalend';
import 'kalend/dist/styles/index.css';

interface IKalendEvent {
  id?: number
  startAt: string
  endAt: string
  summary: string
  color: string
}

const Calendar: React.FC<{ events: IEvent[] }> = ({ events }) => {

  const eventsKalend = new Map<string, IKalendEvent[]>();

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
    })
  })
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
      />
    </div>
  );
}

export default Calendar;