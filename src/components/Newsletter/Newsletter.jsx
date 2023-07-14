import { useEffect, useState } from "react";
import styles from "./newsletter.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createResponse } from "../../services/responses/createResponse";

const DEFAULT_DATA_FORM = {
    theme: '',
}

const RESPONSE_NAMES = {
    theme: 'newsletter/1/theme',
}

const Newsletter = ({ defaultResponse = null, campaignId }) => {

    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()

    useEffect(() => {
        if (defaultResponse) {
            const theme = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['theme'])?.answer || ''
            setDataForm({
                theme,
            })
        }
    }, [defaultResponse])

    const handleChangeSelectValue = (event) => {
        const { value, name } = event.target 
        setDataForm({ ...dataForm, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({dataForm})
        Object.keys(dataForm).forEach(inputName => {
            createResponse({
                question_name: RESPONSE_NAMES[inputName],
                type: 'string',
                answer: dataForm[inputName],
                campaign_id: campaignId
            })
        })
        navigate(`/campaign/${campaignId}/newsletter/2/`)
    } 


    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.etapa}>1/5</div>

                <div>
                    <h1>¡Aumentemos tus suscripciones!</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>¿De qué tratará tu newsletter?</h2>
                    <input
                        type="text"
                        placeholder="¿De qué rubro, tema, etc?"
                        className={styles.input2}
                        value={dataForm.theme}
                        name='theme'
                        onChange={handleChangeSelectValue}
                    ></input>
                </div>
                {/* <Link to="/newsletter/2"> */}
                <button className={styles.botonSiguiente}>Siguiente</button>
                {/* </Link> */}

                <Link className={styles.volver} to={`/campaign/${campaignId}/importacion/2/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/newsletter/2/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Newsletter;
