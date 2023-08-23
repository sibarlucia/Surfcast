import { useState, useEffect, Fragment } from 'react'
import styles from './index.module.css'
import ReactMarkdown from 'react-markdown'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { getLeadNotes } from "../../../services/notes/getLeadNotes"
import { updateLeadNote } from '../../../services/notes/UpdateLeadNote';
import { addLeadNote } from '../../../services/notes/addLeadNote';

const editorOptions = {
    spellChecker: false,
    autofocus: true
} 

// nota con markdown 
export const MarkDownNote = ({ leadId = null, campaignId })  => {
    const [isEditing, setIsEditing] = useState(false)
    const [noteData, setNoteData] = useState({})
    const [editText, setEditText] = useState('')

    useEffect(() => {
        if (leadId) {
            getLeadNotes({leadId})
                .then(response => {
                    const { data } = response
                    setNoteData(data)
                })
        }
    }, [leadId])

    useEffect(() => {
        setEditText(isEditing.markdown_note)
    }, [isEditing.markdown_note])

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    const handleSaveNote = async () => {
        // guardar nota
        let newNoteData = {}
        if (noteData.id) {
            // actualizar nota
            const { data } = await updateLeadNote({
                leadId,
                updateText: editText
            })
            newNoteData = data
        } else {
            // crea nota
            // FIXME: fallando por el owner id 
            const { data } = await addLeadNote({
                campaignId,
                leadId,
                updateText: editText
            })
            console.log(data)
            newNoteData = { ...noteData, markdown_note: editText }
        }

        setNoteData(newNoteData)
        // setNoteData({ ...noteData, markdown_note: editText })
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