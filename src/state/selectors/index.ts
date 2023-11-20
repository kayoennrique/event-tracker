import { selector } from "recoil";
import { IEvent } from "../../interfaces/IEvent";
import { listOfEventsState, eventFilter } from "../atom";

export const eventsFilteredState = selector<IEvent[]>({
  key: "eventsFilteredState",
  get: ({ get }) => {
    const allEvents = get(listOfEventsState);
    const filter = get(eventFilter);

    const events = allEvents.filter((evt) => {
      if (filter.data) {
        const sameDay = filter.data.toISOString().slice(0, 10) === evt.start.toISOString().slice(0, 10);

        return filter.status !== "Ambos"
          ? filter.status === "Completos"
            ? sameDay && evt.complete
            : sameDay && !evt.complete
          : sameDay;
      }

      if (filter.status === "Completos") return evt.complete;

      if (filter.status === "Incompletos") return !evt.complete;

      return true;
    });

    return events;
  },
});

export const eventAsync = selector({
  key: 'eventAsync',
  get: async () => {
    const responseHttp = await fetch('http://localhost:8080/eventos');
    const eventsJson: IEvent[] = await responseHttp.json();
    return eventsJson.map(event => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end)
    }));
  }
});
