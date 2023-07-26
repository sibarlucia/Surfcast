import { useState } from "react"; 
import { GenericModal } from "../GenericModal"; 
import styles from '../../../styles/pages/team.module.css'
export const NewCampaingModal = ({isOpen, onClose, onDone }) => {
    const [name, setName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onDone(name)
        setName('')
    }



    return (
        <GenericModal isOpen={isOpen} onClose={onClose}>
            <section className={styles.inviteModal}>
                <header className={styles.inviteModalHeader}>
                    {/* <img
                        src={addIcon}
                        alt="invitar"
                    /> */}
                    <div className={styles.inviteModalHeaderInfo}>
                        <h3>
                          Crea una nueva campaña
                        </h3>
                    </div>
                </header>
                <form
                    onSubmit={handleSubmit}
                    className={styles.inviteModalForm}
                >
                    <div
                        className={styles.inviteModalInputContainer}
                    >
                        <input
                            placeholder="Escribir aquí el nombre de tu campaña"
                            type="text"
                            value={name}
                            onChange={(event) => {setName(event.target.value)}}
                        />
                    </div>

                
                    <button
                        className={`pageButton pageButton--hover ${styles.inviteModalsubmitButton}`}
                    >
                      Crear
                    </button>
                </form>
            </section>

        </GenericModal>
    )


}