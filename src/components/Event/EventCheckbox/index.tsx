import React from 'react';
import { IEvent } from '../../../interfaces/IEvent';

const EventCheckbox: React.FC<{ event: IEvent, whenChangeStatus: (id: number) => void }> = ({ event, whenChangeStatus }) => {
  
  const styles = [
    'far',
    'fa-2x',
    event.complete ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={styles.join(' ')} onClick={() => whenChangeStatus(event.id!)}></i>)
}

export default EventCheckbox;