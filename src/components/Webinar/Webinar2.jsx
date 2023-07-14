import React, { useState } from "react";
import styles from "./webinar2.module.css";
import { Link, useNavigate } from "react-router-dom";
import { WeekSchedule } from "../General/WeekSchedule";
// import TimePicker from "react-time-picker";
// import "react-clock/dist/Clock.css";
// import "react-time-picker/dist/TimePicker.css";

const defaultData = [
    {
        dayName: 'DOM',
        active: false,
        startTime: '',
        endTime: ''
    },
    {
        dayName: 'LUN',
        active: true,
        startTime: '08:00',
        endTime: '20:00'   
    },
    {
        dayName: 'MAR',
        active: true,
        startTime: '08:00',
        endTime: '20:00'   
    },
    {
        dayName: 'MIER',
        active: true,
        startTime: '08:00',
        endTime: '20:00'    
    },
    {
        dayName: 'JUE',
        active: true,
        startTime: '08:00',
        endTime: '20:00'    
    },
    {
        dayName: 'VIER',
        active: true,
        startTime: '08:00',
        endTime: '20:00' 
    },
    {
        dayName: 'SAB',
        active: false,
        startTime: '',
        endTime: '' 
    }
]


const Webinar2 = ({ defaultResponse = null, campaignId }) => {
    const [scheduleData, setScheduleData] = useState(defaultData)
    const navigate = useNavigate()

    const handleChangeScheduleData = (updatedData) => {
        setScheduleData(updatedData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // TODO: consumir apir para guardar la respuesta
        navigate(`/campaign/${campaignId}/webinar/3/`)
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
                    <section>
                        <h2>Define el horario en que se desarrollará</h2>
                        <select className={styles.selectPaises}>
                            <option>Horario de Chile</option>
                            <option>Horario de </option>
                            <option>Horario de </option>
                            <option>Horario de </option>
                        </select>
                    </section>
                    <section className={styles.horarios}>
                        <WeekSchedule
                            data={scheduleData}
                            onChange={handleChangeScheduleData}                        
                        />
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
