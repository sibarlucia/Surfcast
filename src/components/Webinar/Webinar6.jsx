import { useEffect, useState } from "react";
import styles from "./webinar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FileDroper } from "../General/FileDroper"; 
import { createResponse } from "../../services/responses/createResponse";


const DEFAULT_DATA_FORM = {
    document: ''
}

const RESPONSE_NAMES = {
    document: 'webinar/6/document',
}

const Webinar6 = ({ defaultResponse = null, campaignId }) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const [popUp, setPopUp] = useState(false);
    const [effect, setEffect] = useState();

    const navigate = useNavigate();

    const blur = styles.blur;

    useEffect(() => {
        if (defaultResponse) {
            const document = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['document'])?.answer || ''
            setDataForm({
                document
            })
        }
    }, [defaultResponse])

    const handleSelectFile = (files) => {
        const file = files[0]
        setDataForm({ ...dataForm, document: file })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        Object.keys(dataForm).forEach(inputName => {
            let type = 'string' 
            if (typeof dataForm[inputName] === Object) {
                type = 'file'
            }
            createResponse({
                question_name: RESPONSE_NAMES[inputName],
                type,
                answer: dataForm[inputName],
                campaign_id: campaignId
            })
        })
        setPopUp(true);
        setEffect(blur);
        setTimeout(() => {
            navigate(`/campaign/${campaignId}/importacion/3/`)
        }, 3000);
    } 

    return (
        <div className={styles.mainDiv}>
            <form className={effect} onSubmit={handleSubmit}>
                {popUp == true && (
                    <section className={styles.fondoImg}>
                        <img
                            className={styles.imagenFinalizar}
                            src="/src/assets/popUp.png"
                        />
                    </section>
                )}
                <article className={styles.mainArticle}>
                    <section className={styles.etapa}>6/6</section>

                    <section>
                        <h1>¡Concretemos una reunión!</h1>
                        <p>Es hora de personalizar tu campaña</p>
                    </section>
                    <section className={styles.files}>
                        <h2>Adjunta algún documento que desees compartir</h2>
                        <FileDroper
                            onDrop={handleSelectFile}
                        />
                        {
                            typeof dataForm.document === 'object' && (
                                <span>
                                    {dataForm.document.name}
                                </span>
                            ) 
                        }
                    </section>
                    <section>
                        {/* <Link to="/webinar/6"> */}
                        <button
                            className={styles.botonSiguiente}
                            // onClick={() => handleFinalizar()}
                        >
                            Finalizar
                        </button>
                        {/* </Link> */}
                    </section>
                </article>

                <div className={styles.etapa}></div>

                <div></div>

                <div></div>

                <Link className={styles.volver} to={`/campaign/${campaignId}/webinar/5/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
            </form>
        </div>
    );
};

export default Webinar6;
