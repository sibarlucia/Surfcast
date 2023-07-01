import React, { useState } from "react";
import { Link, BrowserRouter, Route, useParams } from "react-router-dom";
import styles from "./producto.module.css";
import Producto3 from "./Producto3";

const Producto2 = () => {
  const { step } = useParams();

  return (
    <div className={styles.mainDiv}>
      <form>
        <div className={styles.etapa}>2/5</div>

        <div>
          <h1>¡Promocionemos tu producto o servicio!</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>3 beneficios clave que brindarás</h2>
          <input className={styles.input3} type="text" placeholder="1."></input>
          <input className={styles.input3} type="text" placeholder="2."></input>
          <input className={styles.input3} type="text" placeholder="3."></input>
        </div>

        <Link to="/producto/3">
          <button className="botonSiguiente">Siguiente</button>
        </Link>

        <Link className={styles.volver} to="/producto/1">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/producto/3">
          <img src="/src/assets/continuardespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Producto2;
