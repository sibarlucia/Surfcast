import React from "react";
import { useEffect, useState } from "react";

import styles from "./reunion.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createResponse } from "../../services/responses/createResponse";

const DEFAULT_DATA_FORM = {
    benefit1: '',
    benefit2: '',
    benefit3: ''
}

const RESPONSE_NAMES = {
    benefit1: 'reunion/4/benefit1',
    benefit2: 'reunion/4/benefit2',
    benefit3: 'reunion/4/benefit3'
}



const Reunion4 = ({ defaultResponse = null, campaignId }) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()
  
    useEffect(() => {
        if (defaultResponse) {
            const benefit1 = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['benefit1'])?.answer || ''
            const benefit2 = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['benefit2'])?.answer || ''
            const benefit3 = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['benefit3'])?.answer || ''
           
            setDataForm({
                benefit1,
                benefit2,
                benefit3
            })
        }
    }, [defaultResponse])
  
  
    const handleChangeSelectValue = (event) => {
        const { value, name } = event.target 
        setDataForm({ ...dataForm, [name]: value })
    }
  
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
        navigate(`/campaign/${campaignId}/reunion/5/`)
    } 
    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.etapa}>4/6</div>

                <div>
                    <h1>¡Concretemos una reunión!</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>3 Beneficios que brinde tu producto o servicio</h2>
                    <input type="text"
                        placeholder="1."
                        className={styles.input3}
                        value={dataForm.benefit1}
                        name="benefit1"
                        onChange={handleChangeSelectValue}
                    ></input>

                    <input type="text"
                        placeholder="2."
                        className={styles.input3}
                        value={dataForm.benefit2}
                        name="benefit2"
                        onChange={handleChangeSelectValue}
                    ></input>

                    <input type="text"
                        placeholder="3."
                        className={styles.input3}
                        value={dataForm.benefit3}
                        name="benefit3"
                        onChange={handleChangeSelectValue}
                    ></input>

                </div>

                
                <button className={styles.botonSiguiente}>Siguiente</button>
              

                <Link className={styles.volver} to={`/campaign/${campaignId}/reunion/3/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/reunion/5/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Reunion4;
