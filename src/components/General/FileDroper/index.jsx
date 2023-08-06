import { FileDrop } from "react-file-drop"
import styles from './index.module.css'

export const FileDroper = ({ onDrop, id = 'file', accept = '' }) => {
    // const [fileHover, toggleFileHover] = useReducer((state) => !state, false)


    const handleDropFile = (files) => {
        onDrop(files)
    }

    const handleSelectFile = (event) => {
        if (event.target.files) {
            onDrop(event.target.files)
        }
    }

    return (
        <FileDrop
            onDrop={handleDropFile}
            // onDragOver={toggleFileHover}
            // onDragLeave={toggleFileHover}
        >
            <label
                className={styles.label}
                htmlFor={id}
            >
                <input
                    className={styles.input2}
                    id={id} type="file"
                    onChange={handleSelectFile}
                    accept={accept}
                ></input>
                <img src="/src/assets/flecha.png"></img>
            </label>
        </FileDrop>
    )

}