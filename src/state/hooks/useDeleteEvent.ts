import { useSetRecoilState } from "recoil";
import { IEvent } from "../../interfaces/IEvent";
import { listOfEventsState } from "../atom";

const useDeleteEvent = () => {
  const setEventList = useSetRecoilState<IEvent[]>(listOfEventsState);
  return (event: IEvent) => {

    setEventList((listOld) => [
      ...listOld.filter(evt => event.id !== evt.id)
    ])
  }
}

export default useDeleteEvent;