import { useSetRecoilState } from "recoil";
import { IEvent } from "../../interfaces/IEvent";
import { listOfEventsState } from "../atom";
import { getId } from "../../util";

const useAddEvents = () => {
    const setEventList = useSetRecoilState<IEvent[]>(listOfEventsState);
    return (event: IEvent) => {
        const today = new Date();
        if (event.start < today) {
            throw new Error("Eventos não podem ser cadastrados com data menor que a atual");

        }
        event.id = getId();
        return setEventList(listOld => [...listOld, event]);
    }
}

export default useAddEvents;