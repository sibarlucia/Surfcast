import { useEffect, useState } from "react";
import styles from "./newsletter.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createResponse } from "../../services/responses/createResponse";

const methodList = [
    'Correo electrónico',
    'Mensaje de texto SMS',
    'Aplicación de mensajería (WhatsApp, Telegram, etc.)',
    'Redes sociales (Facebook, Instagram, Twitter, etc.)'
]

const DEFAULT_DATA_FORM = {
    suscriptionMethod: '',
    link: ''
}

const RESPONSE_NAMES = {
    suscriptionMethod: 'newsletter/4/suscriptionMethod',
    link: 'newsletter/4/link'
}

const Newsletter4 = ({defaultResponse = null, campaignId}) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()

    console.log(dataForm)

    useEffect(() => {
        if (defaultResponse) {
            const suscriptionMethod = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['suscriptionMethod'])?.answer || ''
            const link = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['link'])?.answer || ''
            setDataForm({
                suscriptionMethod,
                link
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
        navigate(`/campaign/${campaignId}/newsletter/5/`)
    } 

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.etapa}>4/5</div>

                <div>
                    <h1>¡Aumentemos tus suscripciones</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>Método de suscripción</h2>
                    <select
                        value={dataForm.suscriptionMethod}
                        name='suscriptionMethod'  
                        onChange={handleChangeSelectValue}
                        required
                    >
                        <option value={''} hidden>Elige el método</option>

                        {
                            methodList.map((item, index) => {
                                return (
                                    <option
                                        value={item}
                                        key={`positionOption-${index}`}
                                    >
                                        {item}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>

                <div>
                    <h2>Pega el link aquí:</h2>
                    <input
                        value={dataForm.link}
                        name="link"
                        onChange={handleChangeSelectValue}
                        type="url"
                        placeholder="https://workspace.com/webinar/"
                        className={styles.input}
                    ></input>
                </div>

                {/* <Link to="/newsletter/5"> */}
                <button className={styles.botonSiguiente}>Siguiente</button>
                {/* </Link> */}

                <Link className={styles.volver} to={`/campaign/${campaignId}/newsletter/3/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/newsletter/5/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Newsletter4;
