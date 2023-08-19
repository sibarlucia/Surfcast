import { useEffect, useMemo, useState } from "react"
import { GenericModal } from "../GenericModal" 
import defaultProfile from '../../../assets/campaign/defaultProfile.svg'
import styles from './index.module.css'
// import { LeadNotes } from "../../campaign/LeadNotes"
import alert from 'sweetalert2'
import ActividadReciente from "../../campaign/ActividadReciente/ActividadReciente"
import { MarkDownNote } from "../../campaign/MarkDownNote"
import { getLeadNotes } from "../../../services/notes/getLeadNotes"

const DefaultActivity = [
    {
        text: 'Aceptó la solicitud y se envió mensaje',
        type: 'response'
    },
    {
        text: 'Se envió solicitud de contacto',
        type: 'invitation' //event
    },
    {
        text: 'Se vió el perfil de Javier Mansilla',
        type: 'view'
    },
]


export const LeadInfoModal = ({leadData, onClose, onDone = () => {}, campaignName = '', onDeleteLead = () => {} }) => {
    const [noteData, setNoteData] = useState({}) 

    console.log({leadData})

    useEffect(() => {
        if (leadData) {
            getLeadNotes({ leadId: leadData.id })
                .then(response => {
                    const { data } = response
                    if (data.length) {
                        setNoteData(data[0])
                    }
                })
        }
    }, [leadData])

    const handleAddNote = (newNote) => {
        // setLeadNotes([ ...leadNotes, newNote ])
    }

    const handleDeleteNote = (deleteIndex) => {
        // const updateNotes = [...leadNotes]
        // updateNotes.splice(deleteIndex, 1)
        // setLeadNotes(updateNotes)
    }


    

    const handleDeleteLead = async () => { // eslint-disable-line
        const { isConfirmed } = await alert.fire({
            title: `Borrar lead`,
            text: "¿Estás seguro esta acción no se puede deshacer?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#cc3e34',
            cancelButtonColor: '#1597E5',
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar'
        })
        if (isConfirmed) {
            onDeleteLead(leadData)
        } 
    }

    const isOpen = useMemo(() => {
        if (leadData) return true
        return false
    }, [leadData])

    console.log(leadData)
    if (!isOpen) return null

    return (
        <GenericModal isOpen={isOpen} onClose={onClose}>
            <section className={` pageScrollbar ${styles.modalSection}`}>
                <header className={styles.modalHeader}>
                    <aside className={styles.headerOptions}>
                        {/* <button
                            className="pageButton pageButton--empty"
                            onClick={handleDeleteLead}
                        >
                            Eliminar
                        </button> */}
                        <button
                            onClick={() => {onDone()}}
                        >
                            X
                        </button>
                    </aside>
                    <img
                        className={styles.profile}
                        src={defaultProfile}
                        alt="perfil"
                    />
                    <div className={styles.profileDataContainer}>
                        <section className={styles.mainLeadDataContainer}>
                            <h1>
                                {leadData.full_name}
                            </h1>
                            <p>
                                {leadData.job}
                            </p>
                        </section>
                        <section className={styles.secondaryLeadDataContainer}>
                            <div className={styles.secondaryLeadDataContainerItem}>
                                <p>Número de contacto</p>
                                <p>+58998764567</p>
                            </div>
                            <div className={styles.secondaryLeadDataContainerItem}>
                                <p>Compañía</p>
                                <p>{leadData.company_name}</p>
                            </div>
                            <div className={styles.secondaryLeadDataContainerItem}>
                                <p>Campañas</p>
                                <p>{campaignName}</p>
                            </div>
                        </section>
                    </div>
                </header>
                <article className={styles.leadinfoArticle}>
                    <div className={styles.leadinfoArticleHeader}>
                        <h2>
                            Actividad
                        </h2>
                    </div>
                    <ActividadReciente
                        listData={DefaultActivity}
                    />
                </article>
                <article className={styles.leadinfoArticle}>
                    <div className={styles.leadinfoArticleHeader}>
                        <h2>
                            Notas
                        </h2>
                    </div>
                    <MarkDownNote
                        onSaveNote={handleAddNote}
                        onDeleteNote={handleDeleteNote}
                        leadId={leadData.id}
                        note={noteData}
                    />
                    {/* <LeadNotes
                        onSaveNote={handleAddNote}
                        onDeleteNote={handleDeleteNote}
                        leadId={leadData.id}
                        notes={leadNotes}
                    /> */}

                </article>
            </section>
        </GenericModal>
    )
}