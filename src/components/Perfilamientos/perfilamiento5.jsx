// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createCampaign } from "../../services/campaign/createCampaign";
import styles from "./perfilamiento.module.css";

const Perfilamiento5 = () => {
    // const { step } = useParams();
    const navigate = useNavigate()

    const handleCreateCampaign = async (event) => {
        event.preventDefault()
        let newCampaingId = 4
        try {
            const response = await createCampaign({name: "Mi primera campaña"})
            newCampaingId = response.data.id
        } catch (error) {
            console.error('algo fallo con al crear la campaña')
        }
        navigate(`/campaign/${newCampaingId}/importacion/1/`)
    }

    return (
        <div className={styles.mainDiv}>
            <form className={styles.formPerfilamiento} onSubmit={handleCreateCampaign}>
                <article className={styles.mainArticle}>
                    <section>
                        <h1>¡EMPECEMOS TU PRIMERA CAMPAÑA!</h1>
                        <h2>Si aún no estás seguro puedes crearla después</h2>
                    </section>
                    <section></section>
                    <section id={styles.botones}>
                        <Link to="/">
                            <button
                                className={styles.botonClarito}
                                type="button"
                            >
                Dejarlo para después
                            </button>
                        </Link>

                        <button
                            className={styles.button2}
                            // onClick={handleCreateCampaign}
                        >
                            Crear ahora
                        </button>

                        <Link className={styles.volver} to="/perfilamiento/4">
                            <img src="/src/assets/volverblanco.png" />
                        </Link>
                    </section>
                </article>
            </form>
        </div>
    );
};

export default Perfilamiento5;
