import { useEffect, useMemo, useState } from "react"
import { GenericModal } from "../GenericModal" 
import defaultProfile from '../../../assets/campaign/defaultProfile.svg'
import styles from './index.module.css'
// import { LeadNotes } from "../../campaign/LeadNotes"
import alert from 'sweetalert2'
import ActividadReciente from "../../campaign/ActividadReciente/ActividadReciente"
import { MarkDownNote } from "../../campaign/MarkDownNote"
import { getActividadLead } from "../../../services/campaign/getActividadLeads"


export const LeadInfoModal = ({leadData, onClose, onDone = () => {}, campaignName = '', onDeleteLead = () => {}, campaignId }) => {
    
    const [actividadLead, setActividadLead] = useState([])
    useEffect(() => {
        async function fetchActividadLead() {
            try {
                let actividad = []
                actividad = await getActividadLead(leadData?.id)
                setActividadLead(actividad)
            
                console.log(actividad);
            }
            catch (error) {
                console.error("API Request Error:", error);
            }
        }
        fetchActividadLead()
    },[leadData]) 

    console.log(actividadLead);

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

    // console.log(leadData)
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
                            {/* <div className={styles.secondaryLeadDataContainerItem}>
                                <p>Número de contacto</p>
                                <p>+58998764567</p>
                            </div> */}
                            <div className={styles.secondaryLeadDataContainerItem}>
                                <p>Email de contacto</p>
                                <p>{leadData.email}</p>
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
                        data={actividadLead}
                    />
                </article>
                <article className={styles.leadinfoArticle}>
                    <div className={styles.leadinfoArticleHeader}>
                        <h2>
                            Notas
                        </h2>
                    </div>
                    <MarkDownNote
                        campaignId={campaignId}
                        leadId={leadData.id}
                    />
                </article>
            </section>
        </GenericModal>
    )
}