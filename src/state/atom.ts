import { atom } from "recoil";
import { IEvent } from "../interfaces/IEvent";
import { IEventFilter } from "../interfaces/IEventFilter";

export const listOfEventsState = atom<IEvent[]>({
  key: 'listOfEventsState',
  default: [{
    "description": "Estudar React",
    "start": new Date("2023-11-21T09:00"),
    "end": new Date("2023-11-21T13:00"),
    "complete": false,
    "id": 1642342747
  },
  {
    "description": "Estudar Recoil",
    "start": new Date("2023-11-22T09:00"),
    "end": new Date("2023-11-22T11:00"),
    "complete": false,
    "id": 1642342959
  }]
})

export const eventFilter = atom<IEventFilter>({
  key: 'eventFilter',
  default: {}
})