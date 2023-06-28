import React, { useState } from "react";
import { Link, BrowserRouter, Route, useParams } from "react-router-dom";
import styles from "./perfilamiento.module.css";

const Perfilamiento = () => {
  const { step } = useParams();

  const [nombre, setNombre] = useState("");

  const handleCambioNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleGuardarNombre = () => {
    localStorage.setItem("nombre", nombre);
  };

  return (
    <div className={styles.perfilamiento}>
      <form>
        <h1>¡YOU ARE IN!</h1>
        <h2>Bríndanos tu nombre para poder empezar</h2>
        <input
          placeholder="Nombre"
          className={styles.input2}
          type="text"
          value={nombre}
          onChange={handleCambioNombre}
        ></input>
        <Link to="/perfilamiento/2">
          <button className={styles.button2} onClick={handleGuardarNombre}>
            Continuar
          </button>
        </Link>

        <Link className={styles.volver} to="/">
          <img src="/src/assets/volverblanco.png" />
        </Link>
      </form>
    </div>
  );
};

export default Perfilamiento;
