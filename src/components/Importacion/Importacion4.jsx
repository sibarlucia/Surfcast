import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./importacion4y5.module.css";
import { ProgressBar } from "../General/ProgressBar";
import TimePicker from "react-time-picker";
import "react-clock/dist/Clock.css";
import "react-time-picker/dist/TimePicker.css";

const progressData = [
  {
    node: {
      text: "Leads",
      color: "#7D7DFE",
      active: true,
    },
    line: {
      progress: 100, // porcentaje de la barra con color
      beginColor: "#7D7DFE",
      endColor: "#001B8D", // hace un degradado entre los dos colores si se activa
    },
  },
  {
    node: {
      text: "Personalización",
      color: "#001B8D",
      active: true,
    },
    line: {
      progress: 100, // porcentaje de la barra con color
      beginColor: "#001B8D",
      endColor: "#E14192", // hace un degradado entre los dos colores si se activa
    },
  },
  {
    node: {
      text: "Ejemplos",
      color: "#E14192",
      active: true,
    },
    line: {
      progress: 100, // porcentaje de la barra con color
      beginColor: "#E14192",
      endColor: "#9CE5FF", // hace un degradado entre los dos colores si se activa
    },
  },
  {
    node: {
      text: "Últimos ajustes",
      color: "#9CE5FF",
      active: true,
    },
  },
];

const Importacion4 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [hora, setHora] = useState("10:00");

  return (
    <div className={styles.mainDiv}>
      <form>
        <div className={styles.progressBar__container}>
          <ProgressBar data={progressData} />
        </div>

        <article>
          <section>
            <h1>¿Cuándo estará activa tu campaña?</h1>
            <h2>
              Como último paso, sólo queremos saber el horario en el que deseas
              que se mueva la campaña.
            </h2>
            <h2>
              Descuida si no estás muy seguro, más adelante podrás editarlo.
            </h2>
          </section>
          <section>
            
            <select className={styles.selectPaises}>
              <option>Horario de Chile</option>
              <option></option>
              <option></option>
            </select>
          </section>
          <section className={styles.horarios}>
            <label className={styles.hora}>
              <input type="checkbox" className={styles.checkbox}></input>
              Lunes: desde <input type="time" className={styles.time}></input> hasta  <input type="time" className={styles.time}></input>
            </label>
            <label className={styles.hora}>
              <input type="checkbox" className={styles.checkbox}></input>
              Martes: desde <input type="time" className={styles.time}></input>
              hasta <input type="time" className={styles.time}></input>
            </label>
            <label className={styles.hora}>
              <input type="checkbox" className={styles.checkbox}></input>
              Miércoles: desde <input type="time" className={styles.time}></input>
              hasta <input type="time" className={styles.time}></input>
            </label>
            <label className={styles.hora}>
              <input type="checkbox" className={styles.checkbox}></input>
              Jueves: desde <input type="time" className={styles.time}></input>
              hasta <input type="time" className={styles.time}></input>
            </label>
            <label className={styles.hora}>
              <input type="checkbox" className={styles.checkbox}></input>
              Viernes: desde <input type="time" className={styles.time}></input>
              hasta <input type="time" className={styles.time}></input>
            </label>
            <label className={styles.hora}>
              <input type="checkbox" className={styles.checkbox}></input>
              Sábado: desde <input type="time" className={styles.time}></input>
              hasta <input type="time" className={styles.time}></input>
            </label>
            <label className={styles.hora}>
              <input type="checkbox" className={styles.checkbox}></input>
              Domingo: desde <input type="time" className={styles.time}></input>
              hasta <input type="time" className={styles.time}></input>
            </label>
          </section>
          <section>
            <Link to="/importacion/5 ">
              <button type="submit" className={styles.programar}>
                Programar
              </button>
            </Link>
          </section>
        </article>

        <Link className={styles.volver} to="/perfilamiento/3">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/perfilamiento/3">
          <img src="/src/assets/continuardespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Importacion4;
