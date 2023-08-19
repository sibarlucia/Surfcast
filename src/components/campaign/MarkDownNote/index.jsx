import { useState } from 'react'
import styles from './index.module.css'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

// import checkIcon from '../../../assets/icons/checkIcon.svg'
// import trashIcon from '../../../assets/trash_icon.svg'
// import editIcon from '../../../assets/icons/editIcon.svg'


const defualt_options = {
    preview: true,
    // toolbar: false, // oclutar iconos
    // status: false
    // previewClass: "editor-preview"
    // syncSideBySidePreviewScroll : false
}

// nota con markdown 
export const MarkDownNote = ({ notes = [], leadId = null, onDeleteNote = () => {}, onSaveNote= () => {} })  => {
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
            <div className={styles.mdContainer}>
                <SimpleMDE
                    options={defualt_options}
                    value='# hola'
                />
            </div>
            <button
                className={`pageButton pageButton--hover ${styles.saveButton}`}
                onClick={handleSaveNote}
            >
              Guardar
            </button>
        </article>
    ) 
}