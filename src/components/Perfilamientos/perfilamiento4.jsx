import { Link } from "react-router-dom";
import styles from "./perfilamiento.module.css";


const SELECT_DATA = [
    'Sí, regularmente',
    'Sí, pero solo un par de veces',
    'No, nunca'
]


const Perfilamiento5 = ({ name, onChange, previus_experience }) => {
    return (
        <div className={styles.mainDiv}>
            <form className={styles.formPerfilamiento}>
                <article className={styles.mainArticle}>
                    <section>
                        <p>¡{name}, cuéntanos un poco sobre tí!</p>
                        <h2>¿Haz usado la automatización de Linkedin antes?</h2>
                    </section>
                    <section>
                        <select
                            value={previus_experience}
                            onChange={onChange}
                            name="previus_experience"
                        >
                            <option
                                value=""
                                hidden
                            >
                                Elige una opción
                            </option>
                            {
                                SELECT_DATA.map((item, index) => {
                                    return (
                                        <option
                                            value={item}
                                            key={`previus_experience-option-${index}`}
                                        >
                                            {item}
                                        </option>
                                    )
                                })
                            }
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

export default Perfilamiento5;
