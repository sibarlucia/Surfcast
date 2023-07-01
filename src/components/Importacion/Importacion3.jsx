import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./importacion3.module.css";
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
      progress: 35, // porcentaje de la barra con color
      beginColor: "#E14192",
      // endColor: '#000000' // hace un degradado entre los dos colores si se activa
    },
  },
  {
    node: {
      text: "Últimos ajustes",
      color: "#CECECE",
      active: false,
    },
  },
];

const Importacion3 = () => {
  const { step } = useParams();

  return (
    <div className={styles.mainDiv}>
      <form>
        <div className={styles.progressBar__container}>
          <ProgressBar data={progressData} />
        </div>

        <div>
          <h1>¿Qué quieres lograr con tu campaña?</h1>
          <h2>
            Definamos tus objetivos de prospección y los resultados que quieres
            obtener con tu campaña.
          </h2>
        </div>

        <div>
          <img src="/src/assets/propuesta.png" />
        </div>

        <div>
          <button type="button" className={styles.editar}>
            Editar mis respuestas
          </button>
          <Link to="/importacion/4">
            <button type="submit" className={styles.aceptar}>
              Aceptar estos ejemplos
            </button>
          </Link>
        </div>

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

export default Importacion3;
