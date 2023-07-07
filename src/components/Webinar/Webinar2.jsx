import React, { useState } from "react";
import styles from "./webinar.module.css";
import { Link } from "react-router-dom";
import TimePicker from "react-time-picker";
import "react-clock/dist/Clock.css";
import "react-time-picker/dist/TimePicker.css";

const Webinar2 = () => {
  const [hora, setHora] = useState("10:00");

  return (
    <div className={styles.mainDiv}>
      <form>
        <article className={styles.mainArticle}>
          <section className={styles.etapa}>2/6</section>
          <section>
            <h1>¡Invitemos a un webinar!</h1>
            <p>Es hora de personalizar tu campaña</p>
          </section>
          <section>
            <h2>Define el horario en que se desarrollará</h2>
            <select className={styles.selectPaises}>
              <option>Horario de Chile</option>
              <option>Horario de </option>
              <option>Horario de </option>
              <option>Horario de </option>
            </select>
          </section>
          <section className={styles.horarios}>
            <label className={styles.hora}>
              <input type="checkbox"></input>
              Lunes: desde <TimePicker onChange={setHora} value={hora} /> -
              hasta: <TimePicker onChange={setHora} value={hora} />
            </label>
            <label className={styles.hora}>
              <input type="checkbox"></input>
              Martes: desde: <TimePicker onChange={setHora} value={hora} /> -
              hasta: <TimePicker onChange={setHora} value={hora} />
            </label>
            <label className={styles.hora}>
              <input type="checkbox"></input>
              Miércoles: desde: <TimePicker onChange={setHora} value={hora} /> -
              hasta: <TimePicker onChange={setHora} value={hora} />
            </label>
            <label className={styles.hora}>
              <input type="checkbox"></input>
              Jueves: desde: <TimePicker onChange={setHora} value={hora} /> -
              hasta: <TimePicker onChange={setHora} value={hora} />
            </label>
            <label className={styles.hora}>
              <input type="checkbox"></input>
              Viernes: desde: <TimePicker onChange={setHora} value={hora} /> -
              hasta: <TimePicker onChange={setHora} value={hora} />
            </label>
            <label className={styles.hora}>
              <input type="checkbox"></input>
              Sábado: desde: <TimePicker onChange={setHora} value={hora} /> -
              hasta: <TimePicker onChange={setHora} value={hora} />
            </label>
            <label className={styles.hora}>
              <input type="checkbox"></input>
              Domingo: desde: <TimePicker onChange={setHora} value={hora} /> -
              hasta: <TimePicker onChange={setHora} value={hora} />
            </label>
          </section>

          <section>
            <Link to="/webinar/3">
              <button className={styles.botonSiguiente}>Siguiente</button>
            </Link>
          </section>
        </article>

        <Link className={styles.volver} to="/webinar/1">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/webinar/3">
          <img src="/src/assets/continuardespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Webinar2;
