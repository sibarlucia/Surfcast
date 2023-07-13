import React, { useEffect, useState } from "react";
import styles from "./reunion.module.css";
import { Link, useNavigate } from "react-router-dom";

const Reunion6 = () => {
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

                <div className={styles.files}>
                    <h2>Adjunta algún documento que desees compartir</h2>
                    <input className={styles.input2} id="file" type="file"></input>
                    <label htmlFor="file">
                        <img src="/src/assets/flecha.png"></img>
                    </label>
                </div>

                <Link to="/reunion/6">
                    <button
                        className={styles.botonSiguiente}
                        onClick={() => handleFinalizar()}
                    >
            Finalizar
                    </button>
                </Link>

                <Link className={styles.volver} to="/reunion/5">
                    <img src="/src/assets/volvernegro.png" />
                </Link>
            </form>
        </div>
    );
};

export default Reunion6;
