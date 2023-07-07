import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./perfilamiento.module.css";

const perfilamiento4 = () => {
  const { step } = useParams();

  const [opcion, setOpcion] = useState("");

  const handleCambioOpcion = (event) => {
    setOpcion(event.target.value);
  };
  console.log(opcion);

  const nombre = localStorage.nombre;

  return (
    <div className={styles.mainDiv}>
      <form className={styles.formPerfilamiento}>
        <article className={styles.mainArticle}>
          <section>
            <p>¡{nombre}, cuéntanos un poco sobre tí!</p>
            <h2>¿Cuál es tu rol en esta empresa?</h2>
          </section>
          <section>
            <select value={opcion} onChange={handleCambioOpcion}>
              <option value="">Elige una opción</option>
              <option value="opcion1">Ejecutivo</option>
              <option value="opcion2">Gerencia</option>
              <option value="opcion3">Administración</option>
              <option value="opcion4">Ventas</option>
              <option value="opcion4">Marketing</option>
              <option value="opcion4">IT</option>
              <option value="opcion4">Otro (por favor especifica)</option>
            </select>
          </section>
          <section>
            <Link to="/perfilamiento/4">
              <button className={styles.button2}>Continuar</button>
            </Link>
          </section>
        </article>

        <Link className={styles.volver} to="/perfilamiento/2">
          <img src="/src/assets/volverblanco.png" />
        </Link>
      </form>
    </div>
  );
};

export default perfilamiento4;
