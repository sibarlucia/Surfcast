import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "../General/ProgressBar";
import styles from "./importacion.module.css";
import { createResponse } from "../../services/responses/createResponse";
import { useNavigate } from "react-router-dom";
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
    importValue: null
}

const RESPONSE_NAMES = {
    listName: 'test_importacion/1/listName',
    importType: 'test_importacion/1/importType',
    importValue: 'test_importacion/1/importValue'
}

const Importacion = ({ defaultResponse = [], campaingId}) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const [boton, setBoton] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        if (defaultResponse) {
            const listName = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['listName']).answer || ''
            const importType = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['importType']).answer || ''
            const importValue = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['importValue']).answer || ''
            setDataForm({
                listName,
                importType,
                importValue
            })
            setBoton(importType)
        }
    }, [defaultResponse])


    const handleButtonClick = (accion) => {
        setBoton(accion);
        const defaultValue = accion === 'buscar' ? '' : null
        setDataForm({ ...dataForm, importType: accion, importValue: defaultValue })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        Object.keys(dataForm).forEach(inputName => {
            createResponse({
                question_name: RESPONSE_NAMES[inputName],
                type: 'string',
                answer: dataForm[inputName],
                campaign_id: campaingId
            })
        })
        navigate(`/campaign/${campaingId}/importacion/2/`)
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
                            className={styles.button3}
                            onClick={() => handleButtonClick("buscar")}
                        >
                          Búsqueda de Linkedin
                        </button>
                        <button
                            type='button'
                            className={styles.button3}
                            onClick={() => handleButtonClick("cargar")}
                        >
                          Cargar Archivo CSV
                        </button>
                        <button
                            type='button'
                            className={styles.button3}
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
                                <h2>Adjunta algún documento que desees compartir</h2>
                                <input className={styles.input2} id="file" type="file"></input>
                                <label htmlFor="file">
                                    <img src="/src/assets/flecha.png"></img>
                                </label>
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
