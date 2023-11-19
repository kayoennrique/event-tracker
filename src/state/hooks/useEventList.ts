import { useRecoilValue } from "recoil";
import { listOfEventsState } from "../atom";

const useEventList = () => {
    return useRecoilValue(listOfEventsState);
}

export default useEventList;