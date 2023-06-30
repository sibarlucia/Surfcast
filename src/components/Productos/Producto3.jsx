import React, { useState } from "react";
import { Link, BrowserRouter, Route, useParams } from "react-router-dom";
import styles from "./producto.module.css";
import Producto4 from "./Producto4";

const Producto3 = () => {
  const { step } = useParams();

  return (
    <div className={styles.mainDiv}>
      <form>
        <div className={styles.etapa}>3/5</div>

        <div>
          <h1>¡Promocionemos tu producto o servicio!</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>Precio</h2>
          <input className={styles.input2} type="text" placeholder="Escribe aquí"></input>

          <h2>¿Dónde lo puedo conseguir?</h2>
          <p>Pega el link aquí</p>
          <input className={styles.input}
            type="text"
            placeholder="https:/workspace.com/webinar/"
          ></input>
        </div>

        <Link to="/producto/4">
          <button className="botonSiguiente">Siguiente</button>
        </Link>

        <Link className={styles.volver} to="/producto/2">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/producto/4">
          <img src="/src/assets/continuardespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Producto3;
