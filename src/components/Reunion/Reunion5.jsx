import React from "react";
import { useEffect, useState } from "react";

import styles from "./reunion.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createResponse } from "../../services/responses/createResponse";


const DEFAULT_DATA_FORM = {
    valor: '',
}

const RESPONSE_NAMES = {
    valor: 'reunion/5/valor',
}
const Reunion5 = ({ defaultResponse = null, campaignId }) => {

    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()

    useEffect(() => {
        if (defaultResponse) {
            const valor = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['valor'])?.answer || ''
            setDataForm({
                valor
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
        navigate(`/campaign/${campaignId}/reunion/6/`)
    } 

    const handelChangeInput = (event) => {
        const { value, name } = event.target 
        setDataForm({ ...dataForm, [name]: value })
    }
    
    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.etapa}>5/6</div>

                <div>
                    <h1>¡Concretemos una reunión!</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>¿Cuál es tu valor diferencial?</h2>
                    <input
                        value={dataForm.valor}
                        name="valor"
                        onChange={handelChangeInput}
                        type="text"
                        placeholder="¿Cuál es tu valor diferencial?"
                        className={styles.input2}
                    ></input>
                </div>

                
                <button className={styles.botonSiguiente}>Siguiente</button>
                

                <Link className={styles.volver} to={`/campaign/${campaignId}/reunion/4/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/reunion/6/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Reunion5;
