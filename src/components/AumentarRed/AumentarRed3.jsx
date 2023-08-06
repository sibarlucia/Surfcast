import { useEffect, useState } from "react";
import styles from "./aumentarRed.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FileDroper } from "../General/FileDroper"; 
import { addCampaignDocument } from "../../services/campaign/addCampaignDocument";

const DEFAULT_DATA_FORM = {
    document: '',
}

const RESPONSE_NAMES = {
    document: 'aumentaTuRed/3/document',
}

const AumentarRed3 = ({ defaultResponse = null, campaignId }) => {
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

    const handleSelectFile = (files) => {
        const file = files[0]
        setDataForm({ ...dataForm, document: file })
    }

    return (
        <div className={styles.mainDiv}>
            <form className={effect} onSubmit={handleSubmit}>
                {popUp == true && (
                    <div className={styles.fondoImg}>
                        <img
                            className={styles.imagenFinalizar}
                            src="/src/assets/popUp.png"
                        />
                    </div>
                )}

                <div className={styles.etapa}>3/3</div>

                <div>
                    <h1>Hagamos crecer tu red!</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>Adjunta algún documento que desees compartir</h2>
                    <FileDroper
                        onDrop={handleSelectFile}
                        accept=".pdf,.jpg,.png,jpeg"
                    >
                    </FileDroper>
                    {
                        typeof dataForm.document === 'object' && (
                            <span>
                                {dataForm.document.name}
                            </span>
                        ) 
                    }
                </div>

                {/* <Link to="/aumentarred/3"> */}
                <button
                    className={styles.botonSiguiente}
                    // onClick={() => handleFinalizar()}
                >
            Finalizar
                </button>
                {/* </Link> */}
                <Link className={styles.volver} to={`/campaign/${campaignId}/aumentarred/2/`} >
                    <img src="/src/assets/volvernegro.png" />
                </Link>
        
        
            </form>
        </div>
    );
};

export default AumentarRed3;
