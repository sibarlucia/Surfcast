import { useState } from 'react'
import styles from './index.module.css'
import checkIcon from '../../../assets/icons/checkIcon.svg'
import trashIcon from '../../../assets/trash_icon.svg'
import editIcon from '../../../assets/icons/editIcon.svg'

// lista de notas ( no markdown )
export const LeadNotes = ({ notes = [], leadId = null, onDeleteNote = () => {}, onSaveNote= () => {} })  => {
    const [newNote, setNewNote] = useState('')
    const [deleteIndex, setDeleteIndex] = useState(null)

    const handleSaveNote = () => {
        if (newNote) {
            onSaveNote(newNote)
            setNewNote('')
        }
    }

    const handleSelectedDeleteItem = (index) => {
        if (deleteIndex === index) {
            onDeleteNote(index)
            setDeleteIndex(null)
            return
        }
        setDeleteIndex(index)
        setTimeout(() => {
            setDeleteIndex(null)
        }, 5000)
    }

    return (
        <article className={styles.notesContainer}>
            <ul className={`pageScrollbar ${styles.noteList}`}>
                {
                    notes.map((note, index) => {
                        return (
                            <li
                                className={styles.noteItem}
                                key={`lead-${leadId}-note-${index}`}
                            >
                                <div className={styles.noteItemContainer}>
                                    <img
                                        src={checkIcon}
                                        alt="check"
                                    />
                                    <p>
                                        {note}
                                    </p>
                                </div>
                                <button
                                    className={styles.deleteButton}
                                    title='Eliminar'
                                    onClick={() => {handleSelectedDeleteItem(index)}}
                                >
                                    {
                                        deleteIndex === index
                                            ? (
                                                <span>
                                                  Click para confirmar
                                                </span>
                                            )
                                            : (
                                                <img src={trashIcon} alt="Eliminar" />
                                            )
                                    }
                                </button>
                            </li>
                        )
                    })
                }
                <li
                    className={styles.noteItem}
                >
                    <label className={styles.newNoteContainer}>
                        <img
                            src={editIcon}
                            alt="Editar"
                        />
                        <input
                            placeholder='Agregar más'
                            type="text"
                            value={newNote}
                            onChange={(event) => {setNewNote(event.target.value)}}
                        />
                    </label>
                </li>
            </ul>
            <button
                className={`pageButton pageButton--hover ${styles.saveButton}`}
                onClick={handleSaveNote}
            >
              Guardar
            </button>
        </article>
    ) 
}