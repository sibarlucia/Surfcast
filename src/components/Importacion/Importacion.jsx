import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProgressBar } from "../General/ProgressBar";
import styles from "./importacion.module.css";

// controla como se ve la barra de progreso
const progressData = [
  {
    node: {
      text: "Leads",
      color: "#7D7DFE",
      active: true,
    },
    line: {
      progress: 35, // porcentaje de la barra con color
      beginColor: "#7D7DFE",
      // endColor: '#000000' // hace un degradado entre los dos colores si se activa
    },
  },
  {
    node: {
      text: "Personalización",
      color: "#CECECE",
      active: false,
    },
  },
  {
    node: {
      text: "Ejemplos",
      color: "#CECECE",
      active: false,
    },
  },
  {
    node: {
      text: "Últimos ajustes",
      color: "#CECECE",
      active: false,
    },
  },
];

const Importacion = () => {
  const { step } = useParams();

  const [boton, setBoton] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleButtonClick = (accion) => {
    setBoton(accion);
    setSubmit(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {}, [boton]);

  return (
    <div className={styles.mainDiv}>
      <form onSubmit={handleSubmit}>
        <div className={styles.progressBar__container}>
          <ProgressBar data={progressData} />
        </div>
        <article className={styles.mainArticle}>
          <h1>Escoge el método para importar tus leads</h1>
          <h2>
            Así podremos conocer, clasificar y desarrollar adecuadamente a tu
            público objetivo.
          </h2>
          <section></section>

          <section>
            <p>¿Cómo se llamará tu lista?</p>
            <input
              type="text"
              placeholder="CEO y fundadores, Ventas, Managers..."
            />
          </section>
          <p>¿Cómo te gustaría importarlos?</p>
          <section id={styles.botones}>
            <button
              className={styles.button3}
              onClick={() => handleButtonClick("buscar")}
            >
              Búsqueda de Linkedin
            </button>
            <button
              className={styles.button3}
              onClick={() => handleButtonClick("cargar")}
            >
              Cargar Archivo CSV
            </button>
            <button
              className={styles.button3}
              onClick={() => handleButtonClick("usar")}
            >
              Usando AI
            </button>
          </section>
          <section>
            {boton === "buscar" && (
              <input
                type="text"
                name="buscar"
                placeholder="https://www.linkedin.com/search/"
              />
            )}

            {boton === "cargar" && (
              <div className={styles.files}>
                <h2>Adjunta algún documento que desees compartir</h2>

                <input className={styles.input2} id="file" type="file"></input>
                <label htmlFor="file">
                  <img src="/src/assets/flecha.png"></img>
                </label>
              </div>
            )}
          </section>
          <section>
            <Link to="/importacion/2" className={styles.link}>
              <button
                className={styles.button2}
                type="submit"
                disabled={!submit}
              >
                Importar Leads
              </button>
            </Link>
          </section>
        </article>

        <Link className={styles.volver} to="/perfilamiento/3">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/perfilamiento/3">
          <img src="/src/assets/crearcampañadespues.png" />
        </Link>
      </form>
    </div>
  );
};

export default Importacion;
