import React from 'react';
import useEventList from '../../state/hooks/useEventList';
import Event from '../Event';
import Filter from '../Filter';
import style from './EventList.module.scss';

const EventList: React.FC = () => {

  const events = useEventList();

  return (<section>
    <Filter />
    <div className={style.Scroll}>
      {events.map(event => (
        <Event event={event} key={event.id} />
      ))}
    </div>
  </section>)
}

export default EventList;