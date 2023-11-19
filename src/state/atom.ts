import { atom } from "recoil";
import { IEvent } from "../interfaces/IEvent";

export const listOfEventsState = atom<IEvent[]>({
    key: "listOfEventsState",
    default:([
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
});
