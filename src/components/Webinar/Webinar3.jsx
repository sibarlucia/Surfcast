import React from "react";
import styles from "./webinar.module.css";
import { Link } from "react-router-dom";

const Webinar3 = () => {
  return (
    <div className={styles.mainDiv}>
      <form>
        <div className={styles.etapa}>3/6</div>

        <div>
          <h1>¡Invitemos a un webinar!</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>¿Con qué tipo de cliente deseas reunirte?</h2>
          <select>
            <option>Elige un tipo de cliente</option>
            <option>Pequeñas empresas</option>
            <option>Medianas empresas</option>
            <option>Grandes corporaciones</option>
            <option>Start-ups</option>
            <option>Clientes individuales</option>
            <option>Indiferente</option>
          </select>
        </div>

        <div>
          <h2>Pega el link aquí:</h2>
          <input
            type="text"
            placeholder="https://workspace.com/webinar/"
            className={styles.input}
          ></input>
        </div>

        <Link to="/webinar/4">
          <button className={styles.botonSiguiente}>Siguiente</button>
        </Link>
        <Link className={styles.volver} to="/webinar/2">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/webinar/4">
          <img src="/src/assets/continuardespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Webinar3;
