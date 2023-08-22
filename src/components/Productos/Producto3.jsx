import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./producto.module.css";
import { createResponse } from "../../services/responses/createResponse";

const DEFAULT_DATA_FORM = {
    precio: '',
    link: ''
}

const RESPONSE_NAMES = {
    precio: 'producto/3/precio',
    link: 'producto/3/link'
}

const Producto3 = ({defaultResponse = null, campaignId}) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()

    console.log(dataForm)

    useEffect(() => {
        if (defaultResponse) {
            const precio = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['precio'])?.answer || ''
            const link = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['link'])?.answer || ''

            setDataForm({
                precio,
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
        navigate(`/campaign/${campaignId}/producto/4/`)
    } 


    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <section className={styles.etapa}>3/5</section>
                <article className={styles.mainArticle}>
                    <section>
                        <h1>¡Promocionemos tu producto o servicio!</h1>
                        <p>Es hora de personalizar tu campaña</p>
                    </section>
                    <section>
                        <h2>Precio</h2>
                        <input
                            

                            type="text"
                            placeholder="Escribe aquí"
                            className={styles.input2}
                            value={dataForm.precio}
                            name='precio'
                            onChange={handleChangeSelectValue}
                        ></input>
                    </section>
                    <section>
                        <h2>¿Dónde lo puedo conseguir?</h2>
                        <p>Pega el link aquí</p>
                        <input
                            value={dataForm.link}
                            name="link"
                            onChange={handleChangeSelectValue}
                            type="url"
                            placeholder="https://workspace.com/webinar/"
                            className={styles.input}
                        ></input>
                    </section>
                </article>

                <section>
                    <button className={styles.botonSiguiente}>Siguiente</button>
                </section>
       
                <Link className={styles.volver} to={`/campaign/${campaignId}/producto/2/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/producto/4/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Producto3;
