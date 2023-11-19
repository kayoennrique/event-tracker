import React from 'react';
import Event from '../Event';
import Filter from '../Filter';
import style from './EventList.module.scss';
import useEventList from '../../state/hooks/useEventList';

const EventList: React.FC<{ toFilterApplied: (data: Date | null) => void }> = ({ toFilterApplied }) => {

  const events = useEventList();

  return (<section>
    <Filter toFilterApplied={toFilterApplied} />
    <div className={style.Scroll}>
      {events.map(event => (
        <Event event={event} key={event.id} />
      ))}
    </div>
  </section>);  
}

export default EventList;