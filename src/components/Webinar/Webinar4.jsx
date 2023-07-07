import React from "react";
import styles from "./webinar.module.css";
import { Link } from "react-router-dom";

const Webinar4 = () => {
  return (
    <div className={styles.mainDiv}>
      <form>
        <article className={styles.mainArticle}>
          <section className={styles.etapa}>4/6</section>
          <section>
            <h1>¡Concretemos una reunión!</h1>
            <p>Es hora de personalizar tu campaña</p>
          </section>
          <section>
            <h2>3 Beneficios que recibirán si asisten</h2>
            <input
              type="text"
              placeholder="1."
              className={styles.input3}
            ></input>
            <input
              type="text"
              placeholder="2."
              className={styles.input3}
            ></input>
            <input
              type="text"
              placeholder="3."
              className={styles.input3}
            ></input>
          </section>
          <section>
            <Link to="/webinar/5">
              <button className={styles.botonSiguiente}>Siguiente</button>
            </Link>
          </section>
        </article>

        <Link className={styles.volver} to="/webinar/3">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/webinar/5">
          <img src="/src/assets/continuardespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Webinar4;
