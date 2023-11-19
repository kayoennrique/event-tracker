import React from 'react';
import { IEvent } from '../../interfaces/IEvent';
import style from './Event.module.scss';
import EventCheckbox from './EventCheckbox';

const Event: React.FC<{ event: IEvent, whenChangeStatus: (id: number) => void, whenDeleteEvent: (id: number) => void }> = ({ event, whenChangeStatus, whenDeleteEvent }) => {
  
  const styles = [
    style.Event
  ]

  if (event.complete) {
    styles.push(style.complete)
  }

  return (<div className={styles.join(' ')}>

    <EventCheckbox event={event} whenChangeStatus={whenChangeStatus}/>
    <div className="cards-info">
      <h3 className={style.description}>{event.description} - {event.start.toLocaleDateString()}</h3>
    </div>
    <i className="far fa-times-circle fa-2x" onClick={() => whenDeleteEvent(event.id!)}></i>
  </div>)
}

export default Event;