import React, { useState } from 'react';
import style from './Filter.module.scss';

const Filter: React.FC<{ toFilterApplied: (data: Date | null) => void }> = ({ toFilterApplied }) => {
  
  const [data, setData] = useState('');
  
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!data) {
      toFilterApplied(null)
      return
    }
    toFilterApplied(new Date(data))
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