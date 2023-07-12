import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./importacion2.module.css";
import { ProgressBar } from "../General/ProgressBar";

const progressData = [
    {
        node: {
            text: "Leads",
            color: "#7D7DFE",
            active: true,
        },
        line: {
            progress: 100, // porcentaje de la barra con color
            beginColor: "#7D7DFE",
            endColor: "#000000", // hace un degradado entre los dos colores si se activa
        },
    },
    {
        node: {
            text: "Personalización",
            color: "#001B8D",
            active: true,
        },
        line: {
            progress: 35, // porcentaje de la barra con color
            beginColor: "#001B8D",
            // endColor: '#000000' // hace un degradado entre los dos colores si se activa
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

const Importacion2 = () => {
    const { step } = useParams();

    const [route, setRoute] = useState("");
    const [submit, setSubmit] = useState(false);

    const estiloBoton = styles.button4;
    const botonSeleccionado = styles.seleccionado;
  

    useEffect(() => {}, [route]);
    const handleButtonClick = (endpoint) => {
        setRoute(endpoint);
        setSubmit(true);
    };

  
    console.log(route);
    return (
        <div className={styles.mainDiv}>
            <form>

                <div className={styles.progressBar__container}>
                    <ProgressBar data={progressData} />
                </div>

                <article className={styles.mainArticle}>
                    <section>
                        <h1>¿Qué quieres lograr con tu campaña?</h1>
                        <h2>
              Definamos tus objetivos de prospección y los resultados que
              quieres obtener con tu campaña.
                        </h2>
                    </section>
                    <section className={styles.botonera}>
                        <button
                            type="button"
                            className={
                                route === "/reunion/1" ? botonSeleccionado : estiloBoton
                            }
                            onClick={() => [handleButtonClick("/reunion/1")]}
                        >
              Lograr reunirme con clientes potenciales
                        </button>
                        <button
                            type="button"
                            className={
                                route === "/webinar/1" ? botonSeleccionado : estiloBoton
                            }
                            onClick={() => [handleButtonClick("/webinar/1")]}
                        >
              Invitar a un webinar o evento corporativo
                        </button>
                        <button
                            type="button"
                            className={
                                route === "/aumentarred/1" ? botonSeleccionado : estiloBoton
                            }
                            onClick={() => [handleButtonClick("/aumentarred/1")]}
                        >
              Aumentar mi red de contactos
                        </button>
                    </section>
                    <section className={styles.botonera}>
                        <button
                            type="button"
                            className={
                                route === "/newsletter/1" ? botonSeleccionado : estiloBoton
                            }
                            onClick={() => [handleButtonClick("/newsletter/1")]}
                        >
              Invitar a inscribirse a un newsletter
                        </button>
                        <button
                            type="button"
                            className={
                                route === "/producto/1" ? botonSeleccionado : estiloBoton
                            }
                            onClick={() => [handleButtonClick("/producto/1")]}
                        >
              Promocionar un producto
                        </button>
                        <button
                            type="button"
                            className={
                                route === "/importacion/1" ? botonSeleccionado : estiloBoton
                            }
                            onClick={() => [handleButtonClick("/importacion/1")]}
                        >
              Otros
                        </button>
                    </section>
                    <section>
                        <Link to={route}>
                            <button type="submit" className={styles.botonSiguiente}>
                Elegir
                            </button>
                        </Link>
                    </section>
                </article>
    

                <Link className={styles.volver} to="/perfilamiento/3">
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to="/perfilamiento/3">
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Importacion2;
