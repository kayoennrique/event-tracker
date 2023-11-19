import React from 'react';
import { IEvent } from '../../interfaces/IEvent';
import style from './Event.module.scss';
import EventCheckbox from './EventCheckbox';
import { useSetRecoilState } from 'recoil';
import { listOfEventsState } from '../../state/atom';

const Event: React.FC<{ event: IEvent}> = ({ event }) => {

  const setEventList = useSetRecoilState<IEvent[]>(listOfEventsState);
  
  const deleteEvent = () =>{
    setEventList(listOld => listOld.filter(evt => evt.id !== event.id))
  }

  const styles = [
    style.Event
  ]

  if (event.complete) {
    styles.push(style.complete)
  }

  return (<div className={styles.join(' ')}>

    <EventCheckbox event={event} />
    <div className="cards-info">
      <h3 className={style.description}>{event.description} - {event.start.toLocaleDateString()}</h3>
    </div>
    <i className="far fa-times-circle fa-2x" onClick={deleteEvent}></i>
  </div>)
}

export default Event;