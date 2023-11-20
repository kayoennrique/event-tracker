import { selector } from "recoil";
import { eventFilter, listOfEventsState } from "../atom";

export const eventsFilteredState = selector({
  key: 'eventsFilteredState',
  get: ({ get }) => {
    const filter = get(eventFilter)
    const allEvents = get(listOfEventsState)
    const events = allEvents.filter(event => {
      if (!filter.data) {
        return true
      }
      const sameDay = filter.data.toISOString().slice(0, 10) === event.start.toISOString().slice(0, 10)
      return sameDay
    })
    return events
  }
});