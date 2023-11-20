import { useRecoilValue } from "recoil"
import { eventsFilteredState } from "../selectors"

const useEventList = () => {
  return useRecoilValue(eventsFilteredState)
}

export default useEventList;