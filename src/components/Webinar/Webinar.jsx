import { useEffect, useState } from "react";
import styles from "./webinar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createResponse } from "../../services/responses/createResponse";
 
const DEFAULT_DATA_FORM = {
    topic: '',
}

const RESPONSE_NAMES = {
    topic: 'webinar/1/topic',
}

const Webinar = ({ defaultResponse = null, campaignId }) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()


    useEffect(() => {
        if (defaultResponse) {
            const topic = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['topic'])?.answer || ''
            setDataForm({
                topic
            })
        }
    }, [defaultResponse])

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
        navigate(`/campaign/${campaignId}/webinar/2/`)
    } 

    const handelChangeInput = (event) => {
        const { value, name } = event.target 
        setDataForm({ ...dataForm, [name]: value })
    }


    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.etapa}>1/6</div>
                <article className={styles.mainArticle}>
                    <section>
                        <h1>¡Invitemos a un webinar!</h1>
                        <p>Es hora de personalizar tu campaña</p>
                    </section>
                    <section>
                        <h2>¿De qué se hablará?</h2>
                        <input
                            value={dataForm.topic}
                            name="topic"
                            onChange={handelChangeInput}
                            type="text"
                            placeholder="¿De qué rubro, tema, etc.?"
                            className={styles.input2}
                        ></input>
                    </section>
                    
                </article>

                <section>
                    {/* <Link to="/webinar/2"> */}
                    <button className={styles.botonSiguiente}>Siguiente</button>
                    {/* </Link> */}
                </section>

                <Link className={styles.volver} to={`/campaign/${campaignId}/importacion/2/`} >
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/webinar/2/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Webinar;
