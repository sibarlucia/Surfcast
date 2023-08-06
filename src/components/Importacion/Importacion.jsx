import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "../General/ProgressBar";
import styles from "./importacion.module.css";
import { createResponse } from "../../services/responses/createResponse";
import { useNavigate } from "react-router-dom";
// import { FileDrop } from 'react-file-drop';
import { FileDroper } from "../General/FileDroper";
import alert from 'sweetalert2'
import { uploadLeadsByFile } from "../../services/leads/uploadLeadsByFile";

// controla como se ve la barra de progreso

const progressData = [
    {
        node: {
            text: "Leads",
            color: "#7D7DFE",
            active: true,
        },
        line: {
            progress: 35, // porcentaje de la barra con color
            beginColor: "#7D7DFE",
            // endColor: '#000000' // hace un degradado entre los dos colores si se activa
        },
    },
    {
        node: {
            text: "Personalización",
            color: "#CECECE",
            active: false,
        },
    },
    {
        node: {
            text: "Ejemplos",
            color: "#CECECE",
            active: false,
        },
    },
    {
        node: {
            text: "Últimos ajustes",
            color: "#CECECE",
            active: false,
        },
    },
];

const DEFAULT_DATA_FORM = {
    listName: '',
    importType: '',
    importValue: ''
}

const RESPONSE_NAMES = {
    listName: 'importacion/1/listName',
    importType: 'importacion/1/importType',
    importValue: 'importacion/1/importValue'
}

const Importacion = ({ defaultResponse = [], campaignId}) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const [boton, setBoton] = useState("");
    const navigate = useNavigate()

    const estiloBoton = styles.button3;
    const botonSeleccionado = styles.selected;
    console.log(dataForm)

    useEffect(() => {
        if (defaultResponse) {
            const listName = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['listName'])?.answer || ''
            const importType = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['importType'])?.answer || ''
            const importValue = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['importValue'])?.answer || ''
            setDataForm({
                listName,
                importType,
                importValue
            })
            setBoton(importType)
        }
    }, [defaultResponse])


    const handleFile = (files) => {
        const file = files[0]
        if (file.type !== 'text/csv') {
            alert.fire({
                text: 'El archivo debe ser un SVG',
                icon: 'Warning',
            })
            return
        }
        setDataForm({ ...dataForm, importValue: file })
    }

    const handleButtonClick = (accion) => {
        setBoton(accion);
        setDataForm({ ...dataForm, importType: accion, importValue: '' })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        Object.keys(dataForm).forEach(inputName => {
            let type = 'string' 
            if (inputName === 'importValue' && dataForm.importType === 'cargar') {
                type = 'file'
                uploadLeadsByFile(campaignId, dataForm.importValue)
            } else {
                createResponse({
                    question_name: RESPONSE_NAMES[inputName],
                    type,
                    answer: dataForm[inputName],
                    campaign_id: campaignId
                })
            }
        })
        navigate(`/campaign/${campaignId}/importacion/2/`)
    };

    const handleChangeInput = (event) => {
        const { value, name } = event.target
        setDataForm({ ...dataForm, [name]: value })
    }

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.progressBar__container}>
                    <ProgressBar data={progressData} />
                </div>
                <article className={styles.mainArticle}>
                    <h1>Escoge el método para importar tus leads</h1>
                    <h2>
            Así podremos conocer, clasificar y desarrollar adecuadamente a tu
            público objetivo.
                    </h2>
                    <section></section>

                    <section>
                        <p>¿Cómo se llamará tu lista?</p>
                        <input
                            type="text"
                            placeholder="CEO y fundadores, Ventas, Managers..."
                            value={dataForm.listName}
                            name="listName"
                            onChange={handleChangeInput}
                            required
                        />
                    </section>
                    <p>¿Cómo te gustaría importarlos?</p>
                    <section id={styles.botones}>
                        <button
                            type='button'
                            className={
                                boton === 'buscar' ? botonSeleccionado : estiloBoton
                            }
                            onClick={() => handleButtonClick("buscar")}
                        >
                          Búsqueda de Linkedin
                        </button>
                        <button
                            type='button'
                            className={boton === 'cargar' ? botonSeleccionado : estiloBoton}
                            onClick={() => handleButtonClick("cargar")}
                        >
                          Cargar Archivo CSV
                        </button>
                        <button
                            type='button'
                            className={boton === 'usar' ? botonSeleccionado : estiloBoton}
                            onClick={() => handleButtonClick("usar")}
                        >
                          Usando AI
                        </button>
                    </section>
                    <section>
                        {boton === "buscar" && (
                            <input
                                name='importValue'
                                value={dataForm.importValue}
                                onChange={handleChangeInput}
                                type="text"
                                required
                                placeholder="https://www.linkedin.com/search/"
                            />
                        )}

                        {boton === "cargar" && (
                            <div className={styles.files}>
                                <h2>Carga tus leads desde un archivo exel o scv</h2>
                                <FileDroper
                                    onDrop={handleFile}
                                    accept=".csv,.xlsx"
                                />
                                {
                                    typeof dataForm.importValue === 'object' && (
                                        <span>
                                            {dataForm.importValue.name}
                                        </span>
                                    ) 
                                }
                            </div>
                        )}
                    </section>
                    <section>
                        <button
                            className={styles.button2}
                            type="submit"
                        >
                              importar Leads
                        </button>
                    </section>
                </article>

                <Link className={styles.volver} to="/perfilamiento/3">
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to="/perfilamiento/3">
                    <img src="/src/assets/crearcampañadespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Importacion;
