// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createCampaign } from "../../services/campaign/createCampaign";
import styles from "./perfilamiento.module.css";
import { updateUserData } from "../../services/auth/updateUserData";

const Perfilamiento5 = ({ finalData }) => {
    // const { step } = useParams();
    const navigate = useNavigate()

    const saveUserData = () => {
        // llama a la api de actualizar info
        if (finalData.other_role) {
            finalData.role = finalData.other_role
        }
        finalData.first_time = false
        updateUserData(finalData)
    }

    const handleCreateCampaign = async (event) => {
        event.preventDefault()
        saveUserData()
        let newCampaingId = 4
        try {
            const response = await createCampaign({name: "Mi primera campaña"})
            newCampaingId = response.data.id
        } catch (error) {
            console.error('algo fallo con al crear la campaña')
        }
        navigate(`/campaign/${newCampaingId}/importacion/1/`)
    }

    const handleGotToHome = () => {
        saveUserData()
        navigate('/')
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
                        {/* <Link to="/"> */}
                        <button
                            onClick={handleGotToHome}
                            className={styles.botonClarito}
                            type="button"
                        >
                                Dejarlo para después
                        </button>
                        {/* </Link> */}

                        <button
                            className={styles.button2}
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
