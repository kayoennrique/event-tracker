import { useSetRecoilState } from "recoil";
import { IEvent } from "../../interfaces/IEvent";
import { listOfEventsState } from "../atom";

const useUpdateEvent = () => {
  const setEventList = useSetRecoilState<IEvent[]>(listOfEventsState)
  return (event: IEvent) => {
    return setEventList(listOld => {
      const manifestation = listOld.findIndex(evt => evt.id === event.id)
      return [...listOld.slice(0, manifestation), event, ...listOld.slice(manifestation + 1)]
    })
  }
}

export default useUpdateEvent;