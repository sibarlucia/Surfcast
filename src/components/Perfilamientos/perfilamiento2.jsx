import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./perfilamiento.module.css";
const perfilamiento2 = () => {
  const { step } = useParams();

  const [opcion, setOpcion] = useState("");

  const handleCambioOpcion = (event) => {
    setOpcion(event.target.value);
  };
  console.log(opcion);

  const nombre = localStorage.nombre;
  // console.log(nombre);
  return (
    <div className={styles.perfilamiento}>
      <form>
        <p>¡{nombre}, cuéntanos un poco sobre tí!</p>
        <h2>¿En qué tipo de empresa trabajas?</h2>

        <select value={opcion} onChange={handleCambioOpcion}>
          <option value="">Elige una opción</option>
          <option value="opcion1">Corporación multinacional</option>
          <option value="opcion2">Pequela y mediana empresa (PyME)</option>
          <option value="opcion3">Start-up</option>
          <option value="opcion4">Organización sin fines de lucro</option>
          <option value="opcion4">Organismo gubernamental</option>
        </select>

        <Link to="/perfilamiento/3">
          <button className="botonContinuar">Continuar</button>
        </Link>

        <Link className={styles.volver} to="/perfilamiento/1">
          <img src="/src/assets/volverblanco.png" />
        </Link>
      </form>
    </div>
  );
};

export default perfilamiento2;
