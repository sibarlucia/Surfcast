import { useEffect, useState } from "react";
import styles from "./newsletter.module.css";
import { Link, useNavigate } from "react-router-dom";
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



const Newsletter2 = ({ defaultResponse = null, campaingId }) => {
    const [scheduleData, setScheduleData] = useState(defaultData)
    const navigate = useNavigate()
    

    // useEffect(() => {
    //     if (defaultResponse) {
    //         const theme = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['theme'])?.answer || ''
    //         setDataForm({
    //             theme,
    //         })
    //     }
    // }, [defaultResponse])

    const handleChangeScheduleData = (updatedData) => {
        setScheduleData(updatedData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // TODO: consumir apir para guardar la respuesta
        navigate(`/campaign/${campaingId}/newsletter/3/`)
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
                        <WeekSchedule
                            data={scheduleData}
                            onChange={handleChangeScheduleData}                        
                        />
                    </div>
                </div> 

                <div>
                    <button className={styles.botonSiguiente}>Siguiente</button>
                </div>

                <Link className={styles.volver} to={`/campaign/${campaingId}/newsletter/1/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaingId}/newsletter/3/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Newsletter2;
