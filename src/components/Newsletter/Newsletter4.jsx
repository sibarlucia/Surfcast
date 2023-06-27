import React from "react";
import styles from "./newsletter.module.css";
import { Link } from "react-router-dom";

const Newsletter4 = () => {
  return (
    <div>
      <form>
        <div className={styles.etapa}>4/5</div>

        <div>
          <h1>¡Aumentemos tus suscripciones</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>Método de suscripción</h2>
          <select>
            <option>Elige el método</option>
            <option>Correo electrónico</option>
            <option>Mensaje de texto SMS</option>
            <option>Aplicación de mensajería (WhatsApp, Telegram, etc.)</option>
            <option>Redes sociales (Facebook, Instagram, Twitter, etc.)</option>
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

        <Link to="/newsletter/5">
          <button className={styles.botonSiguiente}>Siguiente</button>
        </Link>

        <Link className={styles.volver} to="/newsletter/3">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/newsletter/5">
          <img src="/src/assets/crearcampañadespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Newsletter4;
