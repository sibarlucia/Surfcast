import { useState, useEffect } from "react"
import { GenericModal } from "../GenericModal" 
import { WeekSchedule } from "../../General/WeekSchedule"
import editIcon from '../../../assets/icons/editIcon.svg' 
import earthIcon from '../../../assets/icons/tierraIcon.png' 
import styles from './index.module.css'
import { getSchedules } from "../../../services/schedules/getSchedules"
import { updateSchedules } from "../../../services/schedules/updateSchedule"
import { getIANATimeZone } from "../../../utils/getIANATimeZone"

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

export const CampaignConfigModal = ({isOpen, onClose, onDone = () => {}, campaignId }) => {
    const [scheduleData, setScheduleData] = useState(defaultData)
    const [isEditing, setIsEditing] = useState(false)

    console.log(scheduleData)

    useEffect(() => {
        getSchedules()
            .then(response => {
                const { data } = response
                // TODO: api fallando
                // Filtrar por id de campaña
                setScheduleData(data)
            })
    }, [])

    const toggleIdEditing = () => {
        setIsEditing(!isEditing)
    }

    const handleSaveChanges = async () => {
        console.log('guardar cambios de config')
        const { data } = await updateSchedules({...scheduleData, campain_id: parseInt(campaignId) })
        console.log('updated data', data)
        onDone()
    }

    const handleChangeScheduleData = (updatedData) => {
        setScheduleData(updatedData)
    }


    const handleChangeTimeZone = async (event) => {
        const { value } = event.target
        const updatedData = { ...scheduleData }
        updatedData.timezone = value
        setScheduleData(updatedData)
    }

    return (
        <GenericModal isOpen={isOpen} onClose={onClose}>
            <section className={`pageScrollbar ${styles.modalSection}`}>
                <h1 className={styles.modalTitle}>
                    Configura tu horario
                </h1>
                <p className={styles.modalDescription}>
                    Programa a detalle el horario que desees
                </p>
                <article className={styles.inforContainer}>
                    <button
                        onClick={toggleIdEditing}
                        className={styles.editButton}
                    >
                        <img
                            src={editIcon}
                            alt="Editar"
                        /> 
                        Editar
                    </button> 
                    <div className={styles.selectorContainer}>
                        <label className={styles.selectorLabel}>
                            <img
                                src={earthIcon}
                                alt="pais"
                                style={!isEditing ? {opacity: '0.4'} : {}}
                            />
                            <select
                                onChange={handleChangeTimeZone}
                                value={scheduleData.timezone}
                                className={styles.countrySelector}
                                disabled={!isEditing}
                            >
                                <option hidden value={""}>
                                    Selecciona tu zona horaria
                                </option>

                                {
                                    getIANATimeZone().map((item, index) => {
                                        return (
                                            <option
                                                value={item.value}
                                                key={`timeZone-option-${index}`}
                                            >
                                                {item.country}
                                            </option>
                                        )
                                    })

                                }
                            </select>
                        </label>
                    </div>
                    <div>
                        <WeekSchedule
                            disabled={!isEditing}
                            data={scheduleData}
                            onChange={handleChangeScheduleData}   
                        />
                    </div>
                </article>
                {
                    isEditing && (
                        <button
                            onClick={handleSaveChanges}
                            className={`pageButton pageButton--hover ${styles.saveButton}`}
                        >
                            Guardar nueva programación
                        </button>
                    )
                }
            </section>

        </GenericModal>
    )
}