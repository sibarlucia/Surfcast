import React from "react";
import styles from "./reunion.module.css";
import { Link } from "react-router-dom";

const Reunion2 = () => {
  return (
    <div>
      <form>
        <div className={styles.etapa}>2/6</div>

        <div>
          <h1>¡Concretemos una reunión!</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>Deja el link de tu agenda para que conozcan tu disponibilidad</h2>
          <input
            type="text"
            placeholder="https://workspace.com/webinar/"
            className={styles.input}
          ></input>
        </div>

        <Link to="/reunion/3">
          <button className={styles.botonSiguiente}>Siguiente</button>
        </Link>

        <Link className={styles.volver} to="/reunion/1">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/reunion/3">
          <img src="/src/assets/crearcampañadespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Reunion2;
