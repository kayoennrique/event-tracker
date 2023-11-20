import { atom } from "recoil";
import { IEvent } from "../interfaces/IEvent";
import { IEventFilter } from "../interfaces/IEventFilter";
import { eventAsync } from "./selectors";

export const listOfEventsState = atom<IEvent[]>({
  key: 'listOfEventsState',
  default: eventAsync
})

export const eventFilter = atom<IEventFilter>({
  key: 'eventFilter',
  default: {
    data: null,
    status: "Ambos",
  },
});