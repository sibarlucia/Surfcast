import React, { useState } from "react";
import { Link, BrowserRouter, Route, useParams } from "react-router-dom";
import styles from "./producto.module.css";
import Producto2 from "./Producto2";

const Producto = () => {
  const { step } = useParams();

  return (
    <div>
      <form>
        <div className={styles.etapa}>1/5</div>

        <div>
          <h1>¡Promocionemos tu producto o servicio!</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>¿Qué producto o servicio es?</h2>
          <input
            className={styles.input2}
            type="text"
            placeholder="¿Qué necesidad satisface o qué problema soluciona?"
          />
        </div>

        <Link to="/producto/2">
          <button className={styles.botonSiguiente}>Siguiente</button>
        </Link>
        <Link className={styles.volver} to="/importacion/2">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/producto/2">
          <img src="/src/assets/crearcampañadespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Producto;
