import { Link } from "react-router-dom"
import styles from "./perfilamiento.module.css"

const SELECT_DATA = [
    'Corporación multinacional',
    'Pequela y mediana empresa (PyME)',
    'Start-up',
    'Organización sin fines de lucro',
    'Organismo gubernamental'
]

const Perfilamiento2 = ({ type, onChange, name }) => {

    return (
        <div className={styles.mainDiv}>
            <form className={styles.formPerfilamiento}>
                <article className={styles.mainArticle}>
                    <section>
                        <p>¡{name}, cuéntanos un poco sobre tí!</p>
                        <h2>¿En qué tipo de empresa trabajas?</h2>
                    </section>
                    <section>
                        <select
                            value={type}
                            onChange={onChange}
                            name="company_type"
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
                                            key={`company_type-option-${index}`}
                                        >
                                            {item}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </section>
                    <section>
                        <Link to="/perfilamiento/3">
                            <button className={styles.button2}>Continuar</button>
                        </Link>
                    </section>
                </article>

                <Link className={styles.volver} to="/perfilamiento/1">
                    <img src="/src/assets/volverblanco.png" />
                </Link>
            </form>
        </div>
    );
};

export default Perfilamiento2;
