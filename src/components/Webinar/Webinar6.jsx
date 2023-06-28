import React, { useEffect, useState } from "react";
import styles from "./webinar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Webinar6 = () => {
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

        <div className={styles.etapa}>6/6</div>

        <div>
          <h1>¡Concretemos una reunión!</h1>
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

        <Link to="/webinar/6">
          <button
            className={styles.botonSiguiente}
            onClick={() => handleFinalizar()}
          >
            Finalizar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Webinar6;
