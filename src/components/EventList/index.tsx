import React from 'react';
import { IEvent } from '../../interfaces/IEvent';
import Event from '../Event';
import Filter from '../Filter';
import style from './EventList.module.scss';

const EventList: React.FC<{ 
  events: IEvent[], 
  whenChangeStatus: (id: number) => void, 
  whenDeleteEvent: (id: number) => void, 
  toFilterApplied: (data: Date | null) => void }> = ({ events, whenDeleteEvent, whenChangeStatus, toFilterApplied }) => {

  return (<section>
    <Filter toFilterApplied={toFilterApplied} />
    <div className={style.Scroll}>
      {events.map(event => (
        <Event whenChangeStatus={whenChangeStatus} whenDeleteEvent={whenDeleteEvent} event={event} key={event.id} />
      ))}
    </div>
  </section>)
}

export default EventList;