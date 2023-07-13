import React from "react";
import styles from "./webinar.module.css";
import { Link } from "react-router-dom";

const Webinar = () => {
    return (
        <div className={styles.mainDiv}>
            <form>
                <div className={styles.etapa}>1/6</div>
                <article className={styles.mainArticle}>
                    <section>
                        <h1>¡Invitemos a un webinar!</h1>
                        <p>Es hora de personalizar tu campaña</p>
                    </section>
                    <section>
                        <h2>¿De qué se hablará?</h2>
                        <input
                            type="text"
                            placeholder="¿De qué rubro, tema, etc.?"
                            className={styles.input2}
                        ></input>
                    </section>
                    <section>
                        <Link to="/webinar/2">
                            <button className={styles.botonSiguiente}>Siguiente</button>
                        </Link>
                    </section>
                </article>
        
                <Link className={styles.volver} to="/importacion/2">
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to="/webinar/2">
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Webinar;
