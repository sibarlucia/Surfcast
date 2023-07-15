import React from "react";
import { useEffect, useState } from "react";

import styles from "./reunion.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createResponse } from "../../services/responses/createResponse";


const DEFAULT_DATA_FORM = {
    link: ''
}

const RESPONSE_NAMES = {
    link: 'reunion/2/link'
}

const Reunion2 = ({defaultResponse = null, campaignId}) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()

    console.log(dataForm)

    useEffect(() => {
        if (defaultResponse) {
            const link = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['link'])?.answer || ''
            setDataForm({
                link
            })
        }
    }, [defaultResponse])

    const handleChangeSelectValue = (event) => {
        const { value, name } = event.target 
        setDataForm({ ...dataForm, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({dataForm})
        Object.keys(dataForm).forEach(inputName => {
            createResponse({
                question_name: RESPONSE_NAMES[inputName],
                type: 'string',
                answer: dataForm[inputName],
                campaign_id: campaignId
            })
        })
        navigate(`/campaign/${campaignId}/reunion/3/`)
    } 

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.etapa}>2/6</div>

                <div>
                    <h1>¡Concretemos una reunión!</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>Deja el link de tu agenda para que conozcan tu disponibilidad</h2>
                    <input
                        value={dataForm.link}
                        name="link"
                        onChange={handleChangeSelectValue}
                        type="url"
                        placeholder="https://workspace.com/webinar/"
                        className={styles.input}
                    ></input>
                </div>

                
                <button className={styles.botonSiguiente}>Siguiente</button>
                

                <Link className={styles.volver} to={`/campaign/${campaignId}/reunion/1/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/reunion/3/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Reunion2;
