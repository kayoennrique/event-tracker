import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IEventFilter } from '../../interfaces/IEventFilter';
import { eventFilter } from '../../state/atom';
import style from './Filter.module.scss';

const Filter: React.FC = () => {
  
  const [data, setData] = useState('')
  const setEventFilter = useSetRecoilState<IEventFilter>(eventFilter)
  
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const filter: IEventFilter = {}
    if (data) {
      filter.data = new Date(data);
    } else {
      filter.data = null
    }
    setEventFilter(filter);    
  }

  return (<form className={style.Filter} onSubmit={submitForm}>
    <h3 className={style.title}>Filtrar por data</h3>
    <input 
      type="date" 
      name="data"
      className={style.input}
      onChange={event => setData(event.target.value)} 
      placeholder="Por data"
      value={data} />

    <button className={style.button}>
      Filtrar
    </button>

  </form>)
}

export default Filter;