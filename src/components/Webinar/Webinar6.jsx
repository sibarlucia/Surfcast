import { useEffect, useState } from "react";
import styles from "./webinar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FileDroper } from "../General/FileDroper"; 
import { addCampaignDocument } from "../../services/campaign/addCampaignDocument";


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
            const file = dataForm[inputName] 
            addCampaignDocument(campaignId, file)
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
                <section className={styles.etapa}>6/6</section>
                <article className={styles.mainArticle}>

                    <section>
                        <h1>¡Concretemos una reunión!</h1>
                        <p>Es hora de personalizar tu campaña</p>
                    </section>
                    <section className={styles.files}>
                        <h2>Adjunta algún documento que desees compartir</h2>
                        <FileDroper
                            onDrop={handleSelectFile}
                            accept=".pdf,.jpg,.png,jpeg"
                        />
                        {
                            typeof dataForm.document === 'object' && (
                                <span>
                                    {dataForm.document.name}
                                </span>
                            ) 
                        }
                    </section>
                    
                </article>
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


                <Link className={styles.volver} to={`/campaign/${campaignId}/webinar/5/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
            </form>
        </div>
    );
};

export default Webinar6;
