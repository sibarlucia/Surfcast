import { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./perfilamiento.module.css";

const SELECT_DATA = [
    'Elige una opción',
    'Ejecutivo',
    'Gerencia',
    'Administración',
    'Ventas',
    'Marketing',
    'IT',
    'Otro (por favor especifica)',
]

export const Perfilamiento3 = ({ role, onChange, name, other_role }) => {

    console.log(role)

    const showInput = useMemo(() => {
        return role === 'Otro (por favor especifica)'
    }, [role])
    showInput

    return (
        <div className={styles.mainDiv}>
            <form className={styles.formPerfilamiento}>
                <article className={styles.mainArticle}>
                    <section>
                        <p>¡{name}, cuéntanos un poco sobre tí!</p>
                        <h2>¿Cuál es tu rol en esta empresa?</h2>
                    </section>
                    <section>
                        <select
                            value={role}
                            onChange={onChange}
                            name="role"
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
                                            key={`company_role-option-${index}`}
                                        >
                                            {item}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        {
                            showInput && (
                                <input
                                    type="text"
                                    value={other_role}
                                    onChange={onChange}
                                    name="other_role"
                                    placeholder="Especifica tu rol"
                                />
                            )
                        }
                    </section>
                    <section>
                        <Link to="/perfilamiento/4">
                            <button className={styles.button2}>Continuar</button>
                        </Link>
                    </section>
                </article>
                <Link className={styles.volver} to="/perfilamiento/2">
                    <img src="/src/assets/volverblanco.png" />
                </Link>
            </form>
        </div>
    );
};
