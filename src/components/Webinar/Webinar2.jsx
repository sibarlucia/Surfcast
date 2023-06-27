import React, { useState } from "react";
import styles from "./webinar.module.css";
import { Link } from "react-router-dom";
import TimePicker from 'react-time-picker'

const Webinar2 = () => {

  const [hora, setHora] = useState('10:00')

  return (
    <div>
      <form>
        <div className={styles.etapa}>2/6</div>

        <div>
          <h1>¡Invitemos a un webinar!</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>Define el horario en que se desarrollará</h2>
          <select className={styles.selectPaises}>
            <option>Horario de Chile</option>
            <option>Horario de </option>
            <option>Horario de </option>
            <option>Horario de </option>
          </select>

          <div className={styles.dias}>
            <label>
              <input type="checkbox"></input>
              Lunes <TimePicker onChange={setHora} value={hora} />
            </label>
            <label>
              <input type="checkbox"></input>
              Martes <TimePicker onChange={setHora} value={hora}/>
            </label>
            <label>
              <input type="checkbox"></input>
              Miércoles <TimePicker onChange={setHora} value={hora}/>
            </label>
            <label>
              <input type="checkbox"></input>
              Jueves <TimePicker onChange={setHora} value={hora}/>
            </label>
            <label>
              <input type="checkbox"></input>
              Viernes <TimePicker onChange={setHora} value={hora}/>
            </label>
            <label>
              <input type="checkbox"></input>
              Sábado <TimePicker onChange={setHora} value={hora}/>
            </label>
            <label>
              <input type="checkbox"></input>
              Domingo <TimePicker onChange={setHora} value={hora}/>
            </label>
          </div>

          <div className={styles.horarios}>
            <select>
              <option>Desde</option>
            </select>

            <select>
              <option>Hasta</option>
            </select>
          </div>
        </div>

        <Link to="/webinar/3">
          <button className={styles.botonSiguiente}>Siguiente</button>
        </Link>
      </form>
    </div>
  );
};

export default Webinar2;
