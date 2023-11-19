import React, { useState } from 'react';
import style from './App.module.scss';
import Card from './components/Card';
import Form from './components/Form';
import { IEvent } from './interfaces/IEvent';
import Calendar from './components/Calendar';
import EventList from './components/EventList';

function App() {

  const [events, setEvents] = useState<IEvent[]>([
    {
        "description": "Estudar React",
        "start": new Date("2022-01-15T09:00"),
        "end": new Date("2022-01-15T13:00"),
        "complete": false,
        "id": 1642342747
    },
    {
        "description": "Estudar Recoil",
        "start": new Date("2022-01-16T09:00"),
        "end": new Date("2022-01-16T11:00"),
        "complete": false,
        "id": 1642342959
    }
])


  const [filter, setFilter] = useState<Date | null>()

  const addEvent = (event: IEvent) => {
    event.id = Math.round((new Date()).getTime() / 1000)
    events.push(event)
    console.log(events);
    
    setEvents([...events])
  }
  const changeStatusEvent = (id: number) => {
    const event = events.find(event => event.id === id)
    if (event) {
      event.complete = !event.complete
    }
    setEvents([...events])
  }
  const deleteEvent = (id: number) => {
    setEvents([...events.filter(event => event.id !== id)])
  }

  const applyFilter = (data: Date | null) => {
    setFilter(data)
  }

  const filtered = !filter
    ? events
    : events.filter((event) =>
      filter!.toISOString().slice(0, 10) === event.start.toISOString().slice(0, 10)
    );

  return (
    <div className={style.App}>
      <div className={style.Column}>
        <Card>
          <Form toSave={addEvent} />
        </Card>
        <hr />
        <Card>
          <EventList toFilterApplied={applyFilter} whenChangeStatus={changeStatusEvent} whenDeleteEvent={deleteEvent} events={filtered} />
        </Card>
      </div>
      <div className={style.Column}>
        <Calendar events={events} />
      </div>
    </div>
  );
}

export default App;
