import { atom } from "recoil";
import { IEvent } from "../interfaces/IEvent";

export const listOfEventsState = atom<IEvent[]>({
    key: "listOfEventsState",
    default:([
        {
          "description": "Estudar React",
          "start": new Date("2023-11-21T09:00"),
          "end": new Date("2023-11-21T13:00"),
          "complete": false,
          "id": 1642342747
        },
        {
          "description": "Estudar Recoil",
          "start": new Date("2023-11-20T09:00"),
          "end": new Date("2023-11-20T11:00"),
          "complete": false,
          "id": 1642342959
        }
      ])
});
