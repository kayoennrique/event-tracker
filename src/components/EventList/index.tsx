import React from 'react';
import { useRecoilValue } from 'recoil';
import { listOfEventsState } from '../../state/atom';
import Event from '../Event';
import Filter from '../Filter';
import style from './EventList.module.scss';


const EventList: React.FC<{
  whenChangeStatus: (id: number) => void,
  whenDeleteEvent: (id: number) => void,
  toFilterApplied: (data: Date | null) => void
}> = ({ whenDeleteEvent, whenChangeStatus, toFilterApplied }) => {

  const events = useRecoilValue(listOfEventsState);

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