import React, { useEffect, useState } from "react";
import styles from "./reunion.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FileDroper } from "../General/FileDroper"; 
import { createResponse } from "../../services/responses/createResponse";

const DEFAULT_DATA_FORM = {
    document: '',
}

const RESPONSE_NAMES = {
    document: 'reunion/6/document',
}

const Reunion6 = ({ defaultResponse = null, campaignId }) => {
    const [popUp, setPopUp] = useState(false);
    const [effect, setEffect] = useState();
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)


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

                <div className={styles.etapa}>6/6</div>

                <div>
                    <h1>¡Concretemos una reunión!</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>Adjunta algún documento que desees compartir</h2>
                    <FileDroper
                        onDrop={handleSelectFile}
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

                
                <button
                    className={styles.botonSiguiente}
                        
                >
            Finalizar
                </button>
               

                <Link className={styles.volver} to={`/campaign/${campaignId}/aumentarred/2/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
            </form>
        </div>
    );
};

export default Reunion6;
