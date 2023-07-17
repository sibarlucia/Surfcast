import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./importacion4y5.module.css";
import { ProgressBar } from "../General/ProgressBar";
import { WeekSchedule } from "../General/WeekSchedule";

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

const progressData = [
    {
        node: {
            text: "Leads",
            color: "#7D7DFE",
            active: true,
        },
        line: {
            progress: 100, // porcentaje de la barra con color
            beginColor: "#7D7DFE",
            endColor: "#001B8D", // hace un degradado entre los dos colores si se activa
        },
    },
    {
        node: {
            text: "Personalización",
            color: "#001B8D",
            active: true,
        },
        line: {
            progress: 100, // porcentaje de la barra con color
            beginColor: "#001B8D",
            endColor: "#E14192", // hace un degradado entre los dos colores si se activa
        },
    },
    {
        node: {
            text: "Ejemplos",
            color: "#E14192",
            active: true,
        },
        line: {
            progress: 100, // porcentaje de la barra con color
            beginColor: "#E14192",
            endColor: "#9CE5FF", // hace un degradado entre los dos colores si se activa
        },
    },
    {
        node: {
            text: "Últimos ajustes",
            color: "#9CE5FF",
            active: true,
        },
    },
];
 
const Importacion4 = ({ defaultResponse = null, campaignId }) => {
    const [scheduleData, setScheduleData] = useState(defaultData)
    const navigate = useNavigate()


    const handleChangeScheduleData = (updatedData) => {
        setScheduleData(updatedData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // TODO: consumir apir para guardar la respuesta
        navigate(`/campaign/${campaignId}/importacion/5/`)
    }

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.progressBar__container}>
                    <ProgressBar data={progressData} />
                </div>

                <article>
                    <section>
                        <h1>¿Cuándo estará activa tu campaña?</h1>
                        <h2>
                            Como último paso, sólo queremos saber el horario en el que deseas
                            que se mueva la campaña.
                        </h2>
                        <h2>
                            Descuida si no estás muy seguro, más adelante podrás editarlo.
                        </h2>
                    </section>
                    <section>
                        <select className={styles.selectPaises}>
                            <option>Horario de Chile</option>
                            <option></option>
                            <option></option>
                        </select>
                    </section>
                    <div className={styles.WeekScheduleContainer}>
                        <WeekSchedule
                            data={scheduleData}
                            onChange={handleChangeScheduleData}                        
                        />
                    </div>
                    <section>
                        {/* <Link to="/importacion/5 "> */}
                        <button type="submit" className={styles.programar}>
                            Programar
                        </button>
                        {/* </Link> */}
                    </section>
                </article>
                
                <Link className={styles.volver} to={`/campaign/${campaignId}/perfilamiento/3/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/perfilamiento/3/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Importacion4;
