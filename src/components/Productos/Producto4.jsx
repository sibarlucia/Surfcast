import React, { useState } from "react";
import { Link, BrowserRouter, Route, useParams } from "react-router-dom";
import styles from "./producto.module.css";
import Producto5 from "./Producto5";

const Producto4 = () => {
  const { step } = useParams();

  const [opcion, setOpcion] = useState("");

  const handleCambioOpcion = (event) => {
    setOpcion(event.target.value);
  };
  console.log(opcion);

  return (
    <div className={styles.mainDiv}>
      <form>
        <div className={styles.etapa}>4/5</div>

        <div>
          <h1>¡Promocionemos tu producto o servicio!</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>
            ¿Qué incentivo te gustaría usar para que compren tu producto o
            servicio?
          </h2>

          <select value={opcion} onChange={handleCambioOpcion}>
            <option value="">Elige una opción</option>
            <option value="opcion1">Descuentos</option>
            <option value="opcion2">Regalos con la compra</option>
            <option value="opcion3">Cupones</option>
            <option value="opcion4">Programas de lealtad</option>
            <option value="opcion4">Ninguno</option>
            <option value="opcion4">Otro (por favor especifica)</option>
          </select>

          <button>Agregar otro incentivo*</button>
        </div>

        <Link to="/producto/5">
          <button className="botonSiguiente">Siguiente</button>
        </Link>

        <Link className={styles.volver} to="/producto/3">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/producto/5">
          <img src="/src/assets/continuardespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Producto4;
