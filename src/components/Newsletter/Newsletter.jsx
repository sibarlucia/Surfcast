import React from "react";
import styles from "./newsletter.module.css";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className={styles.mainDiv}>
      <form>
        <div className={styles.etapa}>1/5</div>

        <div>
          <h1>¡Aumentemos tus suscripciones!</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>¿De qué tratará tu newsletter?</h2>
          <input
            type="text"
            placeholder="¿De qué rubro, tema, etc?"
            className={styles.input2}
          ></input>
        </div>
        <Link to="/newsletter/2">
          <button className={styles.botonSiguiente}>Siguiente</button>
        </Link>

        <Link className={styles.volver} to="/importacion/2">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/newsletter/2">
          <img src="/src/assets/continuardespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Newsletter;
