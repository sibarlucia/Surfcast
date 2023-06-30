import React, { useState, useEffect } from "react";
import styles from "./newsletter.module.css";
import { Link } from "react-router-dom";

const Newsletter3 = () => {
  const gris = styles.opcion;
  const violeta = styles.opcionVioleta;

  const [activo1, setActivo1] = useState(false);
  const [activo2, setActivo2] = useState(false);
  const [activo3, setActivo3] = useState(false);
  const [activo4, setActivo4] = useState(false);
  const [activo5, setActivo5] = useState(false);

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

  useEffect(() => {}, [activo5]);

  return (
    <div className={styles.mainDiv}>
      <form>
        <div className={styles.etapa}>3/5</div>

        <div>
          <h1>¡Aumentemos tus suscripciones</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>¿Qué beneficio se ofrecerá para los suscriptores?</h2>
          <div className={styles.botonera}>
            <button
              type="button"
              className={activo1 ? violeta : gris}
              onClick={handleButtonClick1}
            >
              Información exclusiva
            </button>
            <button
              type="button"
              className={activo2 ? violeta : gris}
              onClick={handleButtonClick2}
            >
              Consejos
            </button>
            <button
              type="button"
              className={activo3 ? violeta : gris}
              onClick={handleButtonClick3}
            >
              Trucos y tips
            </button>
            <button
              type="button"
              className={activo4 ? violeta : gris}
              onClick={handleButtonClick4}
            >
              Promociones exclusivas
            </button>
          </div>

          <div className={styles.botonera}>
            <button
              type="button"
              className={activo5 ? violeta : gris}
              onClick={handleButtonClick5}
            >
              Otro
            </button>

            {activo5 == true && (
              <input
                type="text"
                placeholder="Escribe aquí"
                className={styles.input2}
              ></input>
            )}
          </div>
        </div>

        <Link to="/newsletter/4">
          <button className={styles.botonSiguiente}>Siguiente</button>
        </Link>

        <Link className={styles.volver} to="/newsletter/2">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/newsletter/4">
          <img src="/src/assets/continuardespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Newsletter3;
