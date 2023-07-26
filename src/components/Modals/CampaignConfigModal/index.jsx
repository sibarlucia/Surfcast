import { useState } from "react"
import { GenericModal } from "../GenericModal" 
import { WeekSchedule } from "../../General/WeekSchedule"
import editIcon from '../../../assets/icons/editIcon.svg' 
import earthIcon from '../../../assets/icons/tierraIcon.png' 
import styles from './index.module.css'

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

export const CampaignConfigModal = ({isOpen, onClose, onDone = () => {} }) => {
    const [scheduleData, setScheduleData] = useState(defaultData)
    const [isEditing, setIsEditing] = useState(false)

    const toggleIdEditing = () => {
        setIsEditing(!isEditing)
    }

    const handleSaveChanges = () => {
        console.log('guardar cambios de config')
        onDone()
    }

    const handleChangeScheduleData = (updatedData) => {
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
                                className={styles.countrySelector}
                                disabled={!isEditing}
                            >
                                <option value="-1" hidden>selecciona tu pais</option>
                                <option value="chile">Horario de Chile</option>
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