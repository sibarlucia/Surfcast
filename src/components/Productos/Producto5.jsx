import React, { useState } from "react";
import { Link, BrowserRouter, Route, useParams, useNavigate } from "react-router-dom";
import styles from "./producto.module.css";

const Producto5 = () => {
  const { step } = useParams();

  const [popUp, setPopUp] = useState(false);
  const [effect, setEffect] = useState();

  const navigate = useNavigate();

  const handleFinalizar = () => {
    setPopUp(true);
    setEffect(blur);
    setTimeout(() => {
      navigate("/importacion/3");
    }, 3000);
  };

  return (
    <div className={styles.mainDiv}>
      <form>
        {popUp == true && (
          <div className={styles.fondoImg}>
            <img
              className={styles.imagenFinalizar}
              src="/src/assets/popUp.png"
            />
          </div>
        )}

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
          <button
            className={styles.botonSiguiente}
            onClick={() => handleFinalizar()}
          >
            Finalizar
          </button>
        </Link>

        <Link className={styles.volver} to="/producto/4">
          <img src="/src/assets/volvernegro.png" />
        </Link>
      </form>
    </div>
  );
};

export default Producto5;
