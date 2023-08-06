import { useState } from "react";
import styles from "./webinar2.module.css";
import { Link, useNavigate } from "react-router-dom";
import { WeekSchedule } from "../General/WeekSchedule";


const defaultData = {
    campain_id: 0,
    monday_bool: true,
    tuesday_bool: true,
    wednesday_bool: true,
    thursday_bool: true,
    friday_bool: true,
    saturday_bool: false,
    sunday_bool: false,
    monday_time: "09:00-18:00",
    tuesday_time: "09:00-18:00",
    wednesday_time: "09:00-18:00",
    thursday_time: "09:00-18:00",
    friday_time: "09:00-18:00",
    saturday_time: "",
    sunday_time: "",
    timezone: "America/Santiago",
}


const Webinar2 = ({ campaignId }) => {
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
