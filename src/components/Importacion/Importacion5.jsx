import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./importacion.module.css";
import { ProgressBar } from "../General/ProgressBar";

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

const Importacion5 = () => {
  return (
    <div>
      <form>
        <div className={styles.progressBar__container}>
          <ProgressBar data={progressData} />
        </div>
        <div>
          <h1>¡YA CASI ESTAMOS LISTOS!</h1>
          <p>solo falta conctar tus cuentas para crear la campaña</p>

          <Link to="/importacion/logingmail">
            <button type="button" className={styles.button3}>
              <img src="/src/assets/gmail.png" />
            </button>
          </Link>

          <Link to="/importacion/loginlinkedin">
            <button type="button" className={styles.button3}>
              <img src="/src/assets/linkedin.png" />
            </button>
          </Link>
        </div>

        <Link to="/importacion/5 ">
          <button type="submit" className={styles.programar}>
            Programar
          </button>
        </Link>

        <Link className={styles.volver} to="/perfilamiento/3">
          <img src="/src/assets/volvernegro.png" />
        </Link>
      </form>
    </div>
  );
};

export default Importacion5;
