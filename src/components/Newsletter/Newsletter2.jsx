import React, { useEffect, useState } from "react";
import styles from "./newsletter.module.css";
import { Link } from "react-router-dom";

const Newsletter2 = () => {
  const gris = styles.dia;
  const violeta = styles.diaVioleta;

  const [activo1, setActivo1] = useState(false);
  const [activo2, setActivo2] = useState(false);
  const [activo3, setActivo3] = useState(false);
  const [activo4, setActivo4] = useState(false);
  const [activo5, setActivo5] = useState(false);
  const [activo6, setActivo6] = useState(false);
  const [activo7, setActivo7] = useState(false);

  const handleButtonClick1 = () => {
    setActivo1(!activo1);
  };
  const handleButtonClick2 = () => {
    setActivo2(!activo2);
  };
  const handleButtonClick3 = () => {
    setActivo3(!activo3);
  };
  const handleButtonClick4 = () => {
    setActivo4(!activo4);
  };
  const handleButtonClick5 = () => {
    setActivo5(!activo5);
  };
  const handleButtonClick6 = () => {
    setActivo6(!activo6);
  };
  const handleButtonClick7 = () => {
    setActivo7(!activo7);
  };

  

  return (
    <div className={styles.mainDiv}>
      <form>
        <div className={styles.etapa}>2/5</div>

        <div>
          <h1>¡Aumentemos tus suscripciones!</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>¿Con qué frecuencia se publicará?</h2>

          <div className={styles.dias}>
            <button
              type="button"
              className={activo1 ? violeta : gris}
              onClick={handleButtonClick1}
            >
              DOM
            </button>
            <button
              type="button"
              className={activo2 ? violeta : gris}
              onClick={handleButtonClick2}
            >
              LUN
            </button>
            <button
              type="button"
              className={activo3 ? violeta : gris}
              onClick={handleButtonClick3}
            >
              MAR
            </button>
            <button
              type="button"
              className={activo4 ? violeta : gris}
              onClick={handleButtonClick4}
            >
              MIER
            </button>
            <button
              type="button"
              className={activo5 ? violeta : gris}
              onClick={handleButtonClick5}
            >
              JUE
            </button>
            <button
              type="button"
              className={activo6 ? violeta : gris}
              onClick={handleButtonClick6}
            >
              VIER
            </button>
            <button
              type="button"
              className={activo7 ? violeta : gris}
              onClick={handleButtonClick7}
            >
              SAB
            </button>
          </div>
        </div>

        <Link to="/newsletter/3">
          <button className={styles.botonSiguiente}>Siguiente</button>
        </Link>

        <Link className={styles.volver} to="/newsletter/1">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/newsletter/3">
          <img src="/src/assets/continuardespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Newsletter2;
