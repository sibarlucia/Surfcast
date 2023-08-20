import { useState, useEffect, Fragment } from 'react'
import styles from './index.module.css'
import ReactMarkdown from 'react-markdown'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { getLeadNotes } from "../../../services/notes/getLeadNotes"
// import checkIcon from '../../../assets/icons/checkIcon.svg'
// import trashIcon from '../../../assets/trash_icon.svg'
// import editIcon from '../../../assets/icons/editIcon.svg'

const editorOptions = {
    spellChecker: false,
    autofocus: true
} 

const testNote = {
    "markdown_note": "# Nota de Actualización 📝\n\n> Propietario y editor: Usuario con ID 14\n\n**Asociaciones**:\n- Lead ID: 3\n- Campaña ID: 14\n\n---\n\nPor favor, añadir el contenido relevante aquí.",
    "owner_id": 2,
    "editor_id": 2,
    "lead_id": 3,
    "campaign_id": 14,
    "id": 1
}

// nota con markdown 
export const MarkDownNote = ({ leadId = null })  => {
    const [isEditing, setIsEditing] = useState(false)
    const [noteData, setNoteData] = useState({})
    const [editText, setEditText] = useState('')

    useEffect(() => {
        if (leadId) {
            getLeadNotes({ leadId})
                .then(response => {
                    const { data } = response
                    console.log(data) 
                    // setNoteData(data) // TODO: descomentar
                    setNoteData(testNote) // TODO: eliminar datos de prueba
                })
        }
    }, [leadId])

    useEffect(() => {
        setEditText(isEditing.markdown_note)
    }, [isEditing.markdown_note])

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    const handleSaveNote = () => {
        // guardar nota
        // TODO: consumir api para guardar nota
        setNoteData({ ...noteData, markdown_note: editText })
    }

    const handleChangeNote = (newText) => {
        setEditText(newText)
    }

    return (
        <article className={styles.notesContainer}>
            <div className={styles.mdContainer}>
                {
                    isEditing
                        ? (
                            <SimpleMDE
                                options={editorOptions}
                                onChange={handleChangeNote}
                                value={editText}
                            />
                        )
                        : (
                            <ReactMarkdown>
                                {noteData.markdown_note}
                            </ReactMarkdown>
                        )
                }
            </div>
            <div className={`${styles.saveButtonContianer}`}>
                {
                    isEditing
                        ? (
                            <Fragment>
                                <button
                                    className={`pageButton pageButton--empty pageButton--hover ${styles.saveButton}`}
                                    onClick={() => {

                                        setEditText(noteData.markdown_note)
                                        toggleEdit()
                                    }}
                                >
                                    Cancelar
                                </button>
                                <button
                                    className={`pageButton pageButton--hover ${styles.saveButton}`}
                                    onClick={() => {
                                        handleSaveNote()
                                        toggleEdit()
                                    }}
                                >
                                    Guardar
                                </button>
                            </Fragment>
                        
                        ) 
                        : (
                            <button
                                className={`pageButton pageButton--empty pageButton--hover ${styles.saveButton}`}
                                onClick={() => {
                                    setEditText(noteData.markdown_note)
                                    toggleEdit()
                                }}
                            >
                                Editar
                            </button>
                        )
                }
            </div>
            
        </article>
    ) 
}