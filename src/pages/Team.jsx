import { useState } from "react"
import { PageLayout } from "../components/General/PageLayout"
import styles from '../styles/pages/team.module.css'
import { TeamTable } from "../components/Team/TeamTable"
import { GenericModal } from "../components/Modals/GenericModal"
import addIcon from '../assets/menu/userPlus.svg'
import trahsIcon from '../assets/trash_icon.svg'
 
const DEFAULD_DATA = [ // cambiar por consumo de api
    {
        id: 1,
        name: 'test1',
        position: 'CTO',
        email: 'test@test.com',
        location: 'Chile'
    },
    {
        id: 2,
        name: 'test2',
        position: 'CEO',
        email: 'test@test.com',
        location: 'Chile'
    },
    {
        id: 3,
        name: 'test3',
        position: 'COO',
        email: 'test@test.com',
        location: 'Chile'
    },
    {
        id: 4,
        name: 'test4',
        position: 'Developer',
        email: 'test@test.com',
        location: 'Chile'
    }
]

const Team  = () => {
    const [showModal, setShowModal] = useState(false)
    const [inviteEmails, setInviteEmails] = useState([''])

    const toggleModal = () => {
        setShowModal(!showModal)
    }


    const handleChangeInviteEmail = (elementIndex, event) => {
        const UpdateElements = [...inviteEmails]
        UpdateElements[elementIndex] = event.target.value
        setInviteEmails(UpdateElements)
    }

    const handleAddInviteEmail = () => {
        setInviteEmails([...inviteEmails, '' ])
    }

    const handleInvite = (event) => {
        event.preventDefault()
        console.log('invitar', inviteEmails)
        toggleModal()
    }

    const handleDeleteEmail = (deleteIndex) => {
        console.log({deleteIndex})
        let updateEmails = [...inviteEmails]
        updateEmails.splice(deleteIndex, 1)
        setInviteEmails(updateEmails)
    }

    return (
        <PageLayout>
            <section className={styles.mainSection}>
                <header className={styles.teamHeader}>
                    <h1>
            ¡Mi equipo!
                    </h1>
                    <div className={styles.headerInfo}>
                        <p>
              Trabajar en equipo es más divertido
                        </p>
                        <button
                            onClick={toggleModal}
                            className="pageButton pageButton--hover"
                        >
              Invitar
                        </button> 
                    </div>
                </header>
                <section className={`pageSection ${styles.tableSection}`}>
                    <div className={styles.tableContainer}>
                        <TeamTable
                            data={DEFAULD_DATA}
                        />
                    </div>
                </section>
            </section>
            <GenericModal
                isOpen={showModal}
                onClose={toggleModal}
                label="Invite modal"
                // className=""
            >
                <section className={styles.inviteModal}>
                    <header className={styles.inviteModalHeader}>
                        <img
                            src={addIcon}
                            alt="invitar"
                        />
                        <div className={styles.inviteModalHeaderInfo}>
                            <h3>
                Haz crecer tu equipo
                            </h3>
                            <p>
                Incorpora al nuevo integrante por medio de una invitación
                            </p>
                        </div>
                    </header>
                    <form
                        onSubmit={handleInvite}
                        className={styles.inviteModalForm}
                    >
                        {
                            inviteEmails.map((item, index) => {
                                return (
                                    <div
                                        key={`inviteEmail-${index}`}
                                        className={styles.inviteModalInputContainer}
                                    >
                                        <input
                                            placeholder="Escribir aquí el correo"
                                            type="email"
                                            value={item}
                                            onChange={(event) => {
                                                handleChangeInviteEmail(index, event)
                                            }}
                                        />
                                        {
                                            index > 0 && (
                                                <button
                                                    type="button"
                                                    className={styles.inviteModalInputDelete}
                                                    onClick={() => {
                                                        handleDeleteEmail(index)
                                                    }}  
                                                >
                                                    <img
                                                        src={trahsIcon}
                                                        alt="Eliminar"
                                                    />
                                                </button>
                                            )
                                        }
                   
                                    </div>
                                )
                            })
                        }
                        <button 
                            type="button"
                            onClick={handleAddInviteEmail}
                            className={styles.inviteModalAddTeamButton}
                        >
              + Aumentar un miembro
                        </button>
                        <button
                            className={`pageButton pageButton--hover ${styles.inviteModalsubmitButton}`}
                        >
              Enviar invitación
                        </button>
                    </form>
                </section>
            </GenericModal>
        </PageLayout>
    )
}

export default Team