import React from 'react';
import { IEvent } from '../../../interfaces/IEvent';
import useUpdateEvent from '../../../state/hooks/useUpdateEvent';

const EventCheckbox: React.FC<{ event: IEvent }> = ({ event }) => {

  const updateEvent = useUpdateEvent();

  const changeStatus = () => {
    const eventChanged = {
      ...event
    }
    eventChanged.complete = !eventChanged.complete
    updateEvent(eventChanged)
  }

  const styles = [
    'far',
    'fa-2x',
    event.complete ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={styles.join(' ')} onClick={changeStatus}></i>)
}

export default EventCheckbox;