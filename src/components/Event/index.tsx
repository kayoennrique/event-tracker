import React from 'react';
import { IEvent } from '../../interfaces/IEvent'
import useDeleteEvent from '../../state/hooks/useDeleteEvent';
import style from './Event.module.scss';
import EventCheckbox from './EventCheckbox';

const Event: React.FC<{ event: IEvent }> = ({ event }) => {
  const deleteEvent = useDeleteEvent();

  const styles = [
    style.Event
  ]

  if (event.complete) {
    styles.push(style.complete);
  }

  return (<div className={styles.join(' ')}>

    <EventCheckbox event={event} />
    <div className="cards-info">
      <h3 className={style.description}>{event.description} - {event.start.toLocaleDateString()}</h3>
    </div>
    <i className="far fa-times-circle fa-2x" onClick={() => deleteEvent(event)}></i>
  </div>)
}

export default Event;