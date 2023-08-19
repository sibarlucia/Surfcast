import { useState, useEffect } from "react";
import styles from "./newsletter.module.css";
import { Link, useNavigate } from "react-router-dom";
import { WeelDaysSchedule } from "../General/WeekDaysSchedule";
import { createResponse } from "../../services/responses/createResponse";


const DEFAULT_DATA_FORM = {
    frequency: '',
}

const RESPONSE_NAMES = {
    frequency: 'newsletter/2/frequency',
}

const Newsletter2 = ({ defaultResponse = null, campaignId }) => {
    const navigate = useNavigate()
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)

    console.log(dataForm)

    useEffect(() => {
        if (defaultResponse) {
            const frequency = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['frequency'])?.answer || ''
            setDataForm({
                frequency,
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

        navigate(`/campaign/${campaignId}/newsletter/3/`)
    }

    const handleUpdatefrequency = (updateData) => {
        setDataForm({ ...dataForm, frequency: updateData })
    }

    return (
        <div className={styles.mainDiv}> 
            <form onSubmit={handleSubmit}>
                <div className={styles.etapa}>2/5</div>

                <div>
                    <h1>¡Aumentemos tus suscripciones!</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>¿Con qué frecuencia se publicará?</h2>

                    <div>
                        <WeelDaysSchedule
                            selectedDays={dataForm.frequency}
                            onChange={handleUpdatefrequency}
                        />
                    </div>
                </div> 

                <div>
                    <button className={styles.botonSiguiente}>Siguiente</button>
                </div>

                <Link className={styles.volver} to={`/campaign/${campaignId}/newsletter/1/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/newsletter/3/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Newsletter2;
