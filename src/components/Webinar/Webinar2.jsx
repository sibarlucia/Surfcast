import { useState, useEffect } from "react";
import styles from "./webinar2.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getIANATimeZone } from "../../utils/getIANATimeZone";
import { WeelDaysSchedule } from "../General/WeekDaysSchedule";
import { hoursOptions } from "../../utils/getHoursOptions";
import { createResponse } from "../../services/responses/createResponse";
 
const DEFAULT_DATA_FORM = {
    timezone: '',
    frequency: '',
}

const RESPONSE_NAMES = {
    timezone: 'webinar/2/timezone',
    frequency: 'webinar/2/frequency',
    startTime: 'webinar/2/startTime',
    endTime: 'webinar/2/endTime'
}

const Webinar2 = ({ defaultResponse = null, campaignId }) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (defaultResponse) {
            const timezone = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['timezone'])?.answer || ''
            const frequency = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['frequency'])?.answer || ''
            const startTime = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['startTime'])?.answer || ''
            const endTime = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['endTime'])?.answer || ''
            setDataForm({
                timezone,
                frequency,
                startTime,
                endTime
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
        navigate(`/campaign/${campaignId}/webinar/3/`)
    }

    const handleChangeTimeZone = async (event) => {
        const { value } = event.target
        setDataForm({ ...dataForm, timezone: value })
    }

    const handleUpdatefrequency = (updateData) => {
        setDataForm({ ...dataForm, frequency: updateData })
    }

    const handleChageTime = (event) => {
        const { name, value } = event.target
        setDataForm({ ...dataForm, [name]: value })
    }

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <article className={styles.mainArticle}>
                    <section>
                        <p className={styles.etapa}>2/6</p>
                    </section>
                    <section>
                        <h1>¡Invitemos a un webinar!</h1>
                        <p>Es hora de personalizar tu campaña</p>
                    </section>
                    <section className={styles.questionContainer}>
                        <h2>Define el horario en que se desarrollará</h2>
                        <select
                            className={styles.selectPaises}
                            onChange={handleChangeTimeZone}
                            value={dataForm.timezone}
                        >
                            <option hidden value={""}>
                                Selecciona tu zona horaria
                            </option>
                            {
                                getIANATimeZone().map((item, index) => {
                                    return (
                                        <option
                                            value={item.value}
                                            key={`timeZon-option-${index}`}
                                        >
                                            {item.country}
                                        </option>
                                    )
                                })

                            }
                        </select>
                    </section>
                    <section className={styles.questionContainer}> 
                        <WeelDaysSchedule
                            className={styles.webinarDaysSchedule}
                            selectedDays={dataForm.frequency}
                            onChange={handleUpdatefrequency}
                        />
                    </section>
                    <section className={`${styles.horarios} ${styles.questionContainer}`}>
                        <select
                            name='startTime'
                            value={dataForm.startTime}
                            onChange={handleChageTime}
                        >
                            <option value="" hidden>
                                Desde
                            </option>
                            {
                                hoursOptions.map((item) => {
                                    return (
                                        <option
                                            value={item}
                                            key={`starthours-${item}`}
                                        >
                                            {item}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <p className={styles.selectDivider}>
                                    -
                        </p>
                        <select
                            name='endTime'
                            value={dataForm.endTime}
                            onChange={handleChageTime}
                        >
                            <option value="" hidden>
                                Hasta
                            </option>
                            {
                                hoursOptions.map((item) => {
                                    return (
                                        <option
                                            value={item}
                                            key={`endhours-${item}`}
                                        >
                                            {item}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </section>
                    <section>
                        <button className={styles.botonSiguiente}>Siguiente</button>
                    </section>
                </article>

                <Link className={styles.volver} to="/webinar/1">
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to="/webinar/3">
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Webinar2;
