import React from "react";
import { useEffect, useState } from "react";

import styles from "./reunion.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createResponse } from "../../services/responses/createResponse";


const DEFAULT_DATA_FORM = {
    servicio: '',
}

const RESPONSE_NAMES = {
    servicio: 'reunion/3/servicio',
}


const Reunion3 = ({ defaultResponse = null, campaignId }) => {

    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()
    

    useEffect(() => {
        if (defaultResponse) {
            const servicio = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['service'])?.answer || ''
            setDataForm({
                servicio
            })
        }
    }, [defaultResponse])

    const handleSubmit = (event) => {
        event.preventDefault()
        Object.keys(dataForm).forEach(inputName => {
            createResponse({
                question_name: RESPONSE_NAMES[inputName],
                type: 'string',
                answer: dataForm[inputName],
                campaign_id: campaignId
            })
        })
        navigate(`/campaign/${campaignId}/reunion/4/`)
    } 

    const handelChangeInput = (event) => {
        const { value, name } = event.target 
        setDataForm({ ...dataForm, [name]: value })
    }

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.etapa}>3/6</div>

                <div>
                    <h1>¡Concretemos una reunión!</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>¿Qué servicio brindarás?</h2>
                    <input
                        

                        value={dataForm.topic}
                        name="servicio"
                        onChange={handelChangeInput}
                        type="text"
                        placeholder="¿Qué necesidad satisface o qué problema soluciona?"
                        className={styles.input2}
                    ></input>
                </div>

                
                <button className={styles.botonSiguiente}>Siguiente</button>
                

                <Link className={styles.volver} to={`/campaign/${campaignId}/reunion/2/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/reunion/4/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Reunion3;
