import React, { useState } from "react";
import { Link, BrowserRouter, Route, useParams } from "react-router-dom";
import styles from "./producto.module.css";

const Producto5 = () => {
  const { step } = useParams();

  return (
    <div>
      <form>
        <div className={styles.etapa}>5/5</div>

        <div>
          <h1>¡Promocionemos tu producto o servicio!</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <p>Adjunta algún documento que desees compartir</p>
          <input className={styles.input2} type="file"></input>
        </div>

        <Link to="/producto/5">
          <button className="botonSiguiente">Finalizar</button>
        </Link>

        <Link className={styles.volver} to="/producto/4">
          <img src="/src/assets/volvernegro.png" />
        </Link>
      </form>
    </div>
  );
};

export default Producto5;
