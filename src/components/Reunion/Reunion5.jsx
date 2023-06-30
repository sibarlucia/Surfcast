import React from "react";
import styles from "./reunion.module.css";
import { Link } from "react-router-dom";

const Reunion5 = () => {
  return (
    <div className={styles.mainDiv}>
      <form>
        <div className={styles.etapa}>5/6</div>

        <div>
          <h1>¡Concretemos una reunión!</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>¿Cuál es tu valor diferencial?</h2>
          <input
            type="text"
            placeholder="¿Qué necesidad satisface o qué problema soluciona?"
            className={styles.input2}
          ></input>
        </div>

        <Link to="/reunion/6">
          <button className={styles.botonSiguiente}>Siguiente</button>
        </Link>

        <Link className={styles.volver} to="/reunion/4">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/reunion/5">
          <img src="/src/assets/continuardespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Reunion5;
