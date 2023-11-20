import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  IEventFilter, IFilterStatus
} from "../../interfaces/IEventFilter";
import { eventFilter } from "../../state/atom";
import style from "./Filter.module.scss";

const Filter: React.FC = () => {
  const [data, setData] = useState("");
  const [status, setStatus] = useState<IFilterStatus>("Ambos");

  const setEventfilter = useSetRecoilState(eventFilter);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filter: IEventFilter = {
      status,
    };
    data ? (filter.data = new Date(data)) : (filter.data = null);

    setEventfilter(filter);
  };

  const optionsFilter = ["Ambos", "Completos", "Incompletos"];

  return (
    <form className={style.Filter} onSubmit={submitForm}>
      <h3 className={style.title}>Filtros</h3>
      <label htmlFor="data">Por data</label>
      <input
        type="date"
        name="data"
        className={style.input}
        onChange={(evento) => setData(evento.target.value)}
        placeholder="Por data"
        value={data}
      />
      <label htmlFor="status">Por status</label>
      <select
        name="status"
        id="filter-status"
        className={style.input}
        onChange={(event) => setStatus(event.target.value as IFilterStatus)}
      >
        {optionsFilter.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button className={style.button}>Filtrar</button>
    </form>
  );
};

export default Filter;
