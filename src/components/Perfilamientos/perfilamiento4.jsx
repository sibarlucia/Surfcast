import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./perfilamiento.module.css";

const perfilamiento5 = () => {
    const { step } = useParams();
    const [opcion, setOpcion] = useState("");

    const handleCambioOpcion = (event) => {
        setOpcion(event.target.value);
    };
    console.log(opcion);

    const nombre = localStorage.nombre;

    return (
        <div className={styles.mainDiv}>
            <form className={styles.formPerfilamiento}>
                <article className={styles.mainArticle}>
                    <section>
                        <p>¡{nombre}, cuéntanos un poco sobre tí!</p>
                        <h2>¿Haz usado la automatización de Linkedin antes?</h2>
                    </section>
                    <section>
                        <select value={opcion} onChange={handleCambioOpcion}>
                            <option value="">Elige una opción</option>
                            <option value="opcion1">Sí, regularmente</option>
                            <option value="opcion2">Sí, pero solo un par de veces</option>
                            <option value="opcion3">Np, nunca</option>
                        </select>
                    </section>
                    <section>
                        <Link to="/perfilamiento/5">
                            <button className={styles.button2}>Continuar</button>
                        </Link>
                    </section>
                </article>

                <Link className={styles.volver} to="/perfilamiento/3">
                    <img src="/src/assets/volverblanco.png" />
                </Link>
            </form>
        </div>
    );
};

export default perfilamiento5;
