import React from 'react';
import { useRecoilValue } from 'recoil';
import { listOfEventsState } from '../../state/atom';
import Event from '../Event';
import Filter from '../Filter';
import style from './EventList.module.scss';

const EventList: React.FC<{ toFilterApplied: (data: Date | null) => void }> = ({ toFilterApplied }) => {

  const events = useRecoilValue(listOfEventsState);

  return (<section>
    <Filter toFilterApplied={toFilterApplied} />
    <div className={style.Scroll}>
      {events.map(event => (
        <Event event={event} key={event.id} />
      ))}
    </div>
  </section>)
}

export default EventList;