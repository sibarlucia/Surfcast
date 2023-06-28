import React from "react";
import styles from "./newsletter.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Newsletter5 = () => {
  const [popUp, setPopUp] = useState(false);
  const [effect, setEffect] = useState();

  const navigate = useNavigate();


  const blur = styles.blur;

  const handleFinalizar = () => {
    setPopUp(true);
    setEffect(blur);
    setTimeout(() => {
      navigate("/importacion/3");
    }, 3000);
  };

  useEffect(() => {}, [popUp]);

  return (
    <div>
      <form className={effect}>
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
          <h1>¡Aumentemos tus suscripciones</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>Adjunta algún documento que desees compartir</h2>
          <input
            type="file"
            placeholder="Subir archivos"
            className={styles.input2}
          ></input>
        </div>

        <Link to="/newsletter/5">
          <button
            className={styles.botonSiguiente}
            onClick={() => handleFinalizar()}
          >
            Finalizar
          </button>
        </Link>

        <Link className={styles.volver} to="/newsletter/4">
          <img src="/src/assets/volvernegro.png" />
        </Link>
      </form>
    </div>
  );
};

export default Newsletter5;
