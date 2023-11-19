import React, { useState } from 'react';
import { IEvent } from '../../interfaces/IEvent';
import style from './Form.module.scss';

const Form: React.FC<{ toSave: (event: IEvent) => void }> = ({ toSave }) => {
  const [description, setDescription] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [timeEnd, setTimeEnd] = useState('');

  const mountDate = (date:string, hour: string) => {
    const dateString = date.slice(0, 10)
    return new Date(`${dateString}T${hour}`)
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    toSave({
      description,
      start: mountDate(dateStart, startTime),
      end: mountDate(endDate, timeEnd),
      complete: false
    })
    setDescription('')
    setDateStart('')
    setStartTime('')
    setEndDate('')
    setTimeEnd('')
  }
  return (<form className={style.Form} onSubmit={submitForm}>
    <h3 className={style.title}>Novo evento</h3>

    <label>Descrição</label>
    <input 
      type="text" 
      name="description"
      id="description"
      className={style.input}
      onChange={event => setDescription(event.target.value)} 
      placeholder="Descrição" value={description} 
      autoComplete="off"
      required />

      <label>Data de início</label>
      <div className={style.inputContainer}>
        <input 
          type="date" 
          name="dateStart"
          className={style.input}
          onChange={event => setDateStart(event.target.value)} 
          value={dateStart}
          required />
        <input 
          type="time" 
          name="startTime"
          className={style.input}
          onChange={event => setStartTime(event.target.value)} 
          value={startTime}
          required />
      </div>

      <label>Data de término</label>
      <div className={style.inputContainer}>
        <input 
          type="date" 
          name="endDate"
          className={style.input}
          onChange={event => setEndDate(event.target.value)} 
          value={endDate}
          required />
        <input 
          type="time" 
          name="timeEnd"
          className={style.input}
          onChange={event => setTimeEnd(event.target.value)} 
          value={timeEnd}
          required />
      </div>

    <button className={style.button}>
      Salvar
    </button>

  </form>)
}

export default Form;