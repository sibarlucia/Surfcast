import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./importacion4y5.module.css";
import { ProgressBar } from "../General/ProgressBar";
import { WeekSchedule } from "../General/WeekSchedule";
import alert from 'sweetalert2'
// import { getSchedules } from "../../services/schedules/getSchedules";
import { addSchedules } from "../../services/schedules/addSchedule";
import { updateSchedules } from "../../services/schedules/updateSchedule";
import { getIANATimeZone } from "../../utils/getIANATimeZone";
import { getScheduleByCampaign } from "../../services/schedules/getScheduleByCampaign";


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
 
const Importacion4 = ({ defaultResponse = null, campaignId }) => { // eslint-disable-line
    const [scheduleData, setScheduleData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getScheduleByCampaign({ campaignId })
            .then(response => {
                const { data } = response
                setScheduleData(data)
            })
    }, [campaignId])


    const handleChangeScheduleData = async (updatedData) => {
        // consumir api para actilizar schedule

        if (scheduleData.id) {
            // creado - debe actualizar
            const { data } = await updateSchedules({...updatedData, campain_id: parseInt(campaignId) })
            console.log(data)

        } else {
            // debe crarlo
            const { data } = await addSchedules({...updatedData, campain_id: parseInt(campaignId) })
            console.log(data)
        }
         
        setScheduleData(updatedData)
    }

    const handleChangeTimeZone = async (event) => {
        const { value } = event.target
        console.log({value})
        const updatedData = { ...scheduleData }

        if (updatedData.id) {
            // creado - debe actualizar
            const { data } = await updateSchedules({...updatedData, campain_id: parseInt(campaignId) })
            console.log(data)
        } else {
            // debe crarlo
            const { data } = await addSchedules({...updatedData, campain_id: parseInt(campaignId) })
            console.log(data)
        }

        updatedData.timezone = value
        setScheduleData(updatedData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // navigate(`/campaign/${campaignId}/importacion/5/`) // comentado por el momento
        alert.fire({
            title: 'Campaña configurada',
            text: 'Tu campaña fue configurada correctamente',
            icon: 'success',
        })
        navigate(`/campaign`)
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
                        <select
                            className={styles.selectPaises}
                            onChange={handleChangeTimeZone}
                            value={scheduleData.timezone}
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
