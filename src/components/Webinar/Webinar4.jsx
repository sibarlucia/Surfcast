import { useEffect, useState } from "react";
import styles from "./webinar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createResponse } from "../../services/responses/createResponse";

const DEFAULT_DATA_FORM = {
    benefit1: '',
    benefit2: '',
    benefit3: ''
}

const RESPONSE_NAMES = {
    benefit1: 'webinar/3/benefit1',
    benefit2: 'webinar/3/benefit2',
    benefit3: 'webinar/3/benefit3'
}

const Webinar4 = ({ defaultResponse = null, campaignId }) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()

    useEffect(() => {
        if (defaultResponse) {
            const benefit1 = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['benefit1'])?.answer || ''
            const benefit2 = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['benefit2'])?.answer || ''
            const benefit3 = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['benefit3'])?.answer || ''
           
            setDataForm({
                benefit1,
                benefit2,
                benefit3
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
        navigate(`/campaign/${campaignId}/webinar/5/`)
    } 


    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <article className={styles.mainArticle}>
                    <section className={styles.etapa}>4/6</section>
                    <section>
                        <h1>¡Concretemos una reunión!</h1>
                        <p>Es hora de personalizar tu campaña</p>
                    </section>
                    <section>
                        <h2>3 Beneficios que recibirán si asisten</h2>
                        <input
                            type="text"
                            placeholder="1."
                            className={styles.input3}
                            value={dataForm.benefit1}
                            name="benefit1"
                            onChange={handleChangeSelectValue}
                        ></input>
                        <input
                            type="text"
                            placeholder="2."
                            className={styles.input3}
                            value={dataForm.benefit2}
                            name="benefit2"
                            onChange={handleChangeSelectValue}
                        ></input>
                        <input
                            type="text"
                            placeholder="3."
                            className={styles.input3}
                            value={dataForm.benefit3}
                            name="benefit3"
                            onChange={handleChangeSelectValue}
                        ></input>
                    </section>
                    <section>
                        <button className={styles.botonSiguiente}>Siguiente</button>
                    </section>
                </article>

                <Link className={styles.volver} to={`/campaign/${campaignId}/webinar/3/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/webinar/5/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Webinar4;
