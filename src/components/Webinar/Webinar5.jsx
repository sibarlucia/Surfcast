import React from "react";
import styles from "./webinar.module.css";
import { Link } from "react-router-dom";

const Webinar5 = () => {
  return (
    <div className={styles.mainDiv}>
      <form>
        <article className={styles.mainArticle}>
          <section className={styles.etapa}>5/6</section>
          <section>
            <h1>¡Concretemos una reunión!</h1>
            <p>Es hora de personalizar tu campaña</p>
          </section>
          <section>
            <h2>¿Cuál es el propósito del evento?</h2>
            <input
              type="text"
              placeholder="¿Qué necesidad satisface o qué problema soluciona?"
              className={styles.input2}
            ></input>
          </section>
          <section>
            <Link to="/webinar/6">
              <button className={styles.botonSiguiente}>Siguiente</button>
            </Link>
          </section>
        </article>

        <Link className={styles.volver} to="/webinar/4">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/webinar/6">
          <img src="/src/assets/continuardespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Webinar5;
