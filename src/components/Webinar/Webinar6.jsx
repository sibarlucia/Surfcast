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
    <div className={styles.mainDiv}>
      <form className={effect}>
        {popUp == true && (
          <section className={styles.fondoImg}>
            <img
              className={styles.imagenFinalizar}
              src="/src/assets/popUp.png"
            />
          </section>
        )}
        <article className={styles.mainArticle}>
          <section className={styles.etapa}>6/6</section>

          <section>
            <h1>¡Concretemos una reunión!</h1>
            <p>Es hora de personalizar tu campaña</p>
          </section>
          <section className={styles.files}>
            <h2>Adjunta algún documento que desees compartir</h2>
            <input className={styles.input2} id="file" type="file"></input>
            <label htmlFor="file">
              <img src="/src/assets/flecha.png"></img>
            </label>
          </section>
          <section>
            <Link to="/webinar/6">
              <button
                className={styles.botonSiguiente}
                onClick={() => handleFinalizar()}
              >
                Finalizar
              </button>
            </Link>
          </section>
        </article>

        <div className={styles.etapa}></div>

        <div></div>

        <div></div>

        <Link className={styles.volver} to="/webinar/5">
          <img src="/src/assets/volvernegro.png" />
        </Link>
      </form>
    </div>
  );
};

export default Webinar6;
