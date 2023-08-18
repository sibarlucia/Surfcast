import { Link} from "react-router-dom";
import styles from "./perfilamiento.module.css";

const Perfilamiento = ({ name, onChange }) => {
    // const [nombre, setNombre] = useState("");

    return (
        <div className={styles.mainDiv}>
            <form className={styles.formPerfilamiento}>
                <article className={styles.mainArticle}>
                    <section>
                        <h1>¡YOU ARE IN!</h1>
                        <h2>Bríndanos tu nombre para poder empezar</h2>
                    </section>

                    <section>
                        <input
                            placeholder="Nombre"
                            className={styles.input2}
                            type="text"
                            value={name}
                            name="full_name"
                            onChange={onChange}
                        ></input>
                    </section>

                    <section>
                        <Link to="/perfilamiento/2">
                            <button className={styles.button2}>
                                Continuar
                            </button>
                        </Link>
                    </section>
                </article>
            </form>
        </div>
    );
};

export default Perfilamiento;
