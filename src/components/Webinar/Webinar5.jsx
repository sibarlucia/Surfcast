import { useEffect, useState } from "react";
import styles from "./webinar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createResponse } from "../../services/responses/createResponse";


const DEFAULT_DATA_FORM = {
    resolution: '',
}

const RESPONSE_NAMES = {
    resolution: 'webinar/5/resolution'
}

const Webinar5 = ({ defaultResponse = null, campaignId }) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()
    
    console.log({ campaignId })

    useEffect(() => {
        if (defaultResponse) {
            const resolution = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['resolution'])?.answer || ''

           
            setDataForm({
                resolution
            })
        }
    }, [defaultResponse])

    const handleChangeSelectValue = (event) => {
        const { value, name } = event.target 
        setDataForm({ ...dataForm, [name]: value })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        Object.keys(dataForm).forEach(inputName => {
            createResponse({
                question_name: RESPONSE_NAMES[inputName],
                type: 'string',
                answer: dataForm[inputName],
                campaign_id: campaignId
            })
        })
        navigate(`/campaign/${campaignId}/webinar/6/`)
    } 

    
    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <article className={styles.mainArticle}>
                    <section className={styles.etapa}>5/6</section>
                    <section>
                        <h1>¡Concretemos una reunión!</h1>
                        <p>Es hora de personalizar tu campaña</p>
                    </section>
                    <section>
                        <h2>¿Cuál es el propósito del evento?</h2>
                        <input
                            required
                            onChange={handleChangeSelectValue}
                            value={dataForm.resolution}
                            name="resolution"
                            type="text"
                            placeholder="¿Qué necesidad satisface o qué problema soluciona?"
                            className={styles.input2}
                        ></input>
                    </section>
                    <section>
                        <button className={styles.botonSiguiente}>Siguiente</button>
                    </section>
                </article>

                <Link className={styles.volver} to={`/campaign/${campaignId}/webinar/4/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/webinar/6/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Webinar5;
