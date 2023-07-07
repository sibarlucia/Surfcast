import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./perfilamiento.module.css";

const perfilamiento6 = () => {
  const { step } = useParams();
  return (
    <div className={styles.mainDiv}>
      <form className={styles.formPerfilamiento}>
        <article className={styles.mainArticle}>
          <section>
            <h1>¡EMPECEMOS TU PRIMERA CAMPAÑA!</h1>
            <h2>Si aún no estás seguro puedes crearla después</h2>
          </section>
          <section></section>
          <section id={styles.botones}>
            <Link to="/">
              <button className={styles.botonClarito}>
                Dejarlo para después
              </button>
            </Link>

            <Link to="/importacion/1">
              <button className={styles.button2}>Crear ahora</button>
            </Link>

            <Link className={styles.volver} to="/perfilamiento/4">
              <img src="/src/assets/volverblanco.png" />
            </Link>
          </section>
        </article>
      </form>
    </div>
  );
};

export default perfilamiento6;
