import React, {useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./producto.module.css";
import { createResponse } from "../../services/responses/createResponse";

const DEFAULT_DATA_FORM = {
    benefit1: '',
    benefit2: '',
    benefit3: ''
}

const RESPONSE_NAMES = {
    benefit1: 'producto/2/benefit1',
    benefit2: 'producto/2/benefit2',
    benefit3: 'producto/2/benefit3'
}
"producto/2/benefit1"
const Producto2 = ({ defaultResponse = null, campaignId }) => {

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
        navigate(`/campaign/${campaignId}/producto/3/`)
    } 


    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit} >
        
                <section className={styles.etapa}>
                    2/5
                </section>
                <article className={styles.mainArticle}>
                    <section>
                        <h1>¡Promocionemos tu producto o servicio!</h1>
                        <p>Es hora de personalizar tu campaña</p>
                    </section>
                    <section>
                        <h2>3 beneficios clave que brindarás</h2>
                        <input
                            type="text"
                            placeholder="1."
                            className={styles.input3}
                            value={dataForm.benefit1}
                            name="benefit1"
                            onChange={handleChangeSelectValue}
                        ></input>
                        <input
                            type="text"
                            placeholder="2."
                            className={styles.input3}
                            value={dataForm.benefit2}
                            name="benefit2"
                            onChange={handleChangeSelectValue}
                        ></input>
                        <input
                            type="text"
                            placeholder="3."
                            className={styles.input3}
                            value={dataForm.benefit3}
                            name="benefit3"
                            onChange={handleChangeSelectValue}
                        ></input>
                    </section>
                   
                </article>

                <section>
                        
                    <button className={styles.botonSiguiente}>Siguiente</button>
                    
                </section>

                <Link className={styles.volver} to={`/campaign/${campaignId}/producto/1/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/producto/3/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Producto2;
