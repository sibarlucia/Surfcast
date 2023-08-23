import { useEffect, useState } from "react";
import styles from "./webinar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createResponse } from "../../services/responses/createResponse";

const clientTypeOptions = [
    'Pequeñas empresas',
    'Medianas empresas',
    'Grandes corporaciones',
    'Start-ups',
    'Clientes individuales',
    'Indiferente',
] 

const DEFAULT_DATA_FORM = {
    clientType: '',
    link: ''
}

const RESPONSE_NAMES = {
    clientType: 'webinar/3/clientType',
    link: 'webinar/3/link'
}

const Webinar3 = ({ defaultResponse = null, campaignId }) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()

    console.log(dataForm)

    useEffect(() => {
        if (defaultResponse) {
            const clientType = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['clientType'])?.answer || ''
            const link = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['link'])?.answer || ''
            setDataForm({
                clientType,
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
        Object.keys(dataForm).forEach(inputName => {
            createResponse({
                question_name: RESPONSE_NAMES[inputName],
                type: 'string',
                answer: dataForm[inputName],
                campaign_id: campaignId
            })
        })
        navigate(`/campaign/${campaignId}/webinar/4/`)
    } 

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <section>
                    <div className={styles.etapa}>3/6</div>
                </section>
                <article className={styles.mainArticle}>
                    
                    <section>
                        <h1>¡Invitemos a un webinar!</h1>
                        <p>Es hora de personalizar tu campaña</p>
                    </section>
                    <section>
                        <h2>¿Con qué tipo de cliente deseas reunirte?</h2>
                        <select
                            value={dataForm.clientType}
                            name='clientType'  
                            onChange={handleChangeSelectValue}
                            required
                        >
                            <option value={''} hidden>Elige un tipo de cliente</option>
                            {
                                clientTypeOptions.map((item, index) => {
                                    return (
                                        <option
                                            value={item}
                                            key={`clientTypeOptions-${index}`}
                                        >
                                            {item}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </section>

                    <section>
                        <h2>Pega el link aquí:</h2>
                        <input
                            value={dataForm.link}
                            name="link"
                            onChange={handleChangeSelectValue}
                            type="url"
                            placeholder="https://workspace.com/webinar/"
                            className={styles.input}
                        ></input>
                    </section>
                    
                </article>
                <section>
                    <button className={styles.botonSiguiente}>Siguiente</button>
                </section>

                <Link className={styles.volver} to={`/campaign/${campaignId}/webinar/2/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/webinar/4/`}
                >
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Webinar3;
